import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
const Movie = lazy(() => import('pages/Movie/MovieQuery/MovieQuery'));
const MovieDetails = lazy(() => import('./MovieDetails/MoiveDetails'));
const MovieCast = lazy(() => import('./MovieDetails/MovieCast/MovieCast'));
const MovieReviews = lazy(() =>
  import('./MovieDetails/MovieReviews/MovieReviews')
);

const App = () => (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movie />} />
      <Route path="movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
);

export default App;
