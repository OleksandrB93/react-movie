import styled from '@emotion/styled';

export const PlayBtn = styled.button`
  padding: 10px 25px;
  border-radius: 10px;
  border: none;
  background-color: #ff0000c0;
  color: #ffffffd6;
  cursor: pointer;

  transition: all 300ms ease-in-out;
  
  :hover {
    background-color: #ff0000;
    box-shadow: rgba(255, 0, 0, 0.9) 0px 45px 80px 20px;
    color: #ffffff;
    transform: translateY(-3px);
  }
`;
