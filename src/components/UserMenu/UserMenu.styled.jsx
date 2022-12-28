import styled from '@emotion/styled';

export const UserBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  button{
    background: transparent;
    border: none;
    color: ${({theme})=>theme.colors.clAccent};
    cursor: pointer;
  }
`;
export const UserData = styled.div`
  display: flex;
  svg{
    color: ${({theme})=>theme.colors.clPrimary};
    
  }
  p {
    margin-left: 5px;
    color: ${({theme})=>theme.colors.clAccent};
  }
`;
