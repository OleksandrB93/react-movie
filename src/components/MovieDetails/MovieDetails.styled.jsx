import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const BackDiv = styled.div`
  padding-left: 45px;

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

export const GoBack = styled(NavLink)`
  color: ${({ theme }) => theme.colors.clPrimary};
  border-radius: 10px;
  transition: ${({ theme }) => theme.transition.tr};
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
