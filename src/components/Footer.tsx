import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#292326] text-[#FFF9F4] pt-16 pb-12 border-t-4 border-[#651F35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#651F35] flex items-center justify-center text-[#F3C7D2]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="stroke-current stroke-2">
                  <circle cx="12" cy="12" r="3" fill="#F3C7D2" />
                  <path d="M12 9C12 6 10 4 12 2C14 4 12 6 12 9Z" fill="#F3C7D2" />
                  <path d="M15 12C18 12 20 10 22 12C20 14 18 12 15 12Z" fill="#F3C7D2" />
                  <path d="M12 15C12 18 14 20 12 22C10 20 12 18 12 15Z" fill="#F3C7D2" />
                  <path d="M9 12C6 12 4 14 2 12C4 10 6 12 9 12Z" fill="#F3C7D2" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white block">
                  Cherry Blossom
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#C49A62] font-semibold">
                  Restaurant &amp; Cafe
                </span>
              </div>
            </div>

            <p className="text-xs text-[#FFF9F4]/70 leading-relaxed max-w-sm mb-6">
              "Where Every Bite Blooms with Happiness." An elevated restaurant and cafe destination in
              Robertsganj, bringing together fine multi-cuisine delicacies, cozy cafe hospitality, and serene aesthetics.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-[#651F35] hover:bg-[#832644] text-xs font-semibold text-white transition-colors flex items-center gap-1.5"
              >
                <span>Google Maps Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={RESTAURANT_INFO.onlineOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg border border-[#C49A62]/40 hover:border-[#C49A62] text-xs font-semibold text-[#F3C7D2] transition-colors flex items-center gap-1.5"
              >
                <span>Order on Motina</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#C49A62] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#FFF9F4]/75">
              <li>
                <a href="#home" className="hover:text-[#F3C7D2] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F3C7D2] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#F3C7D2] transition-colors">
                  Food &amp; Drinks Menu
                </a>
              </li>
              <li>
                <a href="#specials" className="hover:text-[#F3C7D2] transition-colors">
                  Chef's Specials
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#F3C7D2] transition-colors">
                  Ambience &amp; Photos
                </a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-[#F3C7D2] transition-colors">
                  Table Reservations
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#F3C7D2] transition-colors">
                  Location &amp; Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#C49A62] mb-4">
              Hours of Operation
            </h4>
            <div className="space-y-3 text-xs text-[#FFF9F4]/75">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F3C7D2] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-semibold">Monday – Sunday</span>
                  <span>10:30 AM – 10:30 PM</span>
                  <span className="block text-[11px] text-[#C49A62] mt-0.5">
                    Open all public holidays
                  </span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-white/60">
                Kitchen closes at 10:15 PM for dining &amp; takeout.
              </div>
            </div>
          </div>

          {/* Location & Contacts */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#C49A62] mb-4">
              Contact &amp; Address
            </h4>
            <div className="space-y-3 text-xs text-[#FFF9F4]/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F3C7D2] shrink-0 mt-0.5" />
                <span>
                  1st Floor, Jasraj Kripa Building,
                  <br />
                  Near Nagar Sarkari Bank, Barauli,
                  <br />
                  Robertsganj, Sonbhadra, UP 231216
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F3C7D2] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-white transition-colors">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F3C7D2] shrink-0" />
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:text-white transition-colors">
                  {RESTAURANT_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFF9F4]/50 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Cherry Blossom Restaurant &amp; Cafe. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[#F3C7D2]/80">Robertsganj, Sonbhadra, UP</span>
            <span>·</span>
            <a href="#home" className="hover:text-white transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
