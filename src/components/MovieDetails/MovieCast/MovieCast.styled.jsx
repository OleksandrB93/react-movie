import styled from "@emotion/styled";

export const MovieCastBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  
`;

export const CastItem = styled.li`
  width: 200px;

  margin: 10px;
  list-style: none;
  background-color: gray;
`;

export const CastInfo = styled.div`
  padding: 5px 8px;
  color: black;
`;

export const CastImg= styled.img`
  width: 200px;
`