// /src/services/BookingService.js

const STORAGE_KEY = "movieBookings";

export const BookingService = {
  saveBooking(movieId, seats, userData) {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    existing[movieId] = [...(existing[movieId] || []), ...seats.map(seat => ({ seat, ...userData }))];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  },

  getBookedSeats(movieId) {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    return (data[movieId] || []).map(b => b.seat);
  }
};
