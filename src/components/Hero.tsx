/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import { useTranslation } from '../LanguageContext';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative full-screen-section min-h-[600px] md:min-h-[700px] flex flex-col justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1613490900233-08b345f563d4?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Luxury Real Estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[rgba(10,10,10,0.6)] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 md:pt-40 lg:pt-48 pb-12 md:pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-brand-green/80 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-bold tracking-widest uppercase mb-4 sm:mb-6 md:mb-8 shadow-2xl">
              <MapPin className="w-4 h-4 text-brand-mint" />
              {t('heroBadge')}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-serif font-extrabold text-white leading-[1.15] sm:leading-[1.1] md:leading-[1.05] mb-4 sm:mb-6">
              {t('heroTitle')} <br className="hidden sm:block" />
              <span className="text-brand-mint font-medium">{t('heroTitleSpan')}</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-zinc-100 font-light mb-2 max-w-2xl leading-relaxed opacity-90">
              {t('heroSubtitle')}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-zinc-200 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-xl leading-relaxed font-sans">
              {t('heroDescription')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a
                href="#properties"
                className="group flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-brand-green text-white rounded-full font-bold text-base sm:text-lg transition-all hover:bg-brand-green-light hover:shadow-xl active:scale-95"
              >
                {t('viewFlats')}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#land"
                className="flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white/10 border-2 border-white/20 text-white rounded-full font-bold text-base sm:text-lg backdrop-blur-md transition-all hover:bg-white/20"
              >
                {t('viewLand')}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: [0, -15, 0] 
        }}
        transition={{ 
          opacity: { delay: 1.2, duration: 0.6 },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2
          }
        }}
        className="absolute top-24 right-4 sm:top-28 sm:right-6 md:top-40 md:right-8 lg:right-12 z-20 origin-top-right scale-[0.7] sm:scale-90 md:scale-100"
      >
        <div className="bg-white/95 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-2xl max-w-[220px] md:max-w-[260px] border border-brand-mint/30">
          <div className="text-4xl md:text-5xl font-serif font-extrabold text-brand-green mb-2">{t('projectsCount')}</div>
          <div className="text-xs uppercase tracking-widest font-bold text-brand-charcoal mb-3 md:mb-4">{t('projectsLabel')}</div>
          <p className="text-sm md:text-sm text-zinc-500 leading-relaxed font-medium">
            {t('projectsDesc')}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
