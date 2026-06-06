import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, ArrowRight, Github, 
  Linkedin, Mail, Terminal, Calendar, ChevronRight
} from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import UnetiLogo from './components/UnetiLogo';
import Infografia from './components/Infografia';
import MapaMixto from './components/MapaMixto';
import ProyectosInvestigacion from './components/ProyectosInvestigacion';
import EnsayoConclusiones from './components/EnsayoConclusiones';
import AuthorProfile from './components/AuthorProfile';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('portada');

  // Renders the specific active tab component
  const renderTabContent = () => {
    switch (activeTab) {
      case 'portada':
        return <CoverView setActiveTab={setActiveTab} />;
      case 'autor':
        return <AuthorProfile />;
      case 'infografia':
        return <Infografia />;
      case 'mapa_mixto':
        return <MapaMixto />;
      case 'investigacion':
        return <ProyectosInvestigacion />;
      case 'ensayo':
        return <EnsayoConclusiones />;
      default:
        return <CoverView setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 flex flex-col justify-between selection:bg-blue-600 selection:text-white" id="portfolio-root-container">
      {/* Dynamic Header & Navigation Menu */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Primary Section Content Canvas with Motion Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Unified Portal Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800" id="main-footer">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between">
          {/* Logo Brand left side */}
          <div className="flex items-center gap-3 justify-center md:justify-start" id="footer-brand">
            <div className="w-10 h-10 bg-white/5 rounded-lg p-1">
              <UnetiLogo showText={false} className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-widest text-slate-100 font-mono">PORTAFOLIO DIGITAL</span>
              <span className="text-[10px] text-gray-400 font-mono">UNETI • Proyecto Sociotecnológico I</span>
            </div>
          </div>

          {/* Academic Rights and licensing */}
          <div className="text-center text-xs text-gray-400 leading-normal" id="footer-credits">
            <p className="font-semibold text-slate-200">Universidad Nacional Experimental de las Telecomunicaciones e Informática (UNETI)</p>
            <p className="mt-1 font-mono text-[10px]">© 2026 • Elton Isaac Terán Palencia</p>
          </div>

          {/* Social Profiles Linked right side */}
          <div className="flex gap-4 justify-center md:justify-end" id="footer-social-icons">
            <a 
              href="https://github.com/elton28" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/elton-isaac-teran" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==========================================
// Portada / Welcome Cover Inner Sub-Component
// ==========================================
interface CoverViewProps {
  setActiveTab: (tab: string) => void;
}

function CoverView({ setActiveTab }: CoverViewProps) {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="portada-intro-view">
      {/* Academic Institution Heading / Banner */}
      <div className="text-center mb-10 max-w-4xl mx-auto" id="uneti-banner-masthead">
        {/* Large Centered UNETI Logo */}
        <div className="inline-block p-4 mb-4 max-w-[190px]">
          <UnetiLogo showText={true} />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-sans tracking-tight leading-tight uppercase mt-4">
          Universidad Nacional Experimental de las Telecomunicaciones e Informática
        </h1>
        <div className="h-1 w-24 bg-[#FF5E00] mx-auto mt-4 rounded-full" />
        
        <p className="mt-3.5 text-xs sm:text-sm font-semibold tracking-widest text-[#00A2C1] font-mono uppercase bg-cyan-50 border border-cyan-100 rounded-full px-4 py-1 inline-block">
          PNF Ingeniería en Informática • Trayecto 1
        </p>
      </div>

      {/* Main Feature Layout Hero Card */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 sm:p-10 lg:p-12 mb-10 relative overflow-hidden" id="main-feature-hero-card">
        {/* Subtle Background decoration */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="hero-grid-body">
          {/* Metadata academic info (7 cols) */}
          <div className="lg:col-span-7 space-y-6" id="hero-metadata">
               <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-none leading-none">
                Portafolio Digital de Proyecto
              </h2>
              <p className="text-xl sm:text-2xl font-bold text-gray-500">
                Curso: Proyecto Sociotecnológico I
              </p>
            </div>

            {/* Curricular Unit Metadata Grid (Prof, Student, UC) */}
            <div className="grid grid-cols-2 gap-4 border-y border-gray-100 py-6 text-sm" id="curricular-spec">
              <div>
                <span className="text-xs font-bold font-mono text-gray-400 block uppercase">Profesor a Cargo</span>
                <span className="text-slate-800 font-bold block mt-1">Leonardo Malavé</span>
              </div>
              <div>
                <span className="text-xs font-bold font-mono text-gray-400 block uppercase">Estudiante Autor</span>
                <span className="text-slate-800 font-bold block mt-1">Elton Isaac Terán Palencia</span>
              </div>
              <div className="col-span-2">
                <span className="text-xs font-bold font-mono text-gray-400 block uppercase">Unidad Curricular</span>
                <p className="text-slate-800 font-medium mt-1">
                  Introducción a los Proyectos Sociotecnológicos y al Enfoque de Marco Lógico (EML).
                </p>
              </div>
            </div>

            {/* Core introduction message */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed leading-snug">
              Este portafolio digital sistematiza con absoluto rigor técnico los conocimientos y estrategias de estudio adquiridos en esta sesión didáctica 2, conectando la teoría del Marco Lógico con la praxis sociotecnológica.
            </p>

            {/* Quick Author trigger button */}
            <button
              onClick={() => setActiveTab('autor')}
              className="px-5 py-3 bg-slate-950 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all cursor-pointer flex items-center gap-2"
              id="hero-view-profile-cta"
            >
              <span>Presentación del Autor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Graphical Representation Right side (5 cols) */}
          <div className="lg:col-span-5 flex justify-center" id="hero-interactive-illus">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-700 p-8 rounded-3xl text-white shadow-lg space-y-6 max-w-[340px] relative overflow-hidden" id="illustration-card">
              <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-10 pointer-events-none">
                <Terminal className="w-56 h-56" />
              </div>
              <div className="flex justify-between items-start">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md">
                  <Terminal className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono tracking-widest bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full uppercase font-bold">
                  Soberanía Activa
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-blue-200 block uppercase">CASOS DE ESTUDIO</span>
                <h4 className="text-lg font-bold mt-1 tracking-tight leading-snug">Soberanía Tecnológica Nacional</h4>
                <p className="text-xs text-blue-100/90 mt-2 leading-relaxed">
                  Análisis de Canaima GNU/Linux, KAVAC ERP y SISCOM para la independencia digital en Venezuela.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                <span className="text-blue-200 font-mono">PNF Informática</span>
                <span className="font-bold underline cursor-pointer" onClick={() => setActiveTab('investigacion')}>Explorar Casos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Directory Router Grid (Cards representing different parts of the syllabus) */}
      <div id="syllabus-activities-routers">
        <h3 className="text-lg font-extrabold text-slate-900 font-sans uppercase tracking-widest text-center mb-6">
          Actividades Evaluables del Recurso Didáctico
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Act 1 Card */}
          <div 
            onClick={() => setActiveTab('infografia')}
            className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl hover:border-blue-400 group transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[200px]"
            id="cover-router-infografia"
          >
            <div>
              <span className="text-[10px] text-gray-400 font-mono font-bold block uppercase">ACTIVIDAD 1</span>
              <h4 className="font-bold text-base text-slate-900 group-hover:text-blue-700 tracking-tight mt-1.5 leading-snug">
                Infografía de Tipos de Proyectos
              </h4>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Clasificación de proyectos según naturaleza, alcance, beneficiarios y sector económico.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-blue-600 font-semibold pt-3 border-t border-gray-100">
              <span>Ingresar</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Act 2 Card */}
          <div 
            onClick={() => setActiveTab('mapa_mixto')}
            className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl hover:border-emerald-400 group transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[200px]"
            id="cover-router-mapa"
          >
            <div>
              <span className="text-[10px] text-gray-400 font-mono font-bold block uppercase">ACTIVIDAD 2</span>
              <h4 className="font-bold text-base text-slate-900 group-hover:text-emerald-700 tracking-tight mt-1.5 leading-snug">
                Mapa Mixto del Ciclo de Vida
              </h4>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Fases consecutivas de proyectos conectadas con los 8 componentes estratégicos clave.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-emerald-600 font-semibold pt-3 border-t border-gray-100">
              <span>Ingresar</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Act 3 Card */}
          <div 
            onClick={() => setActiveTab('investigacion')}
            className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl hover:border-orange-400 group transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[200px]"
            id="cover-router-casos"
          >
            <div>
              <span className="text-[10px] text-gray-400 font-mono font-bold block uppercase">ACTIVIDAD 3</span>
              <h4 className="font-bold text-base text-slate-900 group-hover:text-[#FF5E00] tracking-tight mt-1.5 leading-snug">
                Casos Reales de Proyectos PST
              </h4>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Análisis de Canaima GNU/Linux, KAVAC ERP y SISCOM como referentes de soberanía tecnológica en Venezuela.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-[#FF5E00] font-semibold pt-3 border-t border-gray-100">
              <span>Ingresar</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Act 4 Card */}
          <div 
            onClick={() => setActiveTab('ensayo')}
            className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl hover:border-purple-400 group transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[200px]"
            id="cover-router-ensayo"
          >
            <div>
              <span className="text-[10px] text-gray-400 font-mono font-bold block uppercase">ACTIVIDAD 4</span>
              <h4 className="font-bold text-base text-slate-900 group-hover:text-purple-700 tracking-tight mt-1.5 leading-snug">
                Ensayo de Conclusiones (2 Cuartillas)
              </h4>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Análisis argumentativo sobre la importancia y repercusiones de los proyectos informáticos.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-purple-600 font-semibold pt-3 border-t border-gray-100">
              <span>Ingresar</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
