import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, FileText, ShieldCheck, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

type Cert = {
  id: string;
  full_name: string;
  dni: string;
  course_name: string;
  issue_date: string;
  pdf_url: string | null;
  verification_code: string;
};

const Certificaciones = () => {
  const [dni, setDni] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Cert[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const trimmed = dni.trim();
    if (!/^[0-9A-Za-z\-]{4,20}$/.test(trimmed)) {
      setError("Ingresa un DNI válido (4 a 20 caracteres alfanuméricos).");
      return;
    }
    setLoading(true);
    setResults(null);
    const { data, error: err } = await supabase
      .from("certifications")
      .select("*")
      .eq("dni", trimmed)
      .order("issue_date", { ascending: false });
    setLoading(false);
    if (err) {
      setError("Ocurrió un error al buscar. Intenta de nuevo.");
      return;
    }
    setResults(data ?? []);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="hero-gradient text-white pt-32 pb-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm mb-6">
              <ShieldCheck className="w-4 h-4" />
              Verificación oficial de certificados CORMA
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Verifica tu certificado</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Ingresa tu número de DNI para consultar y descargar los certificados emitidos por CORMA.
            </p>
          </div>
        </section>

        <section className="py-12 -mt-10">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card className="shadow-xl border-0">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      value={dni}
                      onChange={(e) => setDni(e.target.value)}
                      placeholder="Ingresa tu Número de Identificación"
                      className="pl-10 h-12 text-base"
                      maxLength={20}
                    />
                  </div>
                  <Button type="submit" disabled={loading} size="lg" className="h-12 px-8">
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Buscar"}
                  </Button>
                </form>
                {error && (
                  <div className="mt-4 flex items-start gap-2 text-sm text-destructive">
                    <AlertCircle className="w-4 h-4 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="mt-8 space-y-4">
              {loading && (
                <div className="text-center py-8 text-muted-foreground">
                  <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2" />
                  Buscando certificados...
                </div>
              )}

              {results && results.length === 0 && (
                <Card className="border-dashed">
                  <CardContent className="p-8 text-center">
                    <AlertCircle className="w-10 h-10 mx-auto text-muted-foreground mb-3" />
                    <h3 className="font-semibold mb-1">No encontramos certificados</h3>
                    <p className="text-sm text-muted-foreground">
                      No hay certificados asociados al DNI <strong>{dni}</strong>. Verifica los datos o contáctanos si crees que es un error.
                    </p>
                  </CardContent>
                </Card>
              )}

              {results && results.map((c) => (
                <Card key={c.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg truncate">{c.course_name}</h3>
                      <p className="text-sm text-muted-foreground">{c.full_name} · DNI {c.dni}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Emitido el {new Date(c.issue_date).toLocaleDateString("es-PE", { year: "numeric", month: "long", day: "numeric" })}
                      </p>
                    </div>
                    <Link to={`/certificaciones/verificar/${c.verification_code}`}>
                      <Button variant="outline" className="gap-2">
                        Ver certificado <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Certificaciones;
