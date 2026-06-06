import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Server, Laptop, Calendar, MapPin, BadgeCheck, Network, ArrowRight } from 'lucide-react';
import { REAL_WORLD_EXAMPLES, INDIVIDUAL_REFLECTIONS } from '../data';

export default function ProyectosInvestigacion() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(REAL_WORLD_EXAMPLES[0].id);
  const activeProj = REAL_WORLD_EXAMPLES.find(p => p.id === selectedProjectId) || REAL_WORLD_EXAMPLES[0];
  const activeReflection = INDIVIDUAL_REFLECTIONS.find(r => r.activityId === 'investigacion');

  const getIcon = (id: string) => {
    switch(id) {
      case 'ex-01': return Laptop;
      case 'ex-02': return Terminal;
      case 'ex-03': return Network;
      default: return Server;
    }
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="proyectos-investigacion-actividad-3">
      {/* Activity Header */}
      <div className="text-center mb-10" id="proyectos-title-container">
        <span className="text-xs font-bold font-mono tracking-widest text-[#FF5E00] uppercase bg-orange-50 px-3 py-1 rounded-full">
          Actividad 3 • Compilación & Resumen Gráfico
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
          Proyectos Socio-tecnológicos Reales en Informática
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-base text-gray-500">
          Un compendio de aplicaciones prácticas de la ingeniería de sistemas enfocadas en solucionar vulnerabilidades tecnológicas y propiciar la soberanía digital comunitaria.
        </p>
      </div>

      {/* Graphics Grid Summary Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12" id="proyectos-cards-grid">
        {REAL_WORLD_EXAMPLES.map((proj) => {
          const TechIcon = getIcon(proj.id);
          const isSelected = proj.id === selectedProjectId;

          return (
            <div
              key={proj.id}
              onClick={() => setSelectedProjectId(proj.id)}
              className={`group flex flex-col justify-between p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                isSelected 
                  ? 'bg-orange-50/20 border-[#FF5E00] shadow-md transform -translate-y-1' 
                  : 'bg-white border-gray-100 hover:border-gray-200 hover:bg-slate-50'
              }`}
              id={`proyecto-card-trigger-${proj.id}`}
            >
              <div>
                {/* Visual Header */}
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${isSelected ? 'bg-[#FF5E00] text-white' : 'bg-slate-100 text-slate-700'}`}>
                    <TechIcon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{proj.creationDate}</span>
                  </div>
                </div>

                {/* Info Text */}
                <h3 className={`text-base font-bold leading-snug line-clamp-2 ${isSelected ? 'text-slate-950' : 'text-slate-800'}`}>
                  {proj.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-500 line-clamp-3">
                  {proj.description}
                </p>
              </div>

              {/* Bottom bar indicator */}
              <div className="mt-6 pt-4 border-t border-gray-100/80 flex justify-between items-center text-xs">
                <span className="font-mono text-gray-400 font-bold group-hover:text-gray-600 block">Detalles del Caso</span>
                <span className={`font-semibold shrink-0 flex items-center gap-1 transition-colors ${isSelected ? 'text-[#FF5E00]' : 'text-blue-600 group-hover:text-blue-800'}`}>
                  <span>Ver diagnóstico</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep-Dive Technical Spec Panel */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-12" id="proyecto-detail-panel">
        <div className="bg-slate-950 p-6 text-white flex flex-wrap gap-4 justify-between items-center border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="font-mono text-xs tracking-wider text-emerald-400 font-bold uppercase">EXPEDIENTE DE PROYECTO INFORMATICO</span>
          </div>
          <span className="text-xs text-gray-400 font-mono">ID: {activeProj.id} | Fecha de Creación: {activeProj.creationDate}</span>
        </div>

        <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start" id="proyecto-spec-body">
          {/* Left Column (Diagnostic & Problem) */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-bold font-mono text-gray-400 uppercase tracking-widest">COLECTIVO / COMUNIDAD BENEFICIARIA</h4>
                <p className="text-slate-800 font-semibold text-sm sm:text-base mt-0.5">{activeProj.community}</p>
              </div>
            </div>

            <div className="bg-red-50/60 p-5 rounded-2xl border border-red-100/60">
              <h4 className="text-xs font-bold font-mono text-red-700 tracking-wider uppercase mb-1.5">EL DIAGNÓSTICO: DIAGNÓSTICO Y PROBLEMÁTICA</h4>
              <p className="text-xs sm:text-sm text-red-950 leading-relaxed font-medium">
                {activeProj.problem}
              </p>
            </div>

            <div className="bg-emerald-50/60 p-5 rounded-2xl border border-emerald-100/60">
              <h4 className="text-xs font-bold font-mono text-emerald-700 tracking-wider uppercase mb-1.5">LA INGENIERÍA: PROPUESTA Y SOLUCIÓN</h4>
              <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-semibold">
                {activeProj.solution}
              </p>
            </div>
          </div>

          {/* Right Column (Technology & Social Impact) */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold font-mono text-gray-400 uppercase tracking-widest mb-3.5">COMPONENTE TECNOLÓGICO Y STACK</h4>
              <div className="flex flex-wrap gap-2">
                {activeProj.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="p-1.5 px-3 bg-blue-50 text-blue-700 font-mono text-xs font-bold rounded-lg border border-blue-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h4 className="text-xs font-bold font-mono text-slate-800 uppercase tracking-wider mb-2.5">MÉTRICAS DE IMPACTO SOCIAL ALCANZADO</h4>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {activeProj.impact}
              </p>
            </div>

            {activeProj.webUrl && (
              <div className="border-t border-gray-100 pt-5">
                <h4 className="text-xs font-bold font-mono text-slate-800 uppercase tracking-wider mb-2">
                  FUENTE Y CONSULTA WEB
                </h4>
                <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-100/60 flex flex-col gap-2 font-sans">
                  <p className="text-xs text-sky-950 font-medium">
                    {activeProj.webConsultation}
                  </p>
                  <a
                    href={activeProj.webUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 hover:text-sky-900 hover:underline transition-colors w-fit"
                  >
                    <span>Verificar proyecto en la web</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* CRITICAL ASPECT: Individual Reflection with high grading importance */}
      {activeReflection && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden"
          id="proyectos-reflexion-individual"
        >
          {/* Subtle Decorative Background Symbol */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-5 pointer-events-none">
            <Terminal className="w-72 h-72 text-white" />
          </div>

          <div className="relative z-10">
            {/* Header / Rubric Info */}
            <div className="flex flex-wrap justify-between items-center gap-4 border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1 px-2.5 bg-[#FF5E00]/10 rounded border border-[#FF5E00]/20 text-xs font-bold font-mono text-[#FF5E00] uppercase tracking-widest">
                  Rubrica: Reflexión Individual
                </div>
                <div className="text-xs text-slate-400">• Elton Isaac Terán Palencia</div>
              </div>
            </div>

            {/* Reflection Content */}
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <span>{activeReflection.title}</span>
            </h3>
            
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal whitespace-pre-line">
              "{activeReflection.content}"
            </p>

            {/* Elton's stamp info */}
            <div className="mt-6 flex items-center gap-4 pt-4 border-t border-white/5">
              <div className="w-10 h-10 rounded-full bg-[#FF5E00]/20 border border-[#FF5E00]/30 flex items-center justify-center font-bold text-sm text-[#FF5E00] font-mono">
                ET
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-200">Elton Isaac Terán Palencia</span>
                <span className="text-[10px] text-slate-400 font-mono tracking-tight uppercase">Autor / PNF Ingeniería en Informática</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
