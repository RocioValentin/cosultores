import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ShieldCheck } from "lucide-react";

const CertificacionesAuth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate("/certificaciones/admin", { replace: true });
    });
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast({ title: "Error de acceso", description: error.message, variant: "destructive" });
      return;
    }
    navigate("/certificaciones/admin", { replace: true });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center pt-28 pb-16 px-4">
        <Card className="w-full max-w-md shadow-xl border-0">
          <CardContent className="p-8">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h1 className="text-2xl font-bold">Acceso de administrador</h1>
              <p className="text-sm text-muted-foreground mt-1">Gestión de certificados CORMA</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Correo</Label>
                <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="password">Contraseña</Label>
                <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Iniciar sesión"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default CertificacionesAuth;
