import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShieldCheck, AlertCircle, Loader2, Download, Eye, Copy, Check, ArrowLeft } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type Cert = {
  id: string;
  full_name: string;
  course_name: string;
  issue_date: string;
  certificate_id: string;
  has_pdf: boolean;
};

const CertificacionVerificar = () => {
  const { code } = useParams<{ code: string }>();
  const { toast } = useToast();
  const [cert, setCert] = useState<Cert | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [showPdf, setShowPdf] = useState(false);
  const [copied, setCopied] = useState(false);

  const verifyUrl = typeof window !== "undefined" ? `${window.location.origin}/certificaciones/verificar/${code}` : "";

  useEffect(() => {
    const load = async () => {
      if (!code) return;
      setLoading(true);
      const { data } = await supabase.rpc("get_certification_by_code", { _certificate_id: code });
      const row = Array.isArray(data) ? data[0] : null;
      if (!row) {
        setNotFound(true);
      } else {
        setCert(row as Cert);
        if (row.has_pdf) {
          const { data: pdfData } = await supabase.functions.invoke("get-certificate-pdf", {
            body: { certificate_id: code },
          });
          if (pdfData?.url) setPdfUrl(pdfData.url);
        }
      }
      setLoading(false);
    };
    load();
  }, [code]);


  const copyLink = async () => {
    await navigator.clipboard.writeText(verifyUrl);
    setCopied(true);
    toast({ title: "Enlace copiado", description: "El enlace de verificación se copió al portapapeles." });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/certificaciones" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="w-4 h-4" /> Volver a búsqueda
          </Link>

          {loading && (
            <Card><CardContent className="p-12 text-center text-muted-foreground">
              <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2" /> Cargando certificado...
            </CardContent></Card>
          )}

          {!loading && notFound && (
            <Card><CardContent className="p-12 text-center">
              <AlertCircle className="w-10 h-10 mx-auto text-destructive mb-3" />
              <h2 className="text-xl font-semibold mb-2">Certificado no encontrado</h2>
              <p className="text-muted-foreground">El Certificate ID no existe o ha sido revocado.</p>
            </CardContent></Card>
          )}

          {!loading && cert && (
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="bg-emerald-50 border-b border-emerald-100 p-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-emerald-700 font-semibold">Certificado válido</p>
                  <p className="text-sm text-emerald-600/80">Verificado oficialmente por CORMA</p>
                </div>
              </div>

              <CardContent className="p-6 md:p-8 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-5">
                  <Field label="Nombre completo" value={cert.full_name} />
                  <Field label="Número de Identificación" value={cert.dni} />
                  <Field label="Curso / Programa" value={cert.course_name} />
                  <Field label="Fecha de emisión" value={new Date(cert.issue_date).toLocaleDateString("es-PE", { year: "numeric", month: "long", day: "numeric" })} />
                  <Field label="Certificate ID" value={cert.certificate_id} mono />

                  <div className="flex flex-wrap gap-2 pt-2">
                    {pdfUrl && (
                      <>
                        <Button onClick={() => setShowPdf(true)} className="gap-2">
                          <Eye className="w-4 h-4" /> Ver certificado
                        </Button>
                        <Button asChild variant="outline" className="gap-2">
                          <a href={pdfUrl} download target="_blank" rel="noreferrer">
                            <Download className="w-4 h-4" /> Descargar PDF
                          </a>
                        </Button>
                      </>
                    )}
                    <Button variant="outline" onClick={copyLink} className="gap-2">
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copied ? "Copiado" : "Copiar enlace"}
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-start gap-3 border-t md:border-t-0 md:border-l pt-6 md:pt-0 md:pl-8">
                  <div className="p-3 bg-white border rounded-lg">
                    <QRCodeCanvas value={verifyUrl} size={140} />
                  </div>
                  <p className="text-xs text-muted-foreground text-center max-w-[160px]">
                    Escanea para verificar este certificado en línea
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Dialog open={showPdf} onOpenChange={setShowPdf}>
        <DialogContent className="max-w-5xl h-[85vh] p-0 overflow-hidden">
          <DialogHeader className="px-4 py-3 border-b">
            <DialogTitle>Vista previa del certificado</DialogTitle>
          </DialogHeader>
          {pdfUrl && (
            <iframe src={pdfUrl} className="w-full h-full" title="Certificado PDF" />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

const Field = ({ label, value, mono }: { label: string; value: string; mono?: boolean }) => (
  <div>
    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">{label}</p>
    <p className={`text-base font-medium ${mono ? "font-mono" : ""}`}>{value}</p>
  </div>
);

export default CertificacionVerificar;
