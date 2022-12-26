import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BackDiv = styled.div`
  margin-left: 45px;

  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-content: center;

  &.active {
    color: ${({ theme }) => theme.colors.clAccent};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${({ theme }) => theme.colors.clAccent};
    /* transform: translateY(-1px); */
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: box-shadow 250ms ease-out;
  }
`;

export const GoBack = styled(NavLink)`
  position: absolute;
  z-index: 200;
  margin-top: 23px;
  padding: 0;
  color: ${({ theme }) => theme.colors.clPrimary};
  border-radius: 10px;
  
`;

export const MDetContainer = styled.div`
  padding-top: 76px;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
  margin-top: 10px;

  color: ${({ theme }) => theme.colors.clPrimary};
`;

export const NavlinkComtainer = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const CastReviewsList = styled.ul`
  padding-bottom: 15px;
  display: flex;
  justify-content: center;

  list-style: none;
`;

export const CastReviewsItem = styled(NavLink)`
  padding: 7px 10px;
  margin-right: 17px;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;

  color: ${({ theme }) => theme.colors.clPrimary};
  border-radius: 10px;
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
