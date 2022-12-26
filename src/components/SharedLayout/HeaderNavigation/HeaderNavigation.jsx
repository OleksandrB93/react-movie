import {
  Nav,
  HomeMovieBox,
  LogoLink,
  PageLink,
  SwitsherTheme,
  SunIcon,
  MoonIcon,
} from './HeaderNavigation.styled';
import { GiFilmProjector } from 'react-icons/gi';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'redux/themeSlice';
import { FaMoon } from 'react-icons/fa';
import { RiSunFill } from 'react-icons/ri';
import { selectDarkMode } from 'redux/selectors';
import { AuthProvider } from 'auth';

export const HeaderNavigation = () => {
  const [navbar, setNavBar] = useState(0);

  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);
  const changeNavbar = () => {
    if (window.scrollY >= 70) {
      setNavBar(1);
    } else {
      setNavBar(0);
    }
  };

  window.addEventListener('scroll', changeNavbar);
  return (
    <Nav navbar={navbar}>
      <LogoLink to="/">
        <GiFilmProjector />
        <p>Moviestate</p>
      </LogoLink>
      <HomeMovieBox>
        
      <AuthProvider/>

        <SwitsherTheme type="button" onClick={() => dispatch(toggleTheme())}>
          <SunIcon darkMode={darkMode}>
            <RiSunFill size={20} color={'#ffaa00'} />
          </SunIcon>
          <MoonIcon darkMode={darkMode}>
            <FaMoon size={15} color={'#ffff89'} />
          </MoonIcon>
        </SwitsherTheme>
        <PageLink navbar={navbar} to="/">
          Home
        </PageLink>
        <PageLink navbar={navbar} to="/movies">
          Movies
        </PageLink>
      </HomeMovieBox>
    </Nav>
  );
};
