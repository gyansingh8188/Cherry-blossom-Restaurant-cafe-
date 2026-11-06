import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  Users,
  User,
  Phone,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Send,
  History,
} from 'lucide-react';
import { ReservationRecord, ReservationRequest } from '../types';
import {
  validateReservation,
  generateReservationReference,
  buildWhatsAppReservationUrl,
} from '../utils/reservation';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationRequest>({
    fullName: '',
    phone: '',
    guests: 2,
    date: '',
    time: '19:30',
    seatingPreference: 'main-dining',
    specialRequests: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submittedBooking, setSubmittedBooking] = useState<ReservationRecord | null>(null);
  const [recentBookings, setRecentBookings] = useState<ReservationRecord[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Load past bookings from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('cb_reservations');
      if (stored) {
        setRecentBookings(JSON.parse(stored));
      }
    } catch {
      // Local storage unavailable
    }
  }, []);

  // Set min date to today's date in YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0];

  const timeSlots = [
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
    '06:30 PM',
    '07:30 PM',
    '08:30 PM',
    '09:30 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateReservation(formData);

    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    setFormErrors({});

    const newBooking: ReservationRecord = {
      ...formData,
      id: generateReservationReference(),
      createdAt: new Date().toISOString(),
      status: 'pending-confirmation',
    };

    setSubmittedBooking(newBooking);

    // Save to localStorage
    const updated = [newBooking, ...recentBookings.slice(0, 4)];
    setRecentBookings(updated);
    try {
      localStorage.setItem('cb_reservations', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleResetForm = () => {
    setSubmittedBooking(null);
    setFormData({
      fullName: '',
      phone: '',
      guests: 2,
      date: '',
      time: '19:30',
      seatingPreference: 'main-dining',
      specialRequests: '',
    });
  };

  return (
    <section id="reservation" className="py-20 lg:py-28 bg-[#FFF9F4] relative border-t border-[#EAD5DC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A62] mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Table Reservations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292326] tracking-tight mb-4">
            Reserve Your Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Planning a romantic dinner, family celebration, or an afternoon cafe meetup in Robertsganj?
            Reserve your table in advance. We hold tables for 15 minutes past reservation time.
          </p>
        </div>

        {/* Main Reservation Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#EAD5DC] shadow-sm overflow-hidden">
          {submittedBooking ? (
            /* Confirmation Pending View */
            <div className="p-8 sm:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6 border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-[#C49A62] block mb-1">
                Request Received
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292326] mb-2">
                Booking Reference: <span className="text-[#651F35]">{submittedBooking.id}</span>
              </h3>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium my-3">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                Status: Pending Confirmation by Restaurant
              </div>

              <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mb-8 leading-relaxed">
                Thank you, <strong>{submittedBooking.fullName}</strong>. We have logged your reservation
                request for <strong>{submittedBooking.guests} guests</strong> on{' '}
                <strong>{submittedBooking.date}</strong> at <strong>{submittedBooking.time}</strong>.
                Our team will verify availability.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                <a
                  href={buildWhatsAppReservationUrl(submittedBooking, RESTAURANT_INFO.whatsappNumber)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Confirm via WhatsApp Instant
                </a>

                <button
                  onClick={handleResetForm}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl border border-[#EAD5DC] text-slate-700 hover:bg-slate-50 font-semibold text-xs tracking-wider transition-colors"
                >
                  Make Another Booking
                </button>
              </div>

              <p className="text-[11px] text-slate-400 mt-6">
                Restaurant Hotline:{' '}
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="underline text-slate-600">
                  {RESTAURANT_INFO.phone}
                </a>
              </p>
            </div>
          ) : (
            /* Reservation Form View */
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Chandra"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF9F4] border text-sm text-[#292326] placeholder:text-slate-400 focus:outline-hidden focus:ring-1 ${
                        formErrors.fullName
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500'
                          : 'border-[#EAD5DC] focus:border-[#651F35] focus:ring-[#651F35]'
                      }`}
                    />
                  </div>
                  {formErrors.fullName && (
                    <span className="text-[11px] text-rose-600 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 inline" /> {formErrors.fullName}
                    </span>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Mobile Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF9F4] border text-sm text-[#292326] placeholder:text-slate-400 focus:outline-hidden focus:ring-1 ${
                        formErrors.phone
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500'
                          : 'border-[#EAD5DC] focus:border-[#651F35] focus:ring-[#651F35]'
                      }`}
                    />
                  </div>
                  {formErrors.phone && (
                    <span className="text-[11px] text-rose-600 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 inline" /> {formErrors.phone}
                    </span>
                  )}
                </div>

                {/* Number of Guests */}
                <div>
                  <label htmlFor="guests" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Number of Guests <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      id="guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF9F4] border border-[#EAD5DC] text-sm text-[#292326] focus:outline-hidden focus:border-[#651F35] focus:ring-1 focus:ring-[#651F35]"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest (Solo)' : num === 2 ? 'Guests (Couple)' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                  {formErrors.guests && (
                    <span className="text-[11px] text-rose-600 mt-1 block">{formErrors.guests}</span>
                  )}
                </div>

                {/* Date */}
                <div>
                  <label htmlFor="date" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Preferred Date <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="date"
                      type="date"
                      min={todayStr}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF9F4] border text-sm text-[#292326] focus:outline-hidden focus:ring-1 ${
                        formErrors.date
                          ? 'border-rose-400 focus:border-rose-500'
                          : 'border-[#EAD5DC] focus:border-[#651F35] focus:ring-[#651F35]'
                      }`}
                    />
                  </div>
                  {formErrors.date && (
                    <span className="text-[11px] text-rose-600 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 inline" /> {formErrors.date}
                    </span>
                  )}
                </div>

                {/* Preferred Time */}
                <div>
                  <label htmlFor="time" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Dining Time Slot <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      id="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF9F4] border border-[#EAD5DC] text-sm text-[#292326] focus:outline-hidden focus:border-[#651F35] focus:ring-1 focus:ring-[#651F35]"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                  {formErrors.time && (
                    <span className="text-[11px] text-rose-600 mt-1 block">{formErrors.time}</span>
                  )}
                </div>

                {/* Seating Preference */}
                <div>
                  <label htmlFor="seating" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Seating Area Preference
                  </label>
                  <select
                    id="seating"
                    value={formData.seatingPreference}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        seatingPreference: e.target.value as any,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF9F4] border border-[#EAD5DC] text-sm text-[#292326] focus:outline-hidden focus:border-[#651F35] focus:ring-1 focus:ring-[#651F35]"
                  >
                    <option value="main-dining">Main Dining Hall (Family &amp; Groups)</option>
                    <option value="cafe-corner">Cozy Cafe Nook (Couples &amp; Quiet)</option>
                    <option value="family-lounge">Family Lounge Area</option>
                    <option value="celebration">Celebration / Birthday Arrangement</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div className="mb-8">
                <label htmlFor="requests" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Special Requests / Dietary Notes (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <textarea
                    id="requests"
                    rows={2}
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder="e.g. Birthday cake preparation, high chair needed, less spicy preference..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF9F4] border border-[#EAD5DC] text-sm text-[#292326] placeholder:text-slate-400 focus:outline-hidden focus:border-[#651F35] focus:ring-1 focus:ring-[#651F35]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#EAD5DC]">
                <p className="text-xs text-slate-500">
                  No advance payment needed. Instant WhatsApp confirmation available upon request.
                </p>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#651F35] text-[#FFF9F4] font-semibold text-xs uppercase tracking-wider shadow-md hover:bg-[#4E1729] active:scale-95 transition-all"
                >
                  Reserve Your Table
                </button>
              </div>
            </form>
          )}

          {/* Past Bookings Accordion */}
          {recentBookings.length > 0 && !submittedBooking && (
            <div className="bg-[#FFF9F4] px-6 py-4 border-t border-[#EAD5DC]">
              <button
                type="button"
                onClick={() => setShowHistory(!showHistory)}
                className="text-xs font-semibold text-[#651F35] hover:underline flex items-center gap-1.5"
              >
                <History className="w-3.5 h-3.5" />
                {showHistory ? 'Hide Recent Reservation History' : 'View Your Recent Reservations'} (
                {recentBookings.length})
              </button>

              {showHistory && (
                <div className="mt-4 space-y-2">
                  {recentBookings.map((b) => (
                    <div
                      key={b.id}
                      className="p-3 bg-white rounded-xl border border-[#EAD5DC] flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="font-bold text-[#651F35] mr-2">{b.id}</span>
                        <span className="text-slate-700 font-medium">{b.fullName}</span>
                        <span className="text-slate-400 mx-1">·</span>
                        <span className="text-slate-500">
                          {b.guests} guests on {b.date} at {b.time}
                        </span>
                      </div>
                      <a
                        href={buildWhatsAppReservationUrl(b, RESTAURANT_INFO.whatsappNumber)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:underline font-semibold"
                      >
                        WhatsApp Staff ↗
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
