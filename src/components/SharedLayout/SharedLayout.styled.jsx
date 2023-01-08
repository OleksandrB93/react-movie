import styled from '@emotion/styled';

export const SharedLayoutBox = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: ${({theme})=>theme.colors.bgPrimary};
`;

export const HeaderMobileContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
`;
