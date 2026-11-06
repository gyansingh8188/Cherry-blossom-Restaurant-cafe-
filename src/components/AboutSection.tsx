import React from 'react';
import { Heart, Sparkles, Coffee, ShieldCheck, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Sparkles,
      title: 'Artisanal Preparation',
      description:
        'From freshly kneaded dough and rich simmered gravies to signature coffee roasts, our recipes prioritize fresh quality in every plate.',
    },
    {
      icon: Coffee,
      title: 'Warm Cafe Culture',
      description:
        'A peaceful space designed with soft lighting and aesthetic comfort—ideal for casual coffee dates, laptop work sessions, or friendly catch-ups.',
    },
    {
      icon: Heart,
      title: 'Heartfelt Hospitality',
      description:
        'Our team in Robertsganj is dedicated to making every guest feel truly welcome, whether you are stopping by for a quick drink or a family feast.',
    },
    {
      icon: ShieldCheck,
      title: 'Hygiene & Cleanliness',
      description:
        'Strict culinary hygiene and a spotless first-floor dining room ensure you and your loved ones enjoy a safe, memorable dining experience.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFF9F4] relative border-t border-[#EAD5DC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A62] block mb-2">
            Our Story &amp; Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292326] tracking-tight mb-4">
            A Place Where Flavours Meet <br className="hidden sm:inline" />
            <span className="text-[#651F35] italic font-normal">Beautiful Moments.</span>
          </h2>
          <p className="text-base text-slate-700 leading-relaxed">
            Nestled on the 1st Floor of Jasraj Kripa Building in Barauli, Robertsganj, Cherry Blossom
            Restaurant &amp; Cafe was founded with a singular aspiration: to provide our community
            with an elevated, peaceful sanctuary where exceptional food and warm hospitality bloom together.
          </p>
        </div>

        {/* Visual & Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left: Dual Photography Mosaic */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#EAD5DC] aspect-3/4">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80"
                  alt="Cherry Blossom dining interior"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 rounded-xl bg-[#F3C7D2]/25 border border-[#F3C7D2]/50 text-center">
                <span className="font-serif text-2xl font-bold text-[#651F35] block">Sonbhadra</span>
                <span className="text-xs text-slate-700">Modern Dining Destination</span>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-4 rounded-xl bg-white border border-[#EAD5DC] shadow-xs">
                <div className="flex items-center gap-2 text-xs text-[#651F35] font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C49A62]" />
                  Barauli, Robertsganj
                </div>
                <p className="text-xs text-slate-600">
                  Near Nagar Sarkari Bank, convenient 1st Floor location with serene ambiance.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#EAD5DC] aspect-3/4">
                <img
                  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=700&q=80"
                  alt="Artisanal cafe drinks and coffee"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right: Narrative & Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292326] mb-4">
              Crafted With Care for Everyday Diners and Special Occasions
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              Whether you are craving authentic North Indian curries, sizzlers, hand-crafted Italian pizzas,
              or a signature Rose Blossom Latte, our kitchen balances bold flavours with wholesome ingredients.
              We believe a meal is never just food—it is the laughter shared across the table, the peaceful sip
              of coffee after a long day, and the joy of coming together.
            </p>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-xl bg-white border border-[#EAD5DC] shadow-xs hover:border-[#651F35]/30 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#651F35]/10 text-[#651F35] flex items-center justify-center mb-3">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-sm text-[#292326] mb-1">{pillar.title}</h4>
                    <p className="text-xs text-slate-600 leading-normal">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
