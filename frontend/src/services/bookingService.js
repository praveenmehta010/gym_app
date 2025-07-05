import axios from "./api";

const BOOKING_BASE = "/bookings";

// Fetch available slots of a trainer
export const getTrainerSlots = (trainerId) =>
  axios.get(`${BOOKING_BASE}/slots/${trainerId}`);

// Book a slot
export const bookSlot = (trainerId, slotData) =>
  axios.post(`${BOOKING_BASE}/slots/${trainerId}`, slotData);

// Fetch user’s bookings
export const getUserBookings = (userId) =>
  axios.get(`${BOOKING_BASE}/user/${userId}`);

// Cancel a booking
export const cancelBooking = (bookingId) =>
  axios.delete(`${BOOKING_BASE}/${bookingId}`);
