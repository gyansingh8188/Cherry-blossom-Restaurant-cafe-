import React from 'react';
import { X, Plus, Clock, Sparkles, AlertCircle, ExternalLink } from 'lucide-react';
import { MenuItem } from '../types';
import { formatINR } from '../utils/menu';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface DishDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToBag: (item: MenuItem) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ item, onClose, onAddToBag }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#292326]/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#EAD5DC] my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-slate-700 hover:text-black hover:bg-white shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Image */}
        <div className="relative aspect-16/9 bg-slate-100 overflow-hidden">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

          {/* Dietary badge */}
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-lg shadow-xs flex items-center gap-2">
            <div
              className={`w-3.5 h-3.5 border-2 flex items-center justify-center ${
                item.dietary === 'veg' ? 'border-emerald-600' : 'border-rose-600'
              }`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  item.dietary === 'veg' ? 'bg-emerald-600' : 'bg-rose-600'
                }`}
              />
            </div>
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              {item.dietary === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
            </span>
          </div>

          {item.prepTime && (
            <div className="absolute bottom-4 right-4 bg-[#651F35]/90 text-[#FFF9F4] text-xs font-semibold px-3 py-1 rounded-lg backdrop-blur-xs flex items-center gap-1.5 border border-[#F3C7D2]/30">
              <Clock className="w-3.5 h-3.5 text-[#F3C7D2]" />
              {item.prepTime}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <span className="text-[11px] uppercase font-bold tracking-wider text-[#C49A62] block mb-1">
                {item.categoryLabel}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#292326] leading-tight">
                {item.name}
              </h3>
            </div>
            <span className="font-serif text-2xl font-bold text-[#651F35]">
              {formatINR(item.price)}
            </span>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed mb-6">{item.description}</p>

          {/* Key Ingredients */}
          {item.ingredients && item.ingredients.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Ingredients &amp; Notes
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-[#FFF9F4] text-slate-700 border border-[#EAD5DC] text-xs font-medium"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Preparation & Spice Level */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#FFF9F4] border border-[#EAD5DC] mb-6 text-xs">
            <div>
              <span className="text-slate-500 block mb-0.5">Kitchen Prep Time:</span>
              <strong className="text-slate-800">{item.prepTime || '15 minutes'}</strong>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Spice Level:</span>
              <strong className="capitalize text-slate-800">{item.spiciness || 'Mild'}</strong>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={() => {
                onAddToBag(item);
                onClose();
              }}
              className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-[#651F35] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#4E1729] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              Add to Order Bag ({formatINR(item.price)})
            </button>

            <a
              href={RESTAURANT_INFO.onlineOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3 px-4 rounded-xl border border-[#C49A62] text-[#651F35] font-semibold text-xs tracking-wider uppercase text-center hover:bg-[#FFF9F4] transition-colors flex items-center justify-center gap-1.5"
            >
              Order on Motina ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
