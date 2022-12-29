import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-content: center;
  padding-bottom: 7px;

  font-size: 25px;
  font-weight: 700;
  /* backdrop-filter: blur(0px); */
  background-color: ${props => (props.navbar ? '#00758f85' : '')};
  color: ${({ theme }) => theme.colors.clPrimary};
  transition: height 400ms ease-out;
  height: ${props => (props.navbar ? '35px' : '70px')};
  background-color: ${({ theme }) => theme.colors.bgPrimary};

  :after {
    content: '';
    width: 100%;
    position: absolute;
    bottom: 0px;
    border-bottom: ${props => (props.navbar ? '4px solid #00cefc85' : '')};
    transform: scaleX(1) ${props => (props.navbar ? 'scaleX(1)' : 'scaleX(0%)')};
    transition: transform 250ms ease-out;
  }
`;

export const HomeMovieBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  margin-top: 4px;
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  align-content: center;
  text-decoration: none;
  font-size: 25px;
  font-weight: 700;
  padding: 15px 15px;
  margin-top: 4px;
  margin-left: 30px;
  cursor: pointer;

  border-radius: 15px;
  color: inherit;
  background-color: ${({ theme }) => theme.colors.bgNav};
  transition: ${({ theme }) => theme.transition.tr};

  &.active {
    color: ${({ theme }) => theme.colors.clAccent};
    box-shadow: ${({ theme }) => theme.boxsh.boxsh};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${({ theme }) => theme.colors.clAccent};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.boxsh.boxsh};
  }
  svg {
    padding-bottom: 7px;
  }
`;

export const PageLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  padding: ${props => (props.navbar ? '4px 18px' : '15px 18px')};
  margin-right: 20px;

  /* border: 1px solid black; */
  border-radius: 15px;
  color: inherit;
  background-color: ${({ theme }) => theme.colors.bgNav};

  transition: ${({ theme }) => theme.transition.tr}, padding 300ms ease-in-out;

  &.active {
    color: ${({ theme }) => theme.colors.clAccent};
    box-shadow: ${({ theme }) => theme.boxsh.boxsh};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${({ theme }) => theme.colors.clAccent};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.boxsh.boxsh};
  }
`;

export const SwitsherTheme = styled.button`
  max-width: 50px;
  max-height: 23px;
  margin: 0 15px;

  background: ${({ theme }) => theme.colors.gradient};
  border: none;
  /* border: 1px solid ${({ theme }) => theme.colors.clPrimary}; */
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const SunIcon = styled.div`
  transform: ${props =>
    props.darkMode ? 'translateY(-700%)' : 'translateY(0%)'};
  transition: transform 300ms ease-in-out;
  display: flex;
  align-items: center;
`;

export const MoonIcon = styled.div`
  transform: ${props =>
    props.darkMode ? 'translateY(0%)' : 'translateY(700%)'};
  transition: transform 300ms ease-in-out;
  display: flex;
  align-items: center;
`;
