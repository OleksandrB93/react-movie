import styled from '@emotion/styled';

export const SwitsherTheme = styled.button`
max-width: 50px;
max-height: 23px;
display: flex;
align-items: center;

background: ${({ theme }) => theme.colors.gradient};
border: none;
border-radius: 30px;
cursor: pointer;
display: flex;
justify-content: space-between;
align-items: center;
overflow: hidden;
`;

export const SunIcon = styled.div`
transform: ${props =>
  props.darkMode ? 'translateY(-700%)' : 'translateY(0%)'};
transition: transform 300ms ease-in-out;
display: flex;
align-items: center;
`;

export const MoonIcon = styled.div`
transform: ${props =>
  props.darkMode ? 'translateY(0%)' : 'translateY(700%)'};
transition: transform 300ms ease-in-out;
display: flex;
align-items: center;
`;
