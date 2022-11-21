import styled from "@emotion/styled";
import { URL_BACKDROP } from "constants/constants";

export const MovieInfoBox = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;

  background-image: linear-gradient(
      to right,
      rgba(58, 58, 58, 0.5),
      rgba(47, 48, 58, 0.5)
    ),
    ${(props) => `url(${URL_BACKDROP}${props.backdrop.backdrop_path})`};

  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  object-fit: cover;
  box-shadow: inset 0px 0px 523px 50px rgba(110, 109, 109, 0.35);
`;

export const Poster = styled.img`
  border-radius: 5px;
  margin-bottom: 20px;
  margin-left: 40px;
  box-shadow: rgba(0, 0, 0, 0.72) 0px 5px 15px;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 700;

  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
  backdrop-filter: invert(20%);
  color: ${({ theme }) => theme.colors.clAccent};
`;

export const Score = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding:5px 20px;

  backdrop-filter: invert(20%);
  color: #e3c373;
`;

export const OverviewTitle = styled.p`
  font-size: 25px;
  font-weight: 700;
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
  backdrop-filter: invert(20%);
  color: ${({ theme }) => theme.colors.bgPrimary};
`;

export const OverviewContent = styled.p`
  font-size: 20px;
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;

  backdrop-filter: invert(20%);
  color: ${({ theme }) => theme.colors.bgPrimary};
`;

export const GenresTitle = styled.p`
  font-size: 25px;
  font-weight: 700;
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
  backdrop-filter: invert(20%);
  color: ${({ theme }) => theme.colors.bgPrimary};
`;

export const GenresContent = styled.p`
  font-size: 20px;
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
  backdrop-filter: invert(20%);
  color: ${({ theme }) => theme.colors.bgPrimary};
`;
