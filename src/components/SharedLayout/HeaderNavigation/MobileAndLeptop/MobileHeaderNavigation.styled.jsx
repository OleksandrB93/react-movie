import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${props => (props.navbar ? '0' : '100vh')};
  width: 100%;

  padding-bottom: 7px;
  padding-top: 30px;
  border-right: 2px solid ${({ theme }) => theme.colors.clPrimary};
  font-size: 25px;
  font-weight: 700;
  background-color: ${props => (props.navbar ? '#00758f85' : '')};
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.clPrimary};
  transition: height 400ms ease-out;
`;


export const PageLink = styled(NavLink)`
  width: 210px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 15px 15px;
  margin: 10px 5px;

  text-decoration: none;
  font-size: 25px;
  font-weight: 700;
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
