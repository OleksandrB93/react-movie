import styled from '@emotion/styled';

export const UserBox = styled.div`
  margin: 5px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  

  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.bgNav};
  button {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.clAccent};
    cursor: pointer;
  }
`;
export const UserData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  text-decoration: none;
  font-size: 25px;
  font-weight: 700;
  svg {
    color: ${({ theme }) => theme.colors.clPrimary};
  }
  p {
    margin-left: 5px;
    color: ${({ theme }) => theme.colors.clAccent};
  }
`;
