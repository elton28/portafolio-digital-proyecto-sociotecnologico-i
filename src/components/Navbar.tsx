import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu, Clock, BookOpen, FileText, User, Award } from 'lucide-react';
import UnetiLogo from './UnetiLogo';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'portada', label: 'Portada', icon: Cpu },
    { id: 'autor', label: 'Autor', icon: User },
    { id: 'infografia', label: 'Infografía', icon: BookOpen },
    { id: 'mapa_mixto', label: 'Mapa Mixto', icon: Clock },
    { id: 'investigacion', label: 'Casos PST', icon: FileText },
    { id: 'ensayo', label: 'Ensayo', icon: Award },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm" id="main-navigation-bar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-18">
          {/* Brand & Mini-Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('portada')}>
            <div className="w-12 h-12 flex items-center justify-center">
              <UnetiLogo showText={false} className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-slate-900 tracking-tight leading-none">PST I - UNETI</span>
              <span className="text-xs text-gray-500 font-mono mt-0.5">Ingeniería en Informática</span>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive ? 'text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  id={`nav-tab-${item.id}`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              aria-expanded={isOpen}
              id="mobile-menu-hamburger-button"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu with motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-50 border-b border-gray-200 overflow-hidden"
            id="mobile-drawer-menu"
          >
            <div className="px-3 pt-2 pb-4 space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-left text-base font-medium transition-colors cursor-pointer ${
                      isActive 
                        ? 'bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-600 pl-3' 
                        : 'text-gray-600 hover:text-slate-900 hover:bg-gray-100'
                    }`}
                    id={`mobile-nav-tab-${item.id}`}
                  >
                    <Icon className="w-5 h-5 text-gray-400" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
