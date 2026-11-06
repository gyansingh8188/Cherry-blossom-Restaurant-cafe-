import React, { useState, useMemo } from 'react';
import { Search, Plus, Eye, Utensils, SlidersHorizontal, Leaf, Sparkles } from 'lucide-react';
import { MenuItem, DietaryType } from '../types';
import { MENU_CATEGORIES, MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { filterMenuItems, formatINR } from '../utils/menu';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onAddToBag: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItem, onAddToBag }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dietaryFilter, setDietaryFilter] = useState<DietaryType | 'all'>('all');

  const filteredItems = useMemo(() => {
    return filterMenuItems(MENU_ITEMS, activeCategory, searchQuery, dietaryFilter);
  }, [activeCategory, searchQuery, dietaryFilter]);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#FFF9F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A62] mb-2">
            <Utensils className="w-3.5 h-3.5" />
            <span>Curated Gastronomy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292326] tracking-tight mb-4">
            Our Handcrafted Menu
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Every dish is prepared fresh to order using finest ingredients. Explore our authentic
            North Indian entrees, tandoori starters, continental snacks, and barista coffee creations.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#EAD5DC] shadow-xs mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes, ingredients (e.g. Paneer, Biryani, Coffee)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FFF9F4] border border-[#EAD5DC] text-sm text-[#292326] placeholder:text-slate-400 focus:outline-hidden focus:border-[#651F35] focus:ring-1 focus:ring-[#651F35]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Preference Filter Buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-[#FFF9F4] rounded-xl border border-[#EAD5DC] shrink-0 self-start md:self-auto">
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  dietaryFilter === 'all'
                    ? 'bg-[#651F35] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#651F35]'
                }`}
              >
                All Dishes
              </button>
              <button
                onClick={() => setDietaryFilter('veg')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                  dietaryFilter === 'veg'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Pure Veg Only
              </button>
              <button
                onClick={() => setDietaryFilter('non-veg')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-rose-700 text-white shadow-xs'
                    : 'text-rose-700 hover:bg-rose-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                Non-Veg
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mt-4 pt-4 border-t border-[#EAD5DC] flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-[#651F35] text-white shadow-xs'
                      : 'bg-[#FFF9F4] text-[#292326] border border-[#EAD5DC] hover:border-[#651F35]/40 hover:text-[#651F35]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter & Online Order Alert */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 px-1">
          <span>
            Showing <strong className="text-[#292326]">{filteredItems.length}</strong> items in menu
          </span>
          <a
            href={RESTAURANT_INFO.onlineOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#651F35] hover:underline font-semibold flex items-center gap-1"
          >
            Direct Ordering Portal (Motina) ↗
          </a>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-[#EAD5DC]">
            <Utensils className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-[#292326] mb-1">No items found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
              We couldn't find any dishes matching your filters or search query.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="px-4 py-2 rounded-lg bg-[#651F35] text-white text-xs font-semibold"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#EAD5DC] shadow-xs hover:shadow-md hover:border-[#651F35]/30 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Top Area */}
                <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60" />

                  {/* Dietary Indicator (authentic Indian FSSAI veg/non-veg mark) */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs p-1 rounded-md shadow-xs border border-slate-200">
                    <div
                      className={`w-3.5 h-3.5 border-2 flex items-center justify-center ${
                        item.dietary === 'veg' ? 'border-emerald-600' : 'border-rose-600'
                      }`}
                      title={item.dietary === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          item.dietary === 'veg' ? 'bg-emerald-600' : 'bg-rose-600'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Chef Special or Popular Ribbon */}
                  {item.isChefSpecial ? (
                    <span className="absolute top-3 right-3 bg-[#651F35] text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs tracking-wider uppercase flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" />
                      Special
                    </span>
                  ) : item.isPopular ? (
                    <span className="absolute top-3 right-3 bg-[#C49A62] text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs tracking-wider uppercase">
                      Popular
                    </span>
                  ) : null}

                  {item.prepTime && (
                    <span className="absolute bottom-2.5 left-3 text-[11px] font-medium text-white/90 drop-shadow-sm">
                      Prep: {item.prepTime}
                    </span>
                  )}
                </div>

                {/* Details Bottom Area */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-serif text-lg font-bold text-[#292326] group-hover:text-[#651F35] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <span className="font-serif text-lg font-bold text-[#651F35] whitespace-nowrap">
                        {formatINR(item.price)}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.ingredients && item.ingredients.length > 0 && (
                      <p className="text-[11px] text-slate-500 mb-4 truncate">
                        <strong className="text-slate-700">Includes: </strong>
                        {item.ingredients.slice(0, 3).join(', ')}
                        {item.ingredients.length > 3 ? '...' : ''}
                      </p>
                    )}
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-3 border-t border-[#EAD5DC] flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectItem(item)}
                      className="text-xs font-semibold text-slate-600 hover:text-[#651F35] flex items-center gap-1 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Details
                    </button>

                    <button
                      onClick={() => onAddToBag(item)}
                      className="px-4 py-2 rounded-lg bg-[#651F35] text-white text-xs font-bold hover:bg-[#4E1729] active:scale-95 transition-all flex items-center gap-1.5 shadow-xs"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
