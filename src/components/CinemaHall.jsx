// src/components/CinemaHall.jsx
import React, { useState } from 'react';
import './CinemaHall.css';

const ROWS = 5;
const SEATS_PER_ROW = 8;

const CinemaHall = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (row, seat) => {
    const seatId = `${row}-${seat}`;
    setSelectedSeats(prev =>
      prev.includes(seatId)
        ? prev.filter(s => s !== seatId)
        : [...prev, seatId]
    );
  };

  return (
    <div>
      <div className="cinema-grid">
        {[...Array(ROWS)].map((_, row) =>
          [...Array(SEATS_PER_ROW)].map((_, seat) => {
            const seatId = `${row}-${seat}`;
            const isSelected = selectedSeats.includes(seatId);

            return (
              <div
                key={seatId}
                className={`seat ${isSelected ? 'selected' : ''}`}
                onClick={() => toggleSeat(row, seat)}
              >
                {seat + 1}
              </div>
            );
          })
        )}
      </div>

      <div>
        <h3>Обрані місця:</h3>
        <p>{selectedSeats.join(', ') || "Немає вибраних місць"}</p>
      </div>
    </div>
  );
};

export default CinemaHall;
