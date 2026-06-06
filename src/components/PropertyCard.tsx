/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Bed, Bath, Layout, Maximize2, MapPin, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { Property } from '../data/properties';
import { motion } from 'motion/react';
import { useTranslation } from '../LanguageContext';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
  index: number;
  key?: string | number;
}

export default function PropertyCard({ property, index }: PropertyCardProps) {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = property?.images?.length ? property.images : [property?.imageUrl || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200'];

  // Handle image sliding
  // Removed automatic sliding as per request

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };

  const whatsappUrl = `https://wa.me/8801711262623?text=${encodeURIComponent(
    `Hi, I am interested in your property: ${property.name} in ${property.location}. Please provide more details.`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-brand-mint/50 transition-all hover:shadow-[0_20px_40px_-15px_rgba(27,94,32,0.1)] hover:-translate-y-2"
    >
      <Link to={`/property/${property.id}`} className="relative h-64 overflow-hidden block group/image">
        <img
          src={images[currentImageIndex]}
          alt={property.name}
          loading="lazy"
          className="w-full h-full object-contain bg-zinc-50 transition-opacity duration-500 group-hover:scale-105"
        />
        {images.length > 1 && (
          <>
            <button 
              onClick={handlePrevImage} 
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-brand-green rounded-full shadow-lg backdrop-blur-sm transition-all opacity-0 group-hover/image:opacity-100 focus:opacity-100 z-10"
              aria-label="Previous Image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={handleNextImage} 
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-brand-green rounded-full shadow-lg backdrop-blur-sm transition-all opacity-0 group-hover/image:opacity-100 focus:opacity-100 z-10"
              aria-label="Next Image"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-brand-green/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full cursor-default shadow-sm">
            {property.status === 'Ready' ? t('statusReady') : property.status === 'Handover Soon' ? t('statusSoon') : property.status}
          </span>
          <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-brand-green text-[10px] font-bold uppercase tracking-widest rounded-full cursor-default shadow-sm">
            {property.facing}
          </span>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <Link to={`/property/${property.id}`} className="block mb-2 group-hover:text-brand-green-light transition-colors">
          <h3 className="text-xl font-serif font-bold text-brand-charcoal transition-colors leading-tight line-clamp-2">{property.name}</h3>
        </Link>

        <div className="flex items-center gap-1 text-zinc-500 text-sm mb-4 font-medium">
          <MapPin className="w-4 h-4 text-brand-mint" />
          {property.location}
        </div>

        <div className="grid grid-cols-3 gap-4 py-4 border-y border-brand-mint/30 mb-4 bg-brand-sand/30 rounded-xl px-2">
          <div className="flex flex-col items-center gap-1">
            <Bed className="w-4 h-4 text-brand-green/70" />
            <span className="text-xs font-semibold text-brand-charcoal/70">{property.beds} {t('beds')}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Bath className="w-4 h-4 text-brand-green/70" />
            <span className="text-xs font-semibold text-brand-charcoal/70">{property.baths} {t('baths')}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Maximize2 className="w-4 h-4 text-brand-green/70" />
            <span className="text-xs font-semibold text-brand-charcoal/70">{property.size || 'N/A'}</span>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          {property.features.slice(0, 4).map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-xs text-zinc-600 font-medium">
              <CheckCircle2 className="w-3 h-3 text-brand-green" />
              {feature}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-auto pt-2">
          <span className="flex-1 text-xs md:text-sm font-bold text-brand-green leading-tight pr-2">
            {property.price || 'Contact for best price'}
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-3 bg-[#25D366] text-white rounded-xl font-bold text-sm transition-all hover:bg-[#1DA851] hover:shadow-lg hover:shadow-[#25D366]/20 shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="hidden sm:inline">{t('whatsapp')}</span>
          </a>
          <a
            href={property.googleMapsUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 py-3 flex items-center justify-center bg-brand-sand text-brand-green rounded-xl border border-brand-mint hover:bg-brand-mint hover:text-brand-green-light transition-colors shrink-0"
            title="View on Map"
          >
            <MapPin className="w-4 h-4 font-bold" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
