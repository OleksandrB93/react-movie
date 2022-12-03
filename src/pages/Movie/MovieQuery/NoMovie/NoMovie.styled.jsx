import styled from "@emotion/styled";

export const NoMovieContnet = styled.p`
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  text-align: center;
  font-weight: bold;
  font-size: 35px;
  color: ${({ theme }) => theme.colors.clAccent};
  margin: 20px 0 30px;

  padding: 7px 15px;
  border-radius: 15px;
  text-shadow: 2px 2px 3px #000000;
`;

