import './App.styled.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'constants/theme';
import { useSelector } from 'react-redux';
import { selectDarkMode } from 'redux/themeMode/selectors';
import { lightMode } from 'constants/lightMode';
import { AppContainer } from './App.styled.jsx';
import { useAuth } from './hooks/useAuth.js';
import RgLogBox from './RegLogBox/RgLogBox.jsx';

const Home = lazy(() => import('pages/Home/Home'));
const Movie = lazy(() => import('pages/Movie/MovieQuery/MovieQuery'));
const MovieDetails = lazy(() => import('./MovieDetails/MoiveDetails'));
const MovieCast = lazy(() => import('./MovieDetails/MovieCast/MovieCast'));
const MovieReviews = lazy(() =>
  import('./MovieDetails/MovieReviews/MovieReviews')
);

const App = () => {
  // const { isAuth } = useAuth();
  const darkMode = useSelector(selectDarkMode);
  return (
    <ThemeProvider theme={darkMode ? theme : lightMode}>
      {/* {isAuth ? ( */}
        <AppContainer>
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
        </AppContainer>
      {/* ) : ( */}
        {/* <RgLogBox /> */}
      {/* )} */}
    </ThemeProvider>
  );
};

export default App;
