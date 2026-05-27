/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from '../LanguageContext';
import { motion } from 'motion/react';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-brand-sand text-brand-charcoal overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-mint/20 rounded-full blur-[80px] -ml-32 -mb-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-block px-3 py-1 bg-brand-mint text-brand-green rounded-full text-[10px] uppercase tracking-[0.2em] font-bold mb-4 block w-fit mx-auto">
                {t('contactBadge')}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold leading-[1.15] sm:leading-tight">
                {t('contactTitle')} <br className="hidden sm:block" />
                <span className="text-brand-green font-medium">{t('contactTitleSpan')}</span>
              </h2>
              <p className="text-zinc-600 text-base sm:text-lg mx-auto max-w-xl leading-relaxed">
                {t('contactDescription')}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12 bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-brand-mint/50 shadow-xl shadow-brand-green/5"
            >
              <div className="flex gap-6 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-2xl bg-brand-mint/50 flex items-center justify-center flex-shrink-0 border border-brand-mint">
                  <MapPin className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t('visitOffice')}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {t('officeAddressFull')}
                  </p>
                </div>
              </div>

              <div className="flex gap-6 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-2xl bg-brand-mint/50 flex items-center justify-center flex-shrink-0 border border-brand-mint">
                  <Phone className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t('callAnywhere')}</h4>
                  <p className="text-zinc-500 text-sm">
                    <span className="font-medium text-brand-charcoal">{t('salesLabel')}:</span> {t('phoneNumberFormatted')}<br />
                    <span className="font-medium text-brand-charcoal">{t('officeLabel')}:</span> {t('officePhoneNumber')}
                  </p>
                </div>
              </div>

              <div className="flex gap-6 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-2xl bg-brand-mint/50 flex items-center justify-center flex-shrink-0 border border-brand-mint">
                  <Mail className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t('emailLabel')}</h4>
                  <p className="text-zinc-500 text-sm">
                    {t('emailValue')}
                  </p>
                </div>
              </div>

              <div className="flex gap-6 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-2xl bg-brand-mint/50 flex items-center justify-center flex-shrink-0 border border-brand-mint">
                  <Clock className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t('businessHours')}</h4>
                  <p className="text-zinc-500 text-sm">
                    {t('hoursDays')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
