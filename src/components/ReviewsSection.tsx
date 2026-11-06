import React from 'react';
import { Star, MessageSquareQuote, ExternalLink, CheckCircle } from 'lucide-react';
import { CUSTOMER_REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FFF9F4] relative border-t border-[#EAD5DC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A62] mb-2">
              <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
              <span>Guest Experiences</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292326] tracking-tight">
              Words From Our Diners
            </h2>
          </div>

          {/* Google Maps Verified Score Card */}
          <div className="mt-6 md:mt-0 bg-white p-4 rounded-2xl border border-[#EAD5DC] shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#651F35] text-white flex flex-col items-center justify-center shrink-0">
              <span className="font-serif text-lg font-bold leading-none">4.8</span>
              <span className="text-[9px] uppercase tracking-wider text-[#F3C7D2]">Rating</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs font-semibold text-[#292326]">Google Maps Verified Rating</p>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#651F35] font-semibold hover:underline flex items-center gap-1 mt-0.5"
              >
                Read reviews on Google Maps <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl border border-[#EAD5DC] shadow-xs hover:border-[#651F35]/30 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(Math.floor(review.rating))].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{review.date}</span>
                </div>

                <div className="mb-4">
                  <MessageSquareQuote className="w-6 h-6 text-[#F3C7D2] mb-2" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{review.comment}"
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAD5DC] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#292326] flex items-center gap-1">
                    {review.author}
                    <CheckCircle className="w-3 h-3 text-emerald-600 inline" />
                  </h4>
                  <span className="text-[11px] text-slate-500">{review.authorLocation}</span>
                </div>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-[#C49A62]">
                  {review.occasion}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom invitation banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-600 mb-3">
            Have you dined with us at our Barauli, Robertsganj cafe?
          </p>
          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-[#651F35] text-[#651F35] text-xs font-bold hover:bg-[#651F35] hover:text-white transition-all shadow-xs"
          >
            <span>Write a Review on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
