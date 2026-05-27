/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import PropertyCard from './PropertyCard';
import { useTranslation } from '../LanguageContext';
import { motion } from 'motion/react';

export default function UpcomingFlats() {
  const { t } = useTranslation();
  const properties = (t('propertyData') as any[]).filter(p => p.status === 'Upcoming' || p.status === 'Handover Soon');

  if (properties.length === 0) return null;

  return (
    <section id="upcoming-flats" className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Branding Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2" />
      
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
              NEW DEVELOPMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-brand-charcoal leading-[1.15] sm:leading-tight">
              {t('upcomingTitle')} <br className="hidden sm:block" />
              <span className="text-brand-green font-medium">{t('upcomingTitleSpan')}</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-600 max-w-md text-base sm:text-lg leading-relaxed pb-2"
          >
            {t('upcomingDescription')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
