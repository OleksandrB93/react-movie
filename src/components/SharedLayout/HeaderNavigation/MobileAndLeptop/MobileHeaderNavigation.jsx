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
import { useDispatch } from 'react-redux';
import { toggleSideBar } from 'redux/burger/sideBarSlice';

export const MobileHeaderNavigation = () => {
  const [navbar, setNavBar] = useState(0);
  const dispatch = useDispatch();

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
          <GiFilmProjector size={45} />
          <LogoLink to="/" onClick={() => dispatch(toggleSideBar())}>
            <p>Moviestate</p>
          </LogoLink>
          <HomeMovieBox>
            <PageLink
              navbar={navbar}
              to="/"
              onClick={() => dispatch(toggleSideBar())}
            >
              Home
            </PageLink>
            <PageLink
              navbar={navbar}
              to="/movies"
              onClick={() => dispatch(toggleSideBar())}
            >
              Movies
            </PageLink>
          </HomeMovieBox>
        </Nav>
      )}
    </div>
  );
};
