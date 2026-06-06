import React from 'react';
import logoUneti from '@/assets/LogoUNETI.jpg';

interface UnetiLogoProps {
  className?: string;
  showText?: boolean;
}

export default function UnetiLogo({ className = "h-24 w-24", showText = true }: UnetiLogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`} id="uneti-logo-container">
      {/* Dynamic Institutional Logo Image Asset */}
      <img 
        src={logoUneti} 
        alt="Logo UNETI" 
        className="w-full h-full object-contain max-h-[140px] rounded-lg"
      />

      {showText && (
        <div className="flex flex-col items-center mt-2" id="uneti-logo-text">
          {/* Bold UNETI Lettering */}
          <div className="flex items-baseline font-extrabold tracking-widest text-3xl">
            <span className="text-[#FF5E00]">U</span>
            <span className="text-[#0b2240]">NETI</span>
          </div>
          
          {/* Bottom 6 multi-colored blocks */}
          <div className="flex gap-1.5 mt-2 justify-center">
            <div className="w-4 h-2.5 rounded-sm bg-[#00A300]" title="Verde" />
            <div className="w-4 h-2.5 rounded-sm bg-[#FFD300]" title="Amarillo" />
            <div className="w-4 h-2.5 rounded-sm bg-[#800080]" title="Morado" />
            <div className="w-4 h-2.5 rounded-sm bg-[#00A2C1]" title="Celeste" />
            <div className="w-4 h-2.5 rounded-sm bg-[#0b2240]" title="Azul Marino" />
            <div className="w-4 h-2.5 rounded-sm bg-[#FF5E00]" title="Naranja" />
          </div>
        </div>
      )}
    </div>
  );
}

