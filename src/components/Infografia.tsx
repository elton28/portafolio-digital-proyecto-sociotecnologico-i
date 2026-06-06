import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Maximize2, Users, CircleDollarSign, Building2, Layers, ArrowRight, Lightbulb, BookmarkCheck, BadgeCheck } from 'lucide-react';
import { CLASSIFICATION_DATA, INDIVIDUAL_REFLECTIONS } from '../data';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Cpu: Cpu,
  Maximize2: Maximize2,
  Users: Users,
  CircleDollarSign: CircleDollarSign,
  Building2: Building2
};

export default function Infografia() {
  const [selectedId, setSelectedId] = useState<string>(CLASSIFICATION_DATA[0].id);
  const activeClass = CLASSIFICATION_DATA.find(c => c.id === selectedId) || CLASSIFICATION_DATA[0];
  const activeReflection = INDIVIDUAL_REFLECTIONS.find(r => r.activityId === 'infografia');

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="infografia-actividad-1">
      {/* Activity Header */}
      <div className="text-center mb-10" id="infografia-title-container">
        <span className="text-xs font-bold font-mono tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full">
          Actividad 1 • Infografía Académica
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
          Clasificación Sistemática de Proyectos
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-base text-gray-500">
          Un análisis exhaustivo sobre los tipos, estructuras y diferencias de proyectos, con énfasis crítico en iniciativas del área informática.
        </p>
      </div>

      {/* Core Concept Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-6 sm:p-8 shadow-md mb-8 flex flex-col md:flex-row items-center gap-6" id="core-concept-banner">
        <div className="p-4 bg-white/10 rounded-full backdrop-blur-md">
          <Layers className="w-10 h-10 text-white" />
        </div>
        <div className="flex-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-100">Marco Conceptual</span>
          <h3 className="text-xl sm:text-2xl font-bold mt-1">¿Qué es realmente un Proyecto?</h3>
          <p className="text-blue-100 mt-2 text-sm sm:text-base leading-relaxed">
            Es un <strong>plan o esquema estructurado</strong> compuesto por una serie concatenada de actividades diseñadas para ejecutarse sistemáticamente. Su fin último es satisfacer necesidades apremiantes o resolver problemas sociales concretos mediante la producción de bienes o servicios, manteniéndose dentro de límites predefinidos de presupuesto, alcance y cronograma.
          </p>
        </div>
      </div>

      {/* Interactive Infographic Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12" id="infographic-interactive-body">
        {/* Navigation / Selection List (5 cols) */}
        <div className="lg:col-span-5 space-y-3.5" id="infographic-sidebar">
          <div className="text-sm font-semibold font-mono text-gray-500 px-1 uppercase tracking-wider mb-2">
            Tipos de Clasificación
          </div>
          {CLASSIFICATION_DATA.map((item) => {
            const Icon = iconMap[item.iconName] || Cpu;
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-center gap-4 ${
                  isSelected
                    ? 'bg-blue-50/70 border-blue-400 shadow-sm ring-1 ring-blue-400/30'
                    : 'bg-white border-gray-100 hover:border-gray-300 hover:bg-gray-50'
                }`}
                id={`infografia-item-trigger-${item.id}`}
              >
                <div className={`p-2.5 rounded-lg ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-slate-700'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`font-semibold text-sm sm:text-base truncate ${isSelected ? 'text-blue-900' : 'text-slate-800'}`}>
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500 truncate mt-0.5">{item.concept}</p>
                </div>
                <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isSelected ? 'transform translate-x-1 text-blue-600' : 'text-gray-400'}`} />
              </button>
            );
          })}
        </div>

        {/* Detailed Viewer (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 min-h-[460px] flex flex-col justify-between" id="infographic-detail-viewer">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
              id={`infografia-detail-${selectedId}`}
            >
              {/* Concept Block */}
              <div>
                <span className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-2.5 py-1 rounded-md">
                  Concepto Operativo
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mt-2.5">
                  {activeClass.name}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-2.5">
                  {activeClass.concept}
                </p>
              </div>

              {/* Characteristics Bullet List */}
              <div className="border-t border-gray-100 pt-5">
                <h4 className="text-sm font-semibold text-slate-900 tracking-wide uppercase mb-3 flex items-center gap-1.5">
                  <BookmarkCheck className="w-4 h-4 text-blue-600" />
                  Características Clave
                </h4>
                <ul className="space-y-2.5">
                  {activeClass.characteristics.map((char, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Distinguishing Factor */}
              <div className="bg-amber-50/50 rounded-xl p-4 border border-amber-100/70">
                <h4 className="text-xs font-bold font-mono text-amber-800 tracking-wider uppercase flex items-center gap-1.5 mb-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                  Diferencia Diferencial
                </h4>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  {activeClass.difference}
                </p>
              </div>

              {/* Relation to computing (Targeted highlight) */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <span className="text-xs font-bold font-mono text-slate-600 tracking-wider uppercase">
                  ⚡ Énfasis en Ingeniería en Informática
                </span>
                <p className="text-xs sm:text-sm text-slate-900 font-medium leading-relaxed mt-1.5">
                  {activeClass.relationToInformatica}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="text-right text-xs text-gray-400 font-mono mt-4 pt-4 border-t border-gray-50">
            Fecha de Publicación original del recurso: Julio, 2021 | Adaptación digital: Junio, 2026
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
          id="infografia-reflexion-individual"
        >
          {/* Subtle Decorative Background Symbol */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-5 pointer-events-none">
            <Cpu className="w-72 h-72 text-white" />
          </div>

          <div className="relative z-10">
            {/* Header / Rubric Info */}
            <div className="flex flex-wrap justify-between items-center gap-4 border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1 px-2.5 bg-sky-500/10 rounded border border-sky-400/20 text-xs font-bold font-mono text-sky-400 uppercase tracking-widest">
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
              <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center font-bold text-sm text-blue-300 font-mono">
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
