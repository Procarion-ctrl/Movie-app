// /src/pages/Booking.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CinemaHall from "../components/CinemaHall";
import { BookingService } from "../services/BookingService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Booking() {
  const { movieId } = useParams();
  const [bookedSeats, setBookedSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    const booked = BookingService.getBookedSeats(movieId);
    setBookedSeats(booked);
  }, [movieId]);

  const toggleSeat = (seatId) => {
    setSelectedSeats(prev =>
      prev.includes(seatId) ? prev.filter(s => s !== seatId) : [...prev, seatId]
    );
  };

  const validateForm = () => {
    const { name, email, phone } = form;
    if (!name || !email || !phone) {
      toast.error("Усі поля обов'язкові!");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Невірний формат електронної пошти!");
      return false;
    }
    return true;
  };

  const handleBooking = () => {
    if (!validateForm()) return;
    BookingService.saveBooking(movieId, selectedSeats, form);
    toast.success("Бронювання успішне!");
    setSelectedSeats([]);
    setBookedSeats(prev => [...prev, ...selectedSeats]);
  };

  return (
    <div>
      <h2>Бронювання місць</h2>
      <CinemaHall
        bookedSeats={bookedSeats}
        selectedSeats={selectedSeats}
        onSelect={toggleSeat}
      />
      <div className="form">
        <input
          placeholder="Ім'я"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="Телефон"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <button onClick={handleBooking}>Забронювати</button>
      </div>
      <ToastContainer />
    </div>
  );
}
