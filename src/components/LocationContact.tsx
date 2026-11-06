import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Mail, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationContact: React.FC = () => {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#FFF9F4] relative border-t border-[#EAD5DC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A62] mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us in Sonbhadra</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292326] tracking-tight mb-4">
            Location &amp; Hours
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Conveniently situated in Barauli, Robertsganj on the 1st Floor of Jasraj Kripa Building.
            We look forward to serving you with warmth and elegance.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Contact Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border border-[#EAD5DC] shadow-xs">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#651F35] mb-2">
                Cherry Blossom Restaurant &amp; Cafe
              </h3>
              <p className="text-xs text-[#C49A62] font-semibold uppercase tracking-wider mb-6">
                Fine Dining · Specialty Cafe · Family Lounge
              </p>

              {/* Address Block */}
              <div className="space-y-6">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#651F35]/10 text-[#651F35] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Address
                    </h4>
                    <p className="text-sm font-medium text-[#292326] leading-relaxed">
                      1st Floor, Jasraj Kripa Building,
                      <br />
                      Near Nagar Sarkari Bank, Barauli,
                      <br />
                      Robertsganj, Sonbhadra,
                      <br />
                      Uttar Pradesh 231216, India
                    </p>
                  </div>
                </div>

                {/* Hours Block */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#C49A62]/15 text-[#C49A62] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Business Hours
                    </h4>
                    <p className="text-sm font-semibold text-[#292326]">
                      Monday – Sunday (All 7 Days)
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">10:30 AM – 10:30 PM</p>
                  </div>
                </div>

                {/* Telephone & WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Reservations &amp; Enquiries
                    </h4>
                    <a
                      href={`tel:${RESTAURANT_INFO.phone}`}
                      className="text-sm font-semibold text-[#651F35] hover:underline block"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                    <span className="text-xs text-slate-500">Available during operating hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-8 border-t border-[#EAD5DC] mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-[#651F35] text-[#FFF9F4] font-semibold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 hover:bg-[#4E1729] transition-colors shadow-xs"
              >
                <Navigation className="w-4 h-4 text-[#F3C7D2]" />
                Get Directions
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Cherry Blossom Restaurant! I have an enquiry.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl border border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-semibold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right: Embedded Interactive Map Container */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#EAD5DC] shadow-xs bg-slate-100 flex flex-col min-h-[420px]">
            <div className="bg-white p-3 px-5 border-b border-[#EAD5DC] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-4 h-4 text-[#651F35]" />
                <span className="font-semibold">Robertsganj, Sonbhadra · UP 231216</span>
              </div>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#651F35] font-semibold hover:underline flex items-center gap-1"
              >
                Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex-1 w-full h-full relative">
              <iframe
                title="Cherry Blossom Restaurant and Cafe Location"
                src="https://maps.google.com/maps?q=Barauli,+Robertsganj,+Sonbhadra,+Uttar+Pradesh+231216&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
