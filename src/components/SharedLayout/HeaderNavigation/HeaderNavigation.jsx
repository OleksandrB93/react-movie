import {
  Nav,
  HomeMovieBox,
  LogoLink,
  PageLink,
} from './HeaderNavigation.styled';
import { GiFilmProjector } from 'react-icons/gi';
import { useState } from 'react';
import Switch from 'components/SwitcherTheme/Switch';
import { SwitchContainer } from 'components/SwitcherTheme/SwitchTheme.styled';
// import { useDispatch, useSelector } from 'react-redux';

export const HeaderNavigation = () => {
  const [navbar, setNavBar] = useState(0);

  // const dispatch = useDispatch();
  // const themeMode = useSelector();

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
      <SwitchContainer>
        {/* <button type="button" onClick={dispatch()}>
          btn
        </button> */}
        <Switch />
      </SwitchContainer>
      <HomeMovieBox>
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