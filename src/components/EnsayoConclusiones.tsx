import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, BookOpen, Quote, BadgeCheck } from 'lucide-react';
import { INDIVIDUAL_REFLECTIONS } from '../data';

export default function EnsayoConclusiones() {
  const [currentPage, setCurrentPage] = useState<1 | 2>(1);
  const activeReflection = INDIVIDUAL_REFLECTIONS.find(r => r.activityId === 'ensayo');

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="ensayo-actividad-4">
      {/* Activity Header */}
      <div className="text-center mb-10" id="ensayo-title-container">
        <span className="text-xs font-bold font-mono tracking-widest text-[#800080] uppercase bg-purple-50 px-3 py-1 rounded-full">
          Actividad 4 • Ensayo Académico Individual
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
          La Trascendencia del Proyecto Socio-tecnológico
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-base text-gray-500">
          Un ensayo crítico de dos cuartillas académicas que indaga en la confluencia entre software libre, redes, teleeducación y soberanía popular.
        </p>
      </div>

      {/* Pages Selector Panel */}
      <div className="flex justify-center mb-6 gap-2" id="essay-page-selector">
        <button
          onClick={() => setCurrentPage(1)}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 ${
            currentPage === 1
              ? 'text-white bg-purple-700 border-purple-600'
              : 'bg-white text-slate-600 border-gray-200 hover:bg-gray-50'
          }`}
        >
          <Book className="w-4 h-4" />
          <span>Cuartilla 1: Bases y Fundamentos</span>
        </button>
        <button
          onClick={() => setCurrentPage(2)}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 ${
            currentPage === 2
              ? 'text-white bg-purple-700 border-purple-600'
              : 'bg-white text-slate-600 border-gray-200 hover:bg-gray-50'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Cuartilla 2: Impacto y Conclusiones</span>
        </button>
      </div>

      {/* Interactive Editorial Paper Sheet Representation */}
      <div className="bg-amber-50/20 border border-amber-900/15 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-lg mb-12 max-w-4xl mx-auto font-serif" id="essay-paper-document">
        <div className="border-b border-amber-900/10 pb-4 mb-8 flex justify-between items-center text-xs text-amber-900/70 font-sans tracking-wider">
          <span className="font-semibold uppercase tracking-widest text-[10px]">PROGRAMA NACIONAL DE FORMACIÓN (PNF) - INGENIERÍA EN INFORMÁTICA</span>
          <span className="font-mono">PÁGINA {currentPage} DE 2</span>
        </div>

        <AnimatePresence mode="wait">
          {currentPage === 1 ? (
            <motion.div
              key="page-1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6 text-slate-900 text-sm sm:text-base leading-relaxed text-justify"
              id="essay-cuartilla-1"
            >
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-slate-950 font-serif leading-tight text-center tracking-tight mb-8">
                La Ingeniería en Informática y el Proyecto Socio-Tecnológico: Pilares de la Soberanía Tecnológica y Transformación Social (Cuartilla I)
              </h3>

              <p>
                Los Programas Nacionales de Formación (PNF) en Venezuela, impulsados bajo la dirección del <strong>Ministerio del Poder Popular para la Educación Universitaria (MPPEU)</strong>, plantean un cambio paradigmático en la educación superior. El <strong>Proyecto Socio-Tecnológico (PST)</strong> no se concibe como una simple práctica profesional aislada, sino como el eje curricular vertebrador que vincula la teoría informática con las problemáticas concretas de la sociedad venezolana. Este enfoque busca romper con la visión tradicionalista y mercantilista de la informática, en la cual el profesional se formaba para responder únicamente a intereses corporativos privados de alta rentabilidad comercial, ignorando la brecha digital y la exclusión de las comunidades populares.
              </p>

              <div className="my-6 pl-4 border-l-4 border-[#800080]/30 italic text-slate-600 font-sans text-xs sm:text-sm flex gap-3">
                <Quote className="w-8 h-8 text-[#800080]/20 flex-shrink-0" />
                <div>
                  "El Proyecto Socio-Tecnológico es el núcleo integrador donde la ciencia de la computación, el desarrollo de software y la infraestructura de redes se convierten en herramientas de liberación, autodeterminación y autogestión para el Poder Popular."
                </div>
              </div>

              <p>
                La importancia del PST en la Ingeniería en Informática radica en su capacidad de **apropiación social del conocimiento**. A través de la inserción directa de los estudiantes en escuelas públicas, instituciones comunitarias y Consejos Comunales, se realiza un **Diagnóstico Participativo** estructurado. Este diagnóstico no impone tecnologías desde una perspectiva tecnocrática, sino que identifica en conjunto con la comunidad fallas lógicas de hardware, obsolescencia del software, falta de conectividad o carencia de sistemas de registro de datos. Esto transforma la informática en una ciencia viva que abandona el laboratorio universitario para construir redes locales, migrar equipos a software libre bajo el Decreto 3.390 y diseñar sistemas de información web a la medida.
              </p>

              <p>
                De este modo, el PST consolida una formación técnica rigurosa de base social. El modelado de bases de datos relacionales, la programación estructurada y la arquitectura de servidores adquieren un sentido ético e histórico al resolver necesidades reales de procesamiento de datos o soporte técnico, sentando las bases operativas de la **soberanía tecnológica nacional** mediante el uso estricto de estándares abiertos y tecnologías libres.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="page-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6 text-slate-900 text-sm sm:text-base leading-relaxed text-justify"
              id="essay-cuartilla-2"
            >
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-slate-950 font-serif leading-tight text-center tracking-tight mb-8">
                El Impacto de los Proyectos Socio-Tecnológicos: Independencia, Desarrollo de Software Libre y Autogobierno (Cuartilla II)
              </h3>

              <p>
                El impacto integral de los proyectos socio-tecnológicos vinculados a la informática se manifiesta en tres dimensiones fundamentales: **política, económica y organizativa**. En la dimensión político-tecnológica, el PST es el brazo ejecutor de la **Ley de Infogobierno**, la cual obliga a los entes públicos a migrar hacia estándares abiertos. Al implementar sistemas operativos nacionales como **Canaima GNU/Linux** o plataformas modulares de gestión de recursos, se mitigan vulnerabilidades críticas de ciberseguridad, espionaje corporativo y bloqueos tecnológicos, protegiendo los datos institucionales del Estado y de las familias venezolanas.
              </p>

              <p>
                En la dimensión económica, la adopción y desarrollo de proyectos informáticos basados en software libre representa un ahorro millonario para el erario público al eliminar pagos recurrentes por licencias a corporaciones transnacionales. Además, este ahorro se traduce en una redistribución de recursos hacia la comunidad. En la dimensión organizativa, la verdadera trascendencia del proyecto se consolida a través de la **Transferencia Tecnológica**. Los estudiantes no solo instalan una red de datos o un censo automatizado, sino que capacitan exhaustivamente a los miembros de la comunidad en la administración técnica de los sistemas y el mantenimiento preventivo del hardware.
              </p>

              <p>
                Esta transferencia de saberes garantiza la sostenibilidad tecnológica y erradica la subordinación técnica hacia personal externo, fomentando la autogestión y el autogobierno comunitario. En conclusión, el Proyecto Socio-Tecnológico I demuestra que el impacto de la Ingeniería en Informática va mucho más allá de la optimización del código fuente: es un instrumento científico-práctico indispensable para democratizar el acceso a la tecnología, promover el bienestar social, y forjar profesionales con una elevada conciencia social y excelencia técnica capaces de liderar la independencia digital en la República Bolivariana de Venezuela.
              </p>

              <div className="mt-8 pt-8 border-t border-amber-900/10 text-center font-sans">
                <p className="text-xs font-bold text-slate-900">BIBLIOGRAFÍA ACADÉMICA SUGERIDA</p>
                <div className="mt-2 text-[11px] text-slate-500 space-y-1">
                  <p>• Ministerio del Poder Popular para la Educación Universitaria (2010). <em>Lineamientos Generales de los Programas Nacionales de Formación (PNF). Gaceta Oficial N.º 39.565.</em> Caracas, Venezuela.</p>
                  <p>• Asamblea Nacional de la República Bolivariana de Venezuela (2013). <em>Ley de Infogobierno. Gaceta Oficial N.º 40.274.</em> Caracas, Venezuela.</p>
                  <p>• Centro Nacional de Tecnologías de Información (CNTI) (2015). <em>El Software Libre y la Soberanía Tecnológica en la Administración Pública Venezolana.</em> Ministerio de Ciencia y Tecnología.</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="border-t border-amber-900/10 mt-8 pt-4 flex justify-between items-center text-[10px] sm:text-xs text-amber-900/50 font-sans font-bold">
          <span>PROFESOR: LEONARDO MALAVÉ</span>
          <span>ESTUDIANTE: ELTON I. TERÁN P.</span>
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
          id="ensayo-reflexion-individual"
        >
          {/* Subtle Decorative Background Symbol */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-5 pointer-events-none">
            <Quote className="w-72 h-72 text-white" />
          </div>

          <div className="relative z-10">
            {/* Header / Rubric Info */}
            <div className="flex flex-wrap justify-between items-center gap-4 border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1 px-2.5 bg-purple-500/10 rounded border border-purple-400/20 text-xs font-bold font-mono text-purple-400 uppercase tracking-widest">
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
              <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center font-bold text-sm text-purple-300 font-mono">
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
