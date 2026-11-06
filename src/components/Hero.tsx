import React from 'react';
import { ArrowDown, Star, Clock, MapPin, UtensilsCrossed, Calendar } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onExploreMenu: () => void;
  onReserveTable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onReserveTable }) => {
  return (
    <section id="home" className="relative pt-24 lg:pt-28 pb-16 lg:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F3C7D2]/30 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C49A62]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[75vh]">
          {/* Left Column: Editorial Brand Headline */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Metadata Tagline */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C49A62] mb-4">
              <span>Robertsganj, Sonbhadra</span>
              <span aria-hidden="true">·</span>
              <span>1st Floor, Jasraj Kripa</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-[#651F35]">
                <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
                4.8 Google Rating
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#292326] font-bold tracking-tight leading-[1.12] mb-6 text-balance">
              An Experience <br />
              <span className="text-[#651F35] italic font-normal">Worth Savoring.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#292326]/80 max-w-xl leading-relaxed mb-8">
              Discover the perfect blend of delicious food, warm hospitality, and memorable moments
              at Cherry Blossom Restaurant &amp; Cafe. Handcrafted flavours designed to bloom with every bite.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExploreMenu}
                className="px-7 py-3.5 rounded-lg bg-[#651F35] text-[#FFF9F4] font-semibold text-sm tracking-wide shadow-md hover:bg-[#4E1729] active:scale-95 transition-all duration-200 flex items-center gap-2"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#F3C7D2]" />
                Explore Our Menu
              </button>

              <button
                onClick={onReserveTable}
                className="px-7 py-3.5 rounded-lg border-2 border-[#651F35] text-[#651F35] font-semibold text-sm tracking-wide hover:bg-[#651F35] hover:text-[#FFF9F4] active:scale-95 transition-all duration-200 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Reserve Your Table
              </button>

              <a
                href={RESTAURANT_INFO.onlineOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-xs font-semibold text-[#651F35] hover:text-[#4E1729] underline decoration-[#C49A62] underline-offset-4 flex items-center gap-1.5 transition-colors"
              >
                Order Online (Motina Platform) ↗
              </a>
            </div>

            {/* Quick trust metrics row */}
            <div className="pt-6 border-t border-[#EAD5DC] grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <span className="block font-serif text-2xl font-bold text-[#651F35]">100%</span>
                <span className="block text-xs text-slate-600 mt-0.5">Fresh Ingredients</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-[#651F35]">Multi</span>
                <span className="block text-xs text-slate-600 mt-0.5">Cuisine Specialties</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-[#651F35]">10:30–22:30</span>
                <span className="block text-xs text-slate-600 mt-0.5">Open All 7 Days</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-4/5">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85"
                  alt="Cherry Blossom Signature Platter & Sizzler Presentation"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#292326]/70 via-transparent to-transparent" />

                {/* Overlaid caption card */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#F3C7D2] block mb-1">
                    Signature Dining
                  </span>
                  <p className="font-serif text-xl font-bold leading-tight">
                    Where Every Bite Blooms with Happiness.
                  </p>
                  <p className="text-xs text-white/80 mt-1">
                    1st Floor, Jasraj Kripa Building, Barauli
                  </p>
                </div>
              </div>

              {/* Floating review card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-[#EAD5DC] max-w-[240px] hidden sm:block">
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-[#292326]">"Exceptional food &amp; ambience!"</p>
                <span className="text-[11px] text-slate-500 block mt-0.5">Google Maps Verified Diner</span>
              </div>

              {/* Floating hours card */}
              <div className="absolute -top-4 -right-4 bg-[#651F35] text-white py-2.5 px-4 rounded-xl shadow-lg border border-[#F3C7D2]/30 hidden sm:flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F3C7D2]" />
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-wider text-[#F3C7D2]">Open Everyday</span>
                  <span className="block text-xs font-bold">10:30 AM – 10:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-12 text-center">
          <a
            href="#about"
            className="inline-flex flex-col items-center text-xs font-medium text-slate-500 hover:text-[#651F35] transition-colors"
          >
            <span className="mb-1.5 uppercase tracking-widest text-[10px]">Discover More</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#651F35]" />
          </a>
        </div>
      </div>
    </section>
  );
};
