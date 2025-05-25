// src/pages/Booking.jsx
import { useParams } from 'react-router-dom';
import { movies } from '../data/movies';
import CinemaHall from '../components/CinemaHall';

const Booking = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  return (
    <div>
      <h2>Бронювання: {movie?.title}</h2>
      <CinemaHall />
    </div>
  );
};

export default Booking;
