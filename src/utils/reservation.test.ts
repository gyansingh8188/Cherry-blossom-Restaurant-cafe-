import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateReservation,
  generateReservationReference,
  buildWhatsAppReservationUrl,
} from './reservation';

test('validateReservation returns invalid for empty data', () => {
  const result = validateReservation({});
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.guests);
  assert.ok(result.errors.date);
  assert.ok(result.errors.time);
});

test('validateReservation validates phone number format correctly', () => {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 2);
  const dateStr = futureDate.toISOString().split('T')[0];

  const validData = {
    fullName: 'Rahul Sharma',
    phone: '9876543210',
    guests: 4,
    date: dateStr,
    time: '19:30',
    seatingPreference: 'main-dining' as const,
  };

  const validRes = validateReservation(validData);
  assert.equal(validRes.isValid, true);
  assert.equal(Object.keys(validRes.errors).length, 0);

  // Invalid phone (too short)
  const invalidPhone = validateReservation({
    ...validData,
    phone: '12345',
  });
  assert.equal(invalidPhone.isValid, false);
  assert.ok(invalidPhone.errors.phone);
});

test('validateReservation rejects past dates', () => {
  const res = validateReservation({
    fullName: 'Ananya Verma',
    phone: '9876543210',
    guests: 2,
    date: '2020-01-01',
    time: '12:00',
    seatingPreference: 'cafe-corner',
  });
  assert.equal(res.isValid, false);
  assert.ok(res.errors.date);
});

test('generateReservationReference generates prefixed unique string', () => {
  const ref1 = generateReservationReference();
  const ref2 = generateReservationReference();
  assert.match(ref1, /^CB-/);
  assert.notEqual(ref1, ref2);
});

test('buildWhatsAppReservationUrl constructs well-formed wa.me url', () => {
  const url = buildWhatsAppReservationUrl({
    id: 'CB-TEST99',
    fullName: 'Vikram Singh',
    phone: '9876543210',
    guests: 6,
    date: '2026-12-25',
    time: '20:00',
    seatingPreference: 'celebration',
    specialRequests: 'Window table please',
  });
  assert.ok(url.startsWith('https://wa.me/'));
  assert.ok(url.includes('CB-TEST99'));
  assert.ok(url.includes('Vikram'));
});
