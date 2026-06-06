import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Heart, Code2, Award, GraduationCap } from 'lucide-react';
import fotoElton from '@/assets/FotoElton.JPG';

export default function AuthorProfile() {
  const authorInfo = {
    name: "Elton Isaac Terán Palencia",
    titles: [
      "Estudiante de Ingeniería en Informática (UNETI)",
      "Licenciado en Tecnología y Terapia Cardiorrespiratoria"
    ],
    bio: "Mi enfoque profesional amalgama la precisión crítica del área clínica en cardiología con la rigurosidad e innovación de la ingeniería de sistemas. Me especializo en el desarrollo de videojuegos de alto rendimiento y simulaciones en tiempo real mediante Unreal Engine y C++, así como en el codiseño e implementación de microservicios y arquitecturas web/móviles altamente escalables.",
    role: "Miembro Activo de la 'Célula de Desarrollo' para el Sistema de Atención Integral al Estudiante y Gestión Académica (SIS-UNETI). Responsable del diseño de bases de datos PostgreSQL y optimización de flujos lógicos en el backend del proyecto institucional.",
    commitment: "Estudiante comprometido con la excelencia técnica, apasionado de la arquitectura de computadores, el control de concurrencia y la creación de tecnologías con alto retorno de valor social.",
    links: {
      github: "https://github.com/elton28",
      linkedin: "https://www.linkedin.com/in/elton-isaac-teran",
      email: "eltonisaac28@gmail.com"
    }
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="perfil-autor-seccion">
      {/* Section Title */}
      <div className="text-center mb-12" id="autor-title-container">
               <h2 className="mt-3 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
          Presentación del Autor
        </h2>
             </div>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden" id="author-main-card">
        <div className="grid grid-cols-1 md:grid-cols-12" id="author-card-grid">
          {/* Cover & Avatar Left Section (5 cols) */}
          <div className="md:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white p-8 flex flex-col justify-between items-center text-center relative" id="author-avatar-rail">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-blue-500/20 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-cyan-500/10 blur-2xl" />

            <div className="relative z-10 w-full flex flex-col items-center">
              {/* Profile Image with high fidelity SVG fallback for the blue-scrubs profile photo of Elton */}
              <div className="relative w-44 h-44 rounded-full p-1.5 bg-gradient-to-tr from-[#00A2C1] to-blue-50 shadow-lg mb-4">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 border-2 border-slate-900 flex items-center justify-center relative">
                  {/* Since image list doesn't show physical file on workspace, let's write an <img> tag that loads standard names first, OR falls back to a highly customized, gorgeous SVG avatar vector representing Elton in blue cardiorespiratory clinical scrubs */}
                  <img 
                    src={fotoElton} 
                    alt="Elton Isaac Terán Palencia"
                    className="absolute inset-0 w-full h-full object-cover z-20"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                    referrerPolicy="no-referrer"
                  />
                  {/* High Quality SVG Fallback Avatar */}
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Teal ambient BG */}
                    <circle cx="50" cy="50" r="50" fill="#0f172a" />
                    {/* Binary Matrix lines in bg */}
                    <path d="M 20 20 L 20 40 M 35 15 L 35 30 M 75 25 L 75 45 M 50 10 L 50 20" stroke="#0e374d" strokeWidth="1.5" strokeLinecap="round" />
                    
                    {/* Head / Neck */}
                    <path d="M 44 48 C 44 38, 56 38, 56 48 L 56 55 L 44 55 Z" fill="#ebd2c0" /> 
                    <circle cx="50" cy="38" r="14" fill="#ebd2c0" />
                    {/* Short Dark Hair */}
                    <path d="M 34 38 C 34 22, 66 22, 66 38" fill="#1e1e24" />
                    <path d="M 33 34 C 33 24, 42 18, 50 22 C 58 18, 67 24, 67 34" fill="#121214" />
                    {/* Short Mustache & stubble */}
                    <path d="M 45 44 C 45 44, 50 42, 55 44 C 53 47, 47 47, 45 44 Z" fill="#3c373b" opacity="0.8" />
                    {/* Blue medical cardiorespiratory scrubs v-neck top (exactly matching user picture) */}
                    <path d="M 22 75 C 22 62, 38 60, 50 63 C 62 60, 78 62, 78 75 L 82 100 H 18 Z" fill="#00A2C1" />
                    <path d="M 42 61 L 50 71 L 58 61" stroke="#0b6e82" strokeWidth="2.5" />
                    <path d="M 22 75 L 35 100 M 78 75 L 65 100" stroke="#008fa8" strokeWidth="1.5" />
                    
                    {/* Glasses overlay for high-tech look */}
                    <rect x="40" y="34" width="8" height="6" rx="1" stroke="#121214" strokeWidth="1.5" fill="none" />
                    <rect x="52" y="34" width="8" height="6" rx="1" stroke="#121214" strokeWidth="1.5" fill="none" />
                    <line x1="48" y1="37" x2="52" y2="37" stroke="#121214" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Verified Badge */}
              
              {/* Title Names */}
              <h3 className="font-extrabold text-xl tracking-tight leading-tight mb-1 text-white">
                {authorInfo.name}
              </h3>
              <p className="text-xs text-gray-400 font-mono italic">
                Desarrollador de Backend & Unreal Engine
              </p>
            </div>

            {/* Icon Social Links */}
            <div className="flex justify-center gap-3 w-full border-t border-white/5 pt-6 mt-6" id="author-social-links">
              <a 
                href={authorInfo.links.github} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-white/5 rounded-xl text-white hover:bg-[#00A2C1] hover:scale-110 transition-all cursor-pointer"
                title="Visitar GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={authorInfo.links.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-white/5 rounded-xl text-white hover:bg-[#00A2C1] hover:scale-110 transition-all cursor-pointer"
                title="Visitar LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Detailed Curriculum Info Right Section (7 cols) */}
          <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6" id="author-bio-details">
            {/* Degrees / Academics Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <span className="text-xs font-bold font-mono text-gray-400 uppercase tracking-wider">Perfiles Académicos & Profesionales</span>
              </div>
              <ul className="space-y-2 mt-1">
                {authorInfo.titles.map((title, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-sm sm:text-base font-semibold text-slate-900 tracking-tight leading-snug">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00A2C1] mt-2 flex-shrink-0" />
                    <span>{title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Personal bio block */}
            <div className="border-t border-gray-100 pt-5">
              <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-blue-600" />
                Filosofía y Perfil Multidisciplinar
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                {authorInfo.bio}
              </p>
            </div>

            {/* SIS-UNETI Active Task block */}
            <div className="bg-sky-50/50 p-5 rounded-2xl border border-sky-100/60 font-sans">
              <h5 className="text-xs font-bold font-mono text-sky-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-sky-600" />
                Aporte Institucional (SIS-UNETI)
              </h5>
              <p className="text-xs sm:text-sm text-sky-950 font-medium leading-relaxed leading-snug">
                {authorInfo.role}
              </p>
            </div>

            {/* Final Statement block */}
            <div className="border-t border-gray-100 pt-5 text-gray-500 text-xs italic flex items-center gap-1.5">
              <span>{authorInfo.commitment}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
