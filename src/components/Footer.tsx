/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Logo from './Logo';
import { useTranslation } from '../LanguageContext';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-sand pt-24 pb-12 border-t border-brand-mint/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          <div className="space-y-6">
            <Logo className="h-24" />
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              {t('footerDescription')}
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1EDhkp22Qc/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all shadow-sm border border-zinc-200">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href={`https://wa.me/88${t('phoneNumber')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all shadow-sm border border-zinc-200">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .015 5.398.01 12.038c0 2.123.555 4.197 1.608 6.075L0 24l6.135-1.61a11.75 11.75 0 005.912 1.586h.005c6.631 0 12.03-5.398 12.035-12.041a11.78 11.78 0 00-3.489-8.522z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-all shadow-sm border border-zinc-200">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6 uppercase tracking-widest text-xs">{t('quickLinks')}</h4>
            <ul className="space-y-4">
              {[
                { name: t('homeLink'), href: '#home' },
                { name: t('propertiesLink'), href: '#properties' },
                { name: t('land'), href: '#land' },
                { name: t('aboutLink'), href: '#about' },
                { name: t('contactLink'), href: '#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-zinc-500 text-sm hover:text-zinc-900 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6 uppercase tracking-widest text-xs">{t('popularAreas')}</h4>
            <ul className="space-y-4">
              {['Joydebpur'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-500 text-sm hover:text-zinc-900 transition-colors">
                    {t('flatsIn')} {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6 uppercase tracking-widest text-xs">{t('contact')}</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li>{t('officeText')}</li>
              <li>{t('phoneNumberFormatted')}</li>
              <li>{t('emailValue')}</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-50 flex flex-col justify-center items-center gap-4 text-center">
          <p className="text-zinc-400 text-xs">
            © {currentYear} Faysal Real Estate. {t('allRightsReserved')}
          </p>
          <div className="flex gap-6 justify-center">
            <a href="#" className="text-zinc-400 text-xs hover:text-zinc-900 transition-colors">{t('privacyPolicy')}</a>
            <a href="#" className="text-zinc-400 text-xs hover:text-zinc-900 transition-colors">{t('termsOfService')}</a>
          </div>
          <p className="text-zinc-600 font-bold text-xs mt-2">
            {t('createdBy')} <a href="https://www.tntprojukti.com/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 hover:underline">TnT Projukti</a>
          </p>
        </div>
      </div>

      {/* Floating Sticky WhatsApp Button */}
      <a
        href={`https://wa.me/88${t('phoneNumber')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group overflow-hidden"
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-10 h-10 fill-current"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .015 5.398.01 12.038c0 2.123.555 4.197 1.608 6.075L0 24l6.135-1.61a11.75 11.75 0 005.912 1.586h.005c6.631 0 12.03-5.398 12.035-12.041a11.78 11.78 0 00-3.489-8.522z" fill="white"/>
        </svg>
        <span className="absolute right-full mr-4 bg-zinc-900 text-white text-xs font-bold py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          {t('contactWhatsApp')}
        </span>
      </a>
    </footer>
  );
}
