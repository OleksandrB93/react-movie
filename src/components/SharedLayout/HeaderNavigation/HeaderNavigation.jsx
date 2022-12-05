import {
  Nav,
  HomeMovieBox,
  LogoLink,
  PageLink,
} from './HeaderNavigation.styled';
import { GiFilmProjector } from 'react-icons/gi';
import { useState } from 'react';

export const HeaderNavigation = () => {
  const [navBar, setNavBar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 100) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener('scroll', changeNavbar);
  return (
    <Nav navBar={navBar}>
      <LogoLink to="/">
        <GiFilmProjector />
        <p>Moviestate</p>
      </LogoLink>
      <HomeMovieBox>
        <PageLink navBar={navBar} to="/">
          Home
        </PageLink>
        <PageLink navBar={navBar} to="/movies">
          Movies
        </PageLink>
      </HomeMovieBox>
    </Nav>
  );
};
