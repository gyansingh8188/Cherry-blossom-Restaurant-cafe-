import { ReservationRequest } from '../types';

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateReservation(data: Partial<ReservationRequest>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  // Indian phone number validation (10 digits, optional +91 prefix)
  const phoneClean = (data.phone || '').replace(/[\s\-\(\)\+]/g, '');
  if (!phoneClean) {
    errors.phone = 'Phone number is required for booking confirmation.';
  } else if (!/^(91)?[6-9]\d{9}$/.test(phoneClean)) {
    errors.phone = 'Please enter a valid 10-digit mobile number.';
  }

  if (!data.guests || data.guests < 1 || data.guests > 30) {
    errors.guests = 'Please specify guests between 1 and 30.';
  }

  if (!data.date) {
    errors.date = 'Please select a reservation date.';
  } else {
    // Check that selected date is not in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selected = new Date(data.date);
    if (isNaN(selected.getTime()) || selected < today) {
      errors.date = 'Reservation date cannot be in the past.';
    }
  }

  if (!data.time) {
    errors.time = 'Please select a preferred dining time.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function generateReservationReference(): string {
  const prefix = 'CB';
  const timestamp = Date.now().toString(36).toUpperCase().slice(-4);
  const random = Math.floor(100 + Math.random() * 900);
  return `${prefix}-${timestamp}${random}`;
}

export function buildWhatsAppReservationUrl(
  reservation: ReservationRequest & { id?: string },
  restaurantPhone: string = '918009922000'
): string {
  const ref = reservation.id || generateReservationReference();
  const text =
    `Hello Cherry Blossom Restaurant & Cafe! 🌸\n` +
    `I would like to request a table reservation.\n\n` +
    `*Booking Ref:* ${ref}\n` +
    `*Name:* ${reservation.fullName}\n` +
    `*Phone:* ${reservation.phone}\n` +
    `*Guests:* ${reservation.guests} Guests\n` +
    `*Date:* ${reservation.date}\n` +
    `*Time:* ${reservation.time}\n` +
    `*Seating:* ${reservation.seatingPreference}\n` +
    (reservation.specialRequests ? `*Special Request:* ${reservation.specialRequests}\n` : '') +
    `\nPlease let me know if this table can be confirmed. Thank you!`;

  return `https://wa.me/${restaurantPhone}?text=${encodeURIComponent(text)}`;
}

export function buildWhatsAppOrderUrl(
  orderItems: { name: string; quantity: number; price: number }[],
  total: number,
  restaurantPhone: string = '918009922000'
): string {
  let itemList = '';
  orderItems.forEach((item, index) => {
    itemList += `${index + 1}. ${item.name} x ${item.quantity} - ₹${item.price * item.quantity}\n`;
  });

  const text =
    `Hello Cherry Blossom Restaurant & Cafe! 🌸\n` +
    `I would like to place an order from your menu:\n\n` +
    `${itemList}\n` +
    `*Estimated Total:* ₹${total}\n\n` +
    `Please confirm preparation time and delivery/takeaway options. Thank you!`;

  return `https://wa.me/${restaurantPhone}?text=${encodeURIComponent(text)}`;
}
