/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useTranslation } from '../LanguageContext';
import { motion } from 'motion/react';

export default function FlatSupport() {
  const { t } = useTranslation();
  
  return (
    <section className="pb-16 md:pb-24 lg:pb-32 bg-white relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-12 bg-brand-sand rounded-[40px] border border-brand-mint/50 shadow-2xl flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-mint/20 to-transparent pointer-events-none" />
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6 relative z-10"
          >
            <span className="inline-block px-3 py-1 bg-white text-brand-green border border-brand-mint rounded-full text-[10px] uppercase tracking-[0.2em] font-bold mb-2">
              {t('cantFindTitle') || 'Need Help?'}
            </span>
            <h3 className="text-4xl font-serif font-extrabold text-brand-charcoal">
              {t('cantFindTitle')}
            </h3>
            <p className="text-zinc-600 leading-relaxed text-lg">
              {t('cantFindDesc')}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="tel:01711262623" className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl border border-brand-mint/50 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="w-10 h-10 rounded-full bg-brand-mint flex items-center justify-center text-brand-green font-bold text-xs uppercase group-hover:bg-brand-green group-hover:text-white transition-colors">
                  BD
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-zinc-500">{t('callUs')}</div>
                  <div className="text-sm font-bold text-brand-charcoal">01711262623</div>
                </div>
              </a>
              <a href="https://wa.me/8801711262623" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl border border-brand-mint/50 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-zinc-500">{t('whatsapp')}</div>
                  <div className="text-sm font-bold text-brand-charcoal">{t('textUsNow')}</div>
                </div>
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 grid grid-cols-2 gap-4 relative z-10 hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="aspect-square bg-brand-mint/20 rounded-3xl overflow-hidden border border-brand-mint">
               <img loading="lazy" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-brand-mint/20 rounded-3xl overflow-hidden mt-8 border border-brand-mint">
               <img loading="lazy" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
