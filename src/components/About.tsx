/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Clock, Award, Hammer } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from '../LanguageContext';

export default function About() {
  const { t } = useTranslation();


  const valueProps = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: t('trustTitle'),
      desc: t('trustDesc'),
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t('deliveryTitle'),
      desc: t('deliveryDesc'),
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t('locationTitle'),
      desc: t('locationDesc'),
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: t('qualityTitle'),
      desc: t('qualityDesc'),
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Branding Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative z-10 aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl border border-brand-mint/50"
             >
                <img 
                   src="/images/regenerated_image_1778915826108.png" 
                   alt="Faysal Real Estate Building" 
                   className="w-full h-full object-cover"
                />
             </motion.div>
             {/* Decorative element */}
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-sand border border-brand-mint/30 rounded-[60px] -z-10 hidden md:block" />
             

          </div>

          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-block px-3 py-1 bg-brand-mint text-brand-green rounded-full text-[10px] uppercase tracking-[0.2em] font-bold mb-4 block w-fit">
                {t('aboutBadge')}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-brand-charcoal leading-[1.15] sm:leading-tight">
                {t('aboutTitle')} <br className="hidden sm:block" />
                <span className="text-brand-green font-medium">{t('aboutTitleSpan')}</span>
              </h2>
              <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
                {t('aboutDescription')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {valueProps.map((prop, idx) => (
                <motion.div 
                  key={prop.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-4 bg-brand-sand/30 p-6 rounded-3xl border border-brand-mint/20 hover:border-brand-mint transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-brand-mint/50 flex items-center justify-center text-brand-green shadow-sm">
                    {prop.icon}
                  </div>
                  <h4 className="font-bold text-brand-charcoal">{prop.title}</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">{prop.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
