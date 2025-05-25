// /src/components/CinemaHall.jsx
import React from "react";
import "./CinemaHall.css";

const rows = 5;
const seatsPerRow = 8;

export default function CinemaHall({ bookedSeats = [], selectedSeats, onSelect }) {
  return (
    <div className="cinema-hall">
      {Array.from({ length: rows }).map((_, rowIdx) => (
        <div key={rowIdx} className="row">
          {Array.from({ length: seatsPerRow }).map((_, seatIdx) => {
            const seatId = `${rowIdx + 1}-${seatIdx + 1}`;
            const isBooked = bookedSeats.includes(seatId);
            const isSelected = selectedSeats.includes(seatId);

            return (
              <button
                key={seatId}
                className={`seat ${isBooked ? "booked" : isSelected ? "selected" : ""}`}
                disabled={isBooked}
                onClick={() => onSelect(seatId)}
              >
                {seatId}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
