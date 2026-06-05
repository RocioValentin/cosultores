import { useState, useMemo, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, Monitor, BookOpen, ArrowUpRight, Filter, Flame, GraduationCap, Timer, Sparkles, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Curso {
  id: number;
  titulo: string;
  categoria: string;
  modalidad: "Sincrónico" | "Asincrónico";
  estado: "Por iniciar" | "En curso" | "Finalizado";
  fecha_inicio: string;
  duracion: string;
  descripcion: string;
  badge: string;
}

const cursosData: Curso[] = [
  { id: 1, titulo: "Fundamentos de Metrología Aplicada al Laboratorio", categoria: "Metrología", modalidad: "Sincrónico", estado: "Por iniciar", fecha_inicio: "2026-04-25", duracion: "4 semanas", descripcion: "Curso enfocado en principios de medición, trazabilidad, incertidumbre y calibración en entornos de laboratorio.", badge: "Próximo inicio" },
  { id: 2, titulo: "Gestión de Calidad en Laboratorios ISO 17025", categoria: "Calidad", modalidad: "Asincrónico", estado: "En curso", fecha_inicio: "2026-04-10", duracion: "6 semanas", descripcion: "Implementación de sistemas de gestión de calidad y cumplimiento normativo bajo ISO 17025.", badge: "Más solicitado" },
  { id: 3, titulo: "Auditoría Interna para Laboratorios", categoria: "Auditoría", modalidad: "Sincrónico", estado: "Finalizado", fecha_inicio: "2026-03-01", duracion: "3 semanas", descripcion: "Formación en auditorías internas, hallazgos, acciones correctivas y mejora continua.", badge: "Curso finalizado" },
  { id: 4, titulo: "Validación de Métodos Analíticos", categoria: "Validación de métodos", modalidad: "Sincrónico", estado: "Por iniciar", fecha_inicio: "2026-05-12", duracion: "5 semanas", descripcion: "Metodología para validar procedimientos analíticos según estándares internacionales y criterios de aceptación.", badge: "Nuevo curso" },
  { id: 5, titulo: "Estimación de Incertidumbre de Medición", categoria: "Metrología", modalidad: "Asincrónico", estado: "En curso", fecha_inicio: "2026-04-05", duracion: "4 semanas", descripcion: "Cálculo y expresión de la incertidumbre de medición aplicando la guía GUM y métodos estadísticos.", badge: "Últimos cupos" },
  { id: 6, titulo: "Interpretación y Aplicación de la Norma ISO 17025:2017", categoria: "ISO 17025", modalidad: "Sincrónico", estado: "Por iniciar", fecha_inicio: "2026-05-20", duracion: "3 semanas", descripcion: "Análisis detallado de los requisitos de la norma ISO/IEC 17025:2017 y su implementación práctica.", badge: "Próximo inicio" },
  { id: 7, titulo: "Control de Calidad Analítico y Cartas de Control", categoria: "Calidad", modalidad: "Asincrónico", estado: "Por iniciar", fecha_inicio: "2026-06-01", duracion: "4 semanas", descripcion: "Herramientas estadísticas para el control de calidad analítico: cartas de control, ensayos de aptitud y materiales de referencia.", badge: "Nuevo curso" },
  { id: 8, titulo: "Gestión de No Conformidades y Acciones Correctivas", categoria: "Auditoría", modalidad: "Sincrónico", estado: "Finalizado", fecha_inicio: "2026-02-15", duracion: "2 semanas", descripcion: "Identificación, tratamiento y seguimiento de no conformidades con enfoque en análisis de causa raíz.", badge: "Curso finalizado" },
];

const estadoColors: Record<string, { bg: string; text: string; border: string }> = {
  "Por iniciar": { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  "En curso": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  "Finalizado": { bg: "bg-gray-50", text: "text-gray-500", border: "border-gray-200" },
};

const estadoAccent: Record<string, string> = {
  "Por iniciar": "border-l-emerald-500",
  "En curso": "border-l-blue-500",
  "Finalizado": "border-l-gray-400",
};

const badgeConfig: Record<string, { icon: React.ElementType; className: string }> = {
  "Próximo inicio": { icon: Flame, className: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  "Más solicitado": { icon: Sparkles, className: "bg-amber-100 text-amber-700 border-amber-200" },
  "Nuevo curso": { icon: GraduationCap, className: "bg-primary/10 text-primary border-primary/20" },
  "Últimos cupos": { icon: Timer, className: "bg-red-100 text-red-700 border-red-200" },
  "Curso finalizado": { icon: BookOpen, className: "bg-gray-100 text-gray-500 border-gray-200" },
};

const allEstados = ["Por iniciar", "En curso", "Finalizado"] as const;
const allModalidades = ["Sincrónico", "Asincrónico"] as const;
const allCategorias = [...new Set(cursosData.map((c) => c.categoria))];

const formatDate = (dateStr: string) => {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric" });
};

const estadoOrder: Record<string, number> = { "En curso": 0, "Por iniciar": 1, "Finalizado": 2 };

// Dropdown filter component
const DropdownFilter = ({ label, options, value, onChange }: { label: string; options: string[]; value: string | null; onChange: (v: string | null) => void }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
          value
            ? "bg-primary text-primary-foreground border-primary shadow-sm"
            : "bg-card text-muted-foreground border-border hover:border-primary/30 hover:text-foreground"
        }`}
      >
        {value || label}
        {value ? (
          <X className="w-3.5 h-3.5 cursor-pointer" onClick={(e) => { e.stopPropagation(); onChange(null); }} />
        ) : (
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
        )}
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-xl shadow-lg z-20 min-w-[180px] py-1 animate-in fade-in-0 zoom-in-95 duration-150">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => { onChange(value === opt ? null : opt); setOpen(false); }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                value === opt ? "bg-primary/10 text-primary font-medium" : "text-foreground hover:bg-muted"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const CursosCatalogo = () => {
  const [filtroEstado, setFiltroEstado] = useState<string | null>(null);
  const [filtroModalidad, setFiltroModalidad] = useState<string | null>(null);
  const [filtroCategoria, setFiltroCategoria] = useState<string | null>(null);

  const cursosFiltrados = useMemo(() => {
    return cursosData
      .filter((c) => {
        if (filtroEstado && c.estado !== filtroEstado) return false;
        if (filtroModalidad && c.modalidad !== filtroModalidad) return false;
        if (filtroCategoria && c.categoria !== filtroCategoria) return false;
        return true;
      })
      .sort((a, b) => {
        const orderDiff = estadoOrder[a.estado] - estadoOrder[b.estado];
        if (orderDiff !== 0) return orderDiff;
        return new Date(a.fecha_inicio).getTime() - new Date(b.fecha_inicio).getTime();
      });
  }, [filtroEstado, filtroModalidad, filtroCategoria]);

  const hasFilters = filtroEstado || filtroModalidad || filtroCategoria;

  return (
    <div>
      {/* Filtros compactos */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <Filter className="w-4 h-4 text-primary" />
        <DropdownFilter label="Estado" options={[...allEstados]} value={filtroEstado} onChange={setFiltroEstado} />
        <DropdownFilter label="Modalidad" options={[...allModalidades]} value={filtroModalidad} onChange={setFiltroModalidad} />
        <DropdownFilter label="Categoría" options={allCategorias} value={filtroCategoria} onChange={setFiltroCategoria} />
        {hasFilters && (
          <button
            onClick={() => { setFiltroEstado(null); setFiltroModalidad(null); setFiltroCategoria(null); }}
            className="text-sm text-accent hover:underline font-medium ml-1"
          >
            Limpiar
          </button>
        )}
        <span className="text-muted-foreground text-sm ml-auto">
          {cursosFiltrados.length} de {cursosData.length} cursos
        </span>
      </div>

      {/* Grid de cursos */}
      {cursosFiltrados.length === 0 ? (
        <div className="text-center py-16 bg-card rounded-2xl border border-border">
          <BookOpen className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
          <p className="text-muted-foreground text-lg">No se encontraron cursos con los filtros seleccionados.</p>
          <button onClick={() => { setFiltroEstado(null); setFiltroModalidad(null); setFiltroCategoria(null); }} className="mt-4 text-accent font-medium hover:underline">
            Ver todos los cursos
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {cursosFiltrados.map((curso) => {
            const colors = estadoColors[curso.estado];
            const accent = estadoAccent[curso.estado];
            const badgeCfg = badgeConfig[curso.badge] || badgeConfig["Nuevo curso"];
            const BadgeIcon = badgeCfg.icon;
            const isFinished = curso.estado === "Finalizado";

            return (
              <div
                key={curso.id}
                className={`group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 border-l-4 ${accent} ${isFinished ? "opacity-75" : ""}`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`${badgeCfg.className} border gap-1.5 text-xs font-semibold`}>
                      <BadgeIcon className="w-3.5 h-3.5" />
                      {curso.badge}
                    </Badge>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${colors.bg} ${colors.text} ${colors.border}`}>
                      {curso.estado}
                    </span>
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                    {curso.titulo}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{curso.descripcion}</p>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {/* <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary/70 flex-shrink-0" />
                      <span>{formatDate(curso.fecha_inicio)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary/70 flex-shrink-0" />
                      <span>{curso.duracion}</span>
                    </div> */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Monitor className="w-4 h-4 text-primary/70 flex-shrink-0" />
                      <span>{curso.modalidad}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="w-4 h-4 text-primary/70 flex-shrink-0" />
                      <span>{curso.categoria}</span>
                    </div>
                  </div>
                  <Link to="/contacto">
                    <Button
                      className={`w-full rounded-xl h-11 font-medium ${
                        isFinished
                          ? "bg-muted text-muted-foreground hover:bg-muted/80"
                          : "bg-primary hover:bg-primary/90 text-primary-foreground"
                      }`}
                    >
                      {isFinished ? "Ver información" : "Solicitar información"}
                      <ArrowUpRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CursosCatalogo;
