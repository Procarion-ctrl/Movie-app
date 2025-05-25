// src/pages/Home.jsx
import React from 'react';
import { movies } from '../data/movies';
import MovieList from '../components/MovieList';

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Список фільмів</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
