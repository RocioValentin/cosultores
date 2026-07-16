import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Plus, Pencil, Trash2, Search, LogOut, ExternalLink, ShieldAlert } from "lucide-react";

type Cert = {
  id: string;
  full_name: string;
  dni: string;
  course_name: string;
  issue_date: string;
  pdf_url: string | null;
  certificate_id: string;
  created_at: string;
};

const empty = { certificate_id: "", full_name: "", dni: "", course_name: "", issue_date: "" };

const CertificacionesAdmin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [certs, setCerts] = useState<Cert[]>([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Cert | null>(null);
  const [form, setForm] = useState(empty);
  const [file, setFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/certificaciones/auth", { replace: true });
        return;
      }
      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id);
      const admin = !!roles?.some((r) => r.role === "admin");
      setIsAdmin(admin);
      setChecking(false);
      if (admin) load();
    };
    init();

    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) navigate("/certificaciones/auth", { replace: true });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("certifications")
      .select("*")
      .order("created_at", { ascending: false });
    setLoading(false);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
      return;
    }
    setCerts((data ?? []) as Cert[]);
  };

  const filtered = certs.filter((c) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      c.dni.toLowerCase().includes(q) ||
      c.full_name.toLowerCase().includes(q) ||
      c.course_name.toLowerCase().includes(q) ||
      c.certificate_id.toLowerCase().includes(q)
    );
  });

  const openCreate = () => {
    setEditing(null);
    setForm(empty);
    setFile(null);
    setDialogOpen(true);
  };

  const openEdit = (c: Cert) => {
    setEditing(c);
    setForm({
      certificate_id: c.certificate_id,
      full_name: c.full_name,
      dni: c.dni,
      course_name: c.course_name,
      issue_date: c.issue_date,
    });
    setFile(null);
    setDialogOpen(true);
  };

  const uploadPdf = async (certId: string): Promise<string | null> => {
    if (!file) return null;
    const safeKey = certId.replace(/[^a-zA-Z0-9.\-_]/g, "_");
    const path = `${safeKey}/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_")}`;
    const { error } = await supabase.storage.from("certificates").upload(path, file, {
      upsert: true,
      contentType: file.type || "application/pdf",
    });
    if (error) throw error;
    return path;
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const certificateId = form.certificate_id.trim();
    if (!certificateId) {
      toast({ title: "Error", description: "El Certificate ID es obligatorio.", variant: "destructive" });
      return;
    }
    setSaving(true);
    try {
      // Uniqueness check
      const { data: existing } = await supabase
        .from("certifications")
        .select("id")
        .eq("certificate_id", certificateId)
        .maybeSingle();
      if (existing && existing.id !== editing?.id) {
        throw new Error("Ya existe un certificado con ese Certificate ID.");
      }

      const payload = { ...form, certificate_id: certificateId };

      if (editing) {
        let newPdfPath: string | null = null;
        if (file) {
          newPdfPath = await uploadPdf(certificateId);
          if (editing.pdf_url) await supabase.storage.from("certificates").remove([editing.pdf_url]);
        }
        const updates = newPdfPath ? { ...payload, pdf_url: newPdfPath } : payload;
        const { error } = await supabase.from("certifications").update(updates).eq("id", editing.id);
        if (error) throw error;
        toast({ title: "Certificado actualizado" });
      } else {
        const { data: inserted, error } = await supabase
          .from("certifications")
          .insert(payload)
          .select()
          .single();
        if (error) throw error;
        if (file && inserted) {
          const path = await uploadPdf(inserted.certificate_id);
          if (path) await supabase.from("certifications").update({ pdf_url: path }).eq("id", inserted.id);
        }
        toast({ title: "Certificado creado" });
      }
      setDialogOpen(false);
      load();
    } catch (err) {
      toast({ title: "Error", description: (err as Error).message, variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (c: Cert) => {
    if (!confirm(`¿Eliminar el certificado de ${c.full_name}?`)) return;
    if (c.pdf_url) await supabase.storage.from("certificates").remove([c.pdf_url]);
    const { error } = await supabase.from("certifications").delete().eq("id", c.id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Certificado eliminado" });
    load();
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/certificaciones/auth", { replace: true });
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-28 pb-16 px-4">
          <Card className="max-w-md">
            <CardContent className="p-8 text-center">
              <ShieldAlert className="w-10 h-10 mx-auto text-destructive mb-3" />
              <h1 className="text-xl font-bold mb-2">Acceso restringido</h1>
              <p className="text-sm text-muted-foreground mb-4">
                Tu cuenta no tiene permisos de administrador. Contacta al equipo de CORMA para solicitar acceso.
              </p>
              <Button variant="outline" onClick={handleLogout}>Cerrar sesión</Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold">Gestión de certificados</h1>
              <p className="text-sm text-muted-foreground">Crea, edita y administra los certificados emitidos.</p>
            </div>
            <div className="flex gap-2">
              <Button onClick={openCreate} className="gap-2"><Plus className="w-4 h-4" /> Nuevo certificado</Button>
              <Button variant="outline" onClick={handleLogout} className="gap-2"><LogOut className="w-4 h-4" /> Salir</Button>
            </div>
          </div>

          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar por Certificate ID, Número de Identificación, nombre o curso..." className="pl-9" />
              </div>

              {loading ? (
                <div className="text-center py-10 text-muted-foreground">
                  <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                </div>
              ) : filtered.length === 0 ? (
                <div className="text-center py-10 text-muted-foreground text-sm">Sin certificados.</div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Certificate ID</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Número de Identificación</TableHead>
                        <TableHead>Curso</TableHead>
                        <TableHead>Emisión</TableHead>
                        <TableHead>PDF</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filtered.map((c) => (
                        <TableRow key={c.id}>
                          <TableCell className="font-mono text-xs">{c.certificate_id}</TableCell>
                          <TableCell className="font-medium">{c.full_name}</TableCell>
                          <TableCell>{c.dni}</TableCell>
                          <TableCell className="max-w-[220px] truncate">{c.course_name}</TableCell>
                          <TableCell>{new Date(c.issue_date).toLocaleDateString("es-PE", {timeZone: "UTC",})}</TableCell>
                          <TableCell>{c.pdf_url ? <Badge variant="secondary">Sí</Badge> : <Badge variant="outline">No</Badge>}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-1">
                              <Link to={`/certificaciones/verificar/${c.certificate_id}`} target="_blank">
                                <Button size="icon" variant="ghost" title="Ver pública"><ExternalLink className="w-4 h-4" /></Button>
                              </Link>
                              <Button size="icon" variant="ghost" onClick={() => openEdit(c)} title="Editar"><Pencil className="w-4 h-4" /></Button>
                              <Button size="icon" variant="ghost" onClick={() => handleDelete(c)} title="Eliminar"><Trash2 className="w-4 h-4 text-destructive" /></Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editing ? "Editar certificado" : "Nuevo certificado"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <Label>Certificate ID *</Label>
              <Input
                required
                value={form.certificate_id}
                onChange={(e) => setForm({ ...form, certificate_id: e.target.value })}
                placeholder="Ej: CM-26-001"
                className="font-mono"
              />
              <p className="text-xs text-muted-foreground mt-1">Identificador único del certificado. Debe ser único.</p>
            </div>
            <div>
              <Label>Nombre completo</Label>
              <Input required value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Número de Identificación</Label>
                <Input required value={form.dni} onChange={(e) => setForm({ ...form, dni: e.target.value })} />
              </div>
              <div>
                <Label>Fecha de emisión</Label>
                <Input required type="date" value={form.issue_date} onChange={(e) => setForm({ ...form, issue_date: e.target.value })} />
              </div>
            </div>
            <div>
              <Label>Curso / Programa</Label>
              <Input required value={form.course_name} onChange={(e) => setForm({ ...form, course_name: e.target.value })} />
            </div>
            <div>
              <Label>Archivo PDF {editing && "(opcional para reemplazar)"}</Label>
              <Input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
              {editing?.pdf_url && !file && (
                <p className="text-xs text-muted-foreground mt-1">PDF actual: {editing.pdf_url.split("/").pop()}</p>
              )}
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>Cancelar</Button>
              <Button type="submit" disabled={saving}>
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : editing ? "Guardar cambios" : "Crear"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default CertificacionesAdmin;
