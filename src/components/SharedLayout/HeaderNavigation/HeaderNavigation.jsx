import {
  Nav,
  HomeMovieBox,
  LogoLink,
  PageLink,
} from "./HeaderNavigation.styled";
import { GiFilmProjector } from "react-icons/gi";

export const HeaderNavigation = () => {
  return (
    <Nav>
      <LogoLink to="/">
        <GiFilmProjector />
        <p>Moviestate</p>
      </LogoLink>
      <HomeMovieBox>
        <PageLink to="/">Home</PageLink>
        <PageLink to="/movies">Movies</PageLink>
      </HomeMovieBox>
    </Nav>
  );
};
