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
  padding-bottom: 10px;

  font-size: 25px;
  font-weight: 700;
  backdrop-filter: blur(3px);
  background-color: #0148583a;
  color: ${({ theme }) => theme.colors.clPrimary};
  transition: height 300ms ease-in-out;
  height: ${props => (props.navBar ? '50px' : '70px')};
`;

export const HomeMovieBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 25px;
  font-weight: 700;
  padding: 15px 15px;
  margin-left: 30px;

  border-radius: 15px;
  color: inherit;
  background-color: #0000006a;
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
`;

export const PageLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  padding: ${props => (props.navBar ? '10px 18px' : '18px 18px')};
  margin-right: 20px;

  /* border: 1px solid black; */
  border-radius: 15px;
  color: inherit;
  background-color: #0000006a;
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
