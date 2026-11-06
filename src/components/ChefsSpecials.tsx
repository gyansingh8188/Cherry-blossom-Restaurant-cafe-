import React from 'react';
import { Sparkles, Plus, ExternalLink, Flame } from 'lucide-react';
import { MenuItem } from '../types';
import { CHEFS_SPECIAL_HIGHLIGHTS, RESTAURANT_INFO } from '../data/restaurantData';
import { formatINR } from '../utils/menu';

interface ChefsSpecialsProps {
  onSelectItem: (item: MenuItem) => void;
  onAddToBag: (item: MenuItem) => void;
}

export const ChefsSpecials: React.FC<ChefsSpecialsProps> = ({ onSelectItem, onAddToBag }) => {
  return (
    <section id="specials" className="py-20 bg-[#651F35] text-[#FFF9F4] relative overflow-hidden">
      {/* Decorative floral background motif */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-[#F3C7D2]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#C49A62]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F3C7D2] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Culinary Highlights</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Chef’s Signature Creations
            </h2>
          </div>
          <p className="text-sm text-[#F3C7D2]/80 max-w-md mt-4 md:mt-0 leading-relaxed">
            Curated dishes and handcrafted beverages that define the spirit of Cherry Blossom.
            Each recipe balances time-honored traditions with modern finesse.
          </p>
        </div>

        {/* Specials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHEFS_SPECIAL_HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="group bg-[#4E1729]/90 rounded-2xl overflow-hidden border border-[#F3C7D2]/20 flex flex-col justify-between hover:border-[#F3C7D2]/50 transition-all duration-300 hover:shadow-xl"
            >
              {/* Image & Badge */}
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#4E1729] via-transparent to-transparent opacity-80" />

                {/* Dietary Badge */}
                <div className="absolute top-3 left-3 bg-[#292326]/80 backdrop-blur-xs px-2.5 py-1 rounded-md flex items-center gap-1.5 border border-white/10">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.dietary === 'veg' ? 'bg-emerald-400' : 'bg-rose-500'
                    }`}
                  />
                  <span className="text-[10px] uppercase font-bold tracking-wider text-white">
                    {item.dietary === 'veg' ? 'Pure Veg' : 'Non-Veg'}
                  </span>
                </div>

                {item.prepTime && (
                  <div className="absolute top-3 right-3 bg-[#651F35]/90 text-[10px] text-[#F3C7D2] font-semibold px-2 py-0.5 rounded-md border border-[#F3C7D2]/30">
                    {item.prepTime}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#F3C7D2] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <span className="font-serif text-lg font-bold text-[#F3C7D2] whitespace-nowrap">
                      {formatINR(item.price)}
                    </span>
                  </div>

                  <p className="text-xs text-[#FFF9F4]/75 line-clamp-2 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {item.ingredients && (
                    <div className="flex flex-wrap gap-1 text-[11px] text-[#F3C7D2]/70 mb-4">
                      {item.ingredients.slice(0, 3).map((ing, idx) => (
                        <span key={idx}>
                          {ing}
                          {idx < 2 ? ' ·' : ''}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-[#F3C7D2]/15 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectItem(item)}
                    className="text-xs text-[#F3C7D2] hover:text-white font-medium underline underline-offset-4 flex items-center gap-1 transition-colors"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => onAddToBag(item)}
                    className="px-3.5 py-1.5 rounded-lg bg-[#C49A62] text-[#292326] text-xs font-bold hover:bg-[#d8b078] active:scale-95 transition-all flex items-center gap-1 shadow-xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add to Bag
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Online Order Promo */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-[#F3C7D2]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C49A62]/20 text-[#C49A62] flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Prefer to order for takeaway or delivery?</h4>
              <p className="text-xs text-[#F3C7D2]/80">
                You can also order all signature dishes directly via our verified Motina online menu.
              </p>
            </div>
          </div>
          <a
            href={RESTAURANT_INFO.onlineOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-[#FFF9F4] text-[#651F35] font-bold text-xs uppercase tracking-wider hover:bg-[#F3C7D2] transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-xs"
          >
            Order on Motina ↗
          </a>
        </div>
      </div>
    </section>
  );
};
