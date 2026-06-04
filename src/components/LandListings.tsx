/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Maximize2, Compass, CheckCircle2, MessageSquare } from 'lucide-react';
import { useTranslation } from '../LanguageContext';
import { motion } from 'motion/react';

export default function LandListings() {
  const { t } = useTranslation();
  const landPlots = t('landData') as any[];

  return (
    <section id="land" className="py-16 md:py-24 lg:py-32 bg-brand-sand relative overflow-hidden">
      {/* Decorative Branding Elements */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-green/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 py-1 bg-brand-mint text-brand-green rounded-full text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
              {t('landBadge')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-brand-charcoal leading-[1.15] sm:leading-tight">
              {t('landTitle')} <br className="hidden sm:block" />
              <span className="text-brand-green font-medium">{t('landTitleSpan')}</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-600 max-w-md text-base sm:text-lg leading-relaxed pb-2"
          >
            {t('landDescription')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {landPlots.map((plot: any, index: number) => (
            <motion.div
              key={plot.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[40px] overflow-hidden border border-brand-mint/50 transition-all hover:shadow-[0_20px_40px_-15px_rgba(27,94,32,0.1)] hover:-translate-y-2"
            >
              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={plot.imageUrl}
                    loading="lazy"
                    alt={plot.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-brand-green/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
                      {plot.status === 'Ready for Registry' ? t('registryReady') : plot.status}
                    </span>
                  </div>
                </div>
                
                <div className="lg:w-3/5 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-serif font-bold text-brand-charcoal group-hover:text-brand-green-light transition-colors">{plot.name}</h3>
                    </div>
                    
                    <div className="flex items-center gap-2 text-zinc-500 text-sm mb-6 font-medium">
                      <MapPin className="w-4 h-4 text-brand-mint" />
                      {plot.location}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="p-4 bg-brand-sand/50 rounded-2xl border border-brand-mint/30 hover:border-brand-mint transition-colors">
                        <div className="flex items-center gap-2 text-zinc-500 text-[10px] uppercase font-bold tracking-wider mb-1">
                          <Maximize2 className="w-3 h-3 text-brand-green/70" />
                          {t('landSizeLabel')}
                        </div>
                        <div className="text-lg font-bold text-brand-charcoal">{plot.size}</div>
                      </div>
                      <div className="p-4 bg-brand-sand/50 rounded-2xl border border-brand-mint/30 hover:border-brand-mint transition-colors">
                        <div className="flex items-center gap-2 text-zinc-500 text-[10px] uppercase font-bold tracking-wider mb-1">
                          <Compass className="w-3 h-3 text-brand-green/70" />
                          {t('landFacingLabel')}
                        </div>
                        <div className="text-lg font-bold text-brand-charcoal">{plot.facing}</div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-8">
                      {plot.features.map((feature: string) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-zinc-600 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-brand-green" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-brand-mint/30">
                    <div className="text-xl font-bold text-brand-green">{plot.price}</div>
                    <a
                      href={`https://wa.me/8801711262623?text=${encodeURIComponent(`Interest in ${plot.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl font-bold text-sm transition-all hover:bg-[#1DA851] hover:shadow-lg hover:shadow-[#25D366]/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      {t('whatsapp')}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
