/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import { useTranslation } from '../LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('home'), href: '#home' },
    { name: t('properties'), href: '#properties' },
    { name: t('land'), href: '#land' },
    { name: t('about'), href: '#about' },
    { name: t('contact'), href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md py-2 shadow-sm' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="transition-transform hover:scale-105 active:scale-95">
              <Logo className={isScrolled ? "h-12 lg:h-14" : "h-16 md:h-20 lg:h-24"} light={!isScrolled} />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:opacity-70 ${
                  isScrolled ? 'text-zinc-700' : 'text-zinc-800 md:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 text-sm font-bold px-3 py-1.5 rounded-lg border transition-all ${
                isScrolled 
                  ? 'border-zinc-200 text-zinc-700 hover:bg-zinc-50' 
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'বাংলা' : 'EN'}
            </button>

            <a
              href={`tel:${t('phoneNumber')}`}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                isScrolled
                  ? 'bg-zinc-900 text-white hover:bg-zinc-800'
                  : 'bg-white text-zinc-900 hover:bg-zinc-100'
              }`}
            >
              <Phone className="w-4 h-4" />
              {t('phoneNumberFormatted')}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 text-xs font-bold px-2 py-1 rounded-lg border transition-all ${
                isScrolled 
                  ? 'border-zinc-200 text-zinc-700' 
                  : 'border-white/20 text-white'
              }`}
            >
              {language === 'en' ? 'বাংলা' : 'EN'}
            </button>
            <button
              className={`p-2 ${isScrolled ? 'text-zinc-900' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-zinc-100 lg:hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-zinc-900 py-2 border-b border-zinc-50"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`tel:${t('phoneNumber')}`}
                className="flex items-center justify-center gap-2 bg-zinc-900 text-white py-3 rounded-xl font-semibold mt-2"
              >
                <Phone className="w-5 h-5" />
                {t('phoneNumberFormatted')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
