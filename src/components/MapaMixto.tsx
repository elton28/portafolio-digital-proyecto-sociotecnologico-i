import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Clock, PiggyBank, Target, ListChecks, UserCheck, MessageSquareText, 
  HeartHandshake, Award, RefreshCw, AlertCircle, BadgeCheck 
} from 'lucide-react';
import { LIFE_CYCLE_DATA, PROJECT_ELEMENTS_DATA, INDIVIDUAL_REFLECTIONS } from '../data';

const elementMap: { [key: string]: React.ComponentType<any> } = {
  Clock: Clock,
  PiggyBank: PiggyBank,
  Focus: Target, // Fallback/use Target
  ListChecks: ListChecks,
  UserCheck: UserCheck,
  MessageSquareText: MessageSquareText,
  HeartHandshake: HeartHandshake,
  Award: Award
};

export default function MapaMixto() {
  const [activeMode, setActiveMode] = useState<'ciclo' | 'elementos'>('ciclo');
  const [selectedPhase, setSelectedPhase] = useState<string>(LIFE_CYCLE_DATA[0].id);
  const [selectedElement, setSelectedElement] = useState<string>(PROJECT_ELEMENTS_DATA[0].id);

  const currentPhase = LIFE_CYCLE_DATA.find(p => p.id === selectedPhase) || LIFE_CYCLE_DATA[0];
  const currentElement = PROJECT_ELEMENTS_DATA.find(e => e.id === selectedElement) || PROJECT_ELEMENTS_DATA[0];
  const activeReflection = INDIVIDUAL_REFLECTIONS.find(r => r.activityId === 'mapa_mixto');

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="mapa-mixto-actividad-2">
      {/* Activity Header */}
      <div className="text-center mb-10" id="mapa-title-container">
        <span className="text-xs font-bold font-mono tracking-widest text-emerald-600 uppercase bg-emerald-50 px-3 py-1 rounded-full">
          Actividad 2 • Mapa Mixto Interactivo
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
          Ciclo de Vida del Proyecto e Insumos Operativos
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-base text-gray-500">
          Un organigrama interactivo que conecta de forma integral las fases consecutivas del Enfoque de Marco Lógico y los ocho pilares operativos.
        </p>
      </div>

      {/* Model Mode Toggle Switch */}
      <div className="flex justify-center mb-12" id="mapa-mode-toggle">
        <div className="inline-flex rounded-lg p-1.5 bg-slate-100/80 border border-slate-200">
          <button
            onClick={() => setActiveMode('ciclo')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-semibold transition-all cursor-pointer ${
              activeMode === 'ciclo'
                ? 'bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-600/10'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <RefreshCw className="w-4 h-4" />
            <span>Fases del Ciclo de Vida</span>
          </button>
          <button
            onClick={() => setActiveMode('elementos')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-semibold transition-all cursor-pointer ${
              activeMode === 'elementos'
                ? 'bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-600/10'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Target className="w-4 h-4" />
            <span>8 Elementos Principales</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Diagram Visualized */}
      <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 sm:p-10 mb-12 shadow-sm" id="mapa-canvas-interactive">
        {activeMode === 'ciclo' ? (
          /* Lifecyle stage diagram flow */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="flow-lifecycle-interface">
            {/* Timeline Left Rail */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4" id="timeline-rail">
              <div className="text-sm font-semibold font-mono text-emerald-800 uppercase tracking-widest px-1">
                Flujo Crítico de Ejecución
              </div>

              <div className="relative border-l-2 border-emerald-300 ml-4 pl-6 py-4 space-y-6 flex-1 flex flex-col justify-around">
                {LIFE_CYCLE_DATA.map((p, index) => {
                  const isSelected = p.id === selectedPhase;
                  return (
                    <div key={p.id} className="relative">
                      {/* Node Circle */}
                      <span className={`absolute -left-[35px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border ${
                        isSelected 
                          ? 'bg-emerald-600 border-emerald-600 text-white scale-110 shadow-sm' 
                          : 'bg-white border-emerald-300 hover:border-emerald-500'
                      }`}>
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      </span>

                      {/* Node Trigger Button */}
                      <button
                        onClick={() => setSelectedPhase(p.id)}
                        className={`text-left p-3 rounded-lg border w-full transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? 'bg-white border-emerald-500 shadow-md transform -translate-y-0.5'
                            : 'bg-transparent border-transparent hover:bg-white/40 hover:border-gray-200'
                        }`}
                        id={`mapa-phase-trigger-${p.id}`}
                      >
                        <h4 className={`text-sm sm:text-base font-bold ${isSelected ? 'text-emerald-950 font-extrabold' : 'text-slate-700'}`}>
                          {p.name}
                        </h4>
                        <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">{p.shortDesc}</p>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stage Detail Viewer Right Rail */}
            <div className="lg:col-span-12 xl:col-span-7 lg:col-start-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col justify-between" id="lifecycle-stage-reader">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPhase}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* Title & Headline */}
                  <div>
                    <span className="text-xs font-mono font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 px-2.5 py-1 rounded-md">
                      Fase {LIFE_CYCLE_DATA.findIndex(p => p.id === selectedPhase) + 1} del EML
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-3">
                      {currentPhase.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mt-2.5">
                      {currentPhase.description}
                    </p>
                  </div>

                  {/* Operational Activities */}
                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="text-xs font-bold font-mono tracking-wider text-slate-800 uppercase mb-3 flex items-center gap-1.5">
                      <ListChecks className="w-4 h-4 text-emerald-600" />
                      Actividades Pedagógicas / Prácticas
                    </h4>
                    <ul className="space-y-2">
                      {currentPhase.keyActivities.map((act, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                          <span className="font-bold text-emerald-600 font-mono mt-0.5">{index+1}.</span>
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Entregables / Resultados */}
                  <div className="bg-emerald-50/50 rounded-xl p-4 border border-emerald-100/70">
                    <h4 className="text-xs font-extrabold font-mono text-emerald-800 uppercase tracking-widest flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-emerald-600" />
                      Entregables de Ingeniería Tangibles
                    </h4>
                    <ul className="space-y-1.5 mt-2">
                      {currentPhase.outcomes.map((out, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-slate-800 font-medium">
                          <span className="text-emerald-500">✓</span>
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connection To Parameters */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-gray-100 text-xs text-gray-500 font-medium">
                    <span className="font-bold text-slate-800 block">Vinculación Teórica con Elementos:</span>
                    <p className="mt-1 font-normal leading-relaxed">{currentPhase.elementRelation}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ) : (
          /* Elements grid diagram */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="grid-elements-interface">
            {/* Grid selector buttons */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3" id="elements-bento-grid">
              {PROJECT_ELEMENTS_DATA.map((element) => {
                const ElementIcon = elementMap[element.iconName] || Target;
                const isSelected = element.id === selectedElement;
                return (
                  <button
                    key={element.id}
                    onClick={() => setSelectedElement(element.id)}
                    className={`p-4 rounded-xl text-left border flex flex-col justify-between min-h-[120px] transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500/20'
                        : 'bg-transparent border-gray-200/80 hover:bg-white/50 hover:border-gray-300'
                    }`}
                    id={`mapa-element-trigger-${element.id}`}
                  >
                    <div className={`p-2 rounded-lg inline-block w-fit ${isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                      <ElementIcon className="w-5 h-5" />
                    </div>
                    <div className="mt-3">
                      <h4 className={`text-sm font-semibold truncate ${isSelected ? 'text-emerald-950 font-bold' : 'text-slate-800'}`}>
                        {element.name}
                      </h4>
                      <span className="text-[10px] text-gray-400 font-mono">Restricción Triple</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Element Detail Viewer Right Side */}
            <div className="lg:col-span-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col justify-between" id="element-conceptual-reader">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedElement}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* Title */}
                  <div>
                    <span className="text-xs font-mono font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 px-2.5 py-1 rounded-md">
                      Pilar Operativo Crítico
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-3">
                      {currentElement.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mt-2.5">
                      {currentElement.definition}
                    </p>
                  </div>

                  {/* Value-add / Role in PST context (Universidad / UNETI) */}
                  <div className="bg-amber-50/50 rounded-xl p-5 border border-amber-100 flex gap-4">
                    <div className="p-1 rounded bg-amber-100 text-amber-700 h-fit">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold font-mono text-amber-800 tracking-wider uppercase">
                        Aplicación en los PST
                      </h4>
                      <p className="text-xs sm:text-sm text-amber-950 leading-relaxed mt-1 font-medium italic">
                        "{currentElement.roleInPST}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>

      {/* Individual Reflection */}
      {activeReflection && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden"
          id="mapa-mixto-reflexion-individual"
        >
          {/* Subtle Decorative Background Symbol */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-5 pointer-events-none">
            <Clock className="w-72 h-72 text-white" />
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
