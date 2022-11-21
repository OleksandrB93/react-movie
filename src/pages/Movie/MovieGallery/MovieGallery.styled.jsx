import styled from "@emotion/styled";

export const MovieList = styled.ul`
  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-content: start;
  flex-wrap: wrap;
`;

export const MovieItem = styled.li`
  position: relative;
  width: 250px;
  height: 375px;

  margin: 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: box-shadow 200ms ease-in-out, transform 400ms ease-in-out;
  box-shadow: ${({ theme }) => theme.boxsh.boxsh};

  :hover,
  :focus-visible {
    transform: scale(1.02);
    box-shadow: ${({ theme }) => theme.boxsh.boxshpr};
  }

  :hover p {
    opacity: 1;
    transform: translateY(0%) scale(1);
  }
`;

export const MovieImg = styled.img`
  max-width: 250px;
  max-height: 375px;

  border-radius: 5px;
  object-fit: contain;
`;

export const MovieTitle = styled.p`
  transform: translateY(50%) scale(0.8);
  transition: opacity 100ms ease-in-out, transform 100ms ease-in-out;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;

  width: 94%;
  height: 45px;
  position: absolute;
  bottom: 0;
  border-radius: 5px;
  border: 1px solid #14c6b3;
  font-size: 20px;
  font-weight: 700;
  color: black;
  background-color: #14c6b4a8;
`;
