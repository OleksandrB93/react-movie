import {
  Nav,
  HomeMovieBox,
  LogoLink,
  PageLink,
} from './MobileHeaderNavigation.styled';
import { GiFilmProjector } from 'react-icons/gi';
import { useState } from 'react';

import { selectIsSideBar } from 'redux/burger/selectors';
import { useSelector } from 'react-redux';

export const MobileHeaderNavigation = () => {
  const [navbar, setNavBar] = useState(0);


  const isSideBar = useSelector(selectIsSideBar);

  const changeNavbar = () => {
    if (window.scrollY >= 70) {
      setNavBar(1);
    } else {
      setNavBar(0);
    }
  };

  window.addEventListener('scroll', changeNavbar);
  return (
    <div>
      {isSideBar && (
        <Nav navbar={navbar}>
          <LogoLink to="/">
            <GiFilmProjector />
            <p>Moviestate</p>
          </LogoLink>
          <HomeMovieBox>
            <PageLink navbar={navbar} to="/">
              Home
            </PageLink>
            <PageLink navbar={navbar} to="/movies">
              Movies
            </PageLink>
          </HomeMovieBox>
        </Nav>
      )}
    </div>
  );
};
