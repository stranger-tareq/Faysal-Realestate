import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Bed, Bath, Maximize2, CheckCircle2, MessageSquare, ArrowLeft } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTranslation } from '../LanguageContext';

export default function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProperty = async () => {
      if (!id) return;
      // Use static data
      const allStatic = [...(t('propertyData') as any[]), ...(t('landData') as any[])];
      const found = allStatic.find(p => p.id === id);
      if (found) {
        setProperty(found);
      } else {
        navigate('/');
      }
      setLoading(false);
    };
    fetchProperty();
  }, [id, navigate, t]);

  if (loading) {
    return (
      <div className="full-screen-section bg-brand-sand flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex space-x-4">
            <div className="h-10 w-10 bg-brand-mint text-brand-green rounded-full"></div>
            <div className="space-y-6 py-1">
              <div className="h-2 w-48 bg-brand-mint rounded"></div>
              <div className="h-2 w-64 bg-brand-mint rounded"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!property) return null;

  const whatsappUrl = `https://wa.me/8801711262623?text=${encodeURIComponent(
    `Hi, I am interested in your property: ${property.name} in ${property.location}. Please provide more details.`
  )}`;

  return (
    <div className="full-screen-section bg-brand-sand flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 relative">
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-zinc-500 hover:text-brand-green mb-8 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>

          <div className="space-y-8">
            
            {/* Property Image & Info */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="space-y-8"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-brand-mint/50">
                <img 
                  src={property.imageUrl || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200'} 
                  alt={property.name}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              <div className="bg-white rounded-3xl p-8 border border-brand-mint/50 shadow-xl shadow-brand-green/5">
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-1.5 bg-brand-mint text-brand-green text-xs font-bold uppercase tracking-widest rounded-full border border-brand-mint/50">
                    {property.status}
                  </span>
                  <span className="px-4 py-1.5 bg-brand-sand text-brand-charcoal text-xs font-bold uppercase tracking-widest rounded-full border border-brand-mint">
                    {property.facing || 'N/A'}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-brand-charcoal mb-3">{property.name}</h1>
                <p className="text-2xl font-bold text-brand-green mb-6">{property.price || 'Contact for Price'}</p>
                
                <div className="flex items-center gap-2 text-zinc-600 mb-8 font-medium">
                  <MapPin className="w-5 h-5 text-brand-mint" />
                  {property.location}
                </div>

                <div className="grid grid-cols-3 gap-6 py-8 border-y border-brand-mint/30 mb-8 bg-brand-sand/30 rounded-2xl px-4 mt-8">
                  <div className="flex flex-col items-center gap-2">
                    <Bed className="w-8 h-8 text-brand-green/70" />
                    <span className="text-sm font-semibold text-brand-charcoal">{property.beds || 0} Beds</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Bath className="w-8 h-8 text-brand-green/70" />
                    <span className="text-sm font-semibold text-brand-charcoal">{property.baths || 0} Baths</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Maximize2 className="w-8 h-8 text-brand-green/70" />
                    <span className="text-sm font-semibold text-brand-charcoal">{property.size || 'N/A'}</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 mt-8">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand-charcoal mb-6">Property Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {property.features?.map((feature: string) => (
                        <div key={feature} className="flex items-center gap-3 text-sm text-zinc-600 font-medium bg-brand-sand/50 p-3 rounded-xl border border-brand-mint/20">
                          <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-72 mt-8 md:mt-0 flex flex-col justify-center">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] text-white rounded-xl font-bold text-lg transition-all hover:bg-[#1DA851] shadow-lg hover:shadow-xl hover:shadow-[#25D366]/20 hover:-translate-y-1"
                    >
                      <MessageSquare className="w-6 h-6" />
                      Contact on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
