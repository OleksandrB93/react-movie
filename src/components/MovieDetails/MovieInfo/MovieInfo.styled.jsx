import styled from '@emotion/styled';
import { URL_BACKDROP } from 'constants/constants';

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
    ${props => `url(${URL_BACKDROP}${props.backdrop.backdrop_path})`};

  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  object-fit: cover;
  box-shadow: inset 0px 0px 523px 50px rgba(110, 109, 109, 0.35);
`;

export const Poster = styled.img`
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.72) 0px 5px 15px;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 700;

  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
  backdrop-filter: invert(10%);
  color: ${({ theme }) => theme.colors.movieTitle};

`;

export const Score = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 5px 20px;
  padding-bottom: 10px;

  color: ${({ theme }) => theme.colors.clPrimary};
`;

export const OverviewTitle = styled.p`
  font-size: 25px;
  font-weight: 700;
  text-decoration-line: underline;

  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
  color: ${({ theme }) => theme.colors.bgPrimary};
`;

export const OverviewContent = styled.p`
  font-size: 18px;
  font-weight: 700;

  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;

  color: ${({ theme }) => theme.colors.bgPrimary};
`;

export const GenresTitle = styled.p`
  font-size: 25px;
  font-weight: 700;
  text-decoration-line: underline ;

  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
  color: ${({ theme }) => theme.colors.bgPrimary};
`;

export const GenresContent = styled.p`
  font-size: 18px;
  font-weight: 700;

  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
  color: ${({ theme }) => theme.colors.bgPrimary};
`;

export const PosterandBtnContainer = styled.div`
  position: relative;
  margin-left: 40px;
  width: 300px;
`;

export const PlayBtnContainer = styled.div`
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%);
`;

export const LogoContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: #ffffff3e;
  backdrop-filter: blur(5px);
`;
export const LogoItem = styled.div`
  height: auto;
  padding: 5px 5px;
  display: flex;
  justify-content: center;
`;

export const GenerContainer = styled.div`
  mix-blend-mode: hard-light;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.3),
    0px -2px 5px rgba(255, 255, 255, 0.3);
  backdrop-filter: invert(10%);
  letter-spacing: 0.5px;
`;
