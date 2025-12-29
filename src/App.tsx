import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Consultorias from "./pages/Consultorias";
import Capacitaciones from "./pages/Capacitaciones";
import Implementaciones from "./pages/Implementaciones";
import Auditoria from "./pages/Auditoria";
import Aprendizaje from "./pages/Aprendizaje";
import Cursos from "./pages/Cursos";
import Programas from "./pages/Programas";
import Especializaciones from "./pages/Especializaciones";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/consultorias" element={<Consultorias />} />
          <Route path="/servicios/capacitaciones" element={<Capacitaciones />} />
          <Route path="/servicios/implementaciones" element={<Implementaciones />} />
          <Route path="/servicios/auditoria" element={<Auditoria />} />
          <Route path="/aprendizaje" element={<Aprendizaje />} />
          <Route path="/aprendizaje/cursos" element={<Cursos />} />
          <Route path="/aprendizaje/programas" element={<Programas />} />
          <Route path="/aprendizaje/especializaciones" element={<Especializaciones />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
