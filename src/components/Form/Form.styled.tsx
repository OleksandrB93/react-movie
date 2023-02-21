import styled from '@emotion/styled';

export const OverlayForm = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #d4d4d4;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url('https://wallpapercave.com/wp/wp10615931.jpg');
  background-size: cover;
  background-repeat: no-repeat;
`;

export const FormContainer = styled.form`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -60%);

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 35px 20px;

  width: 250px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.clPrimary};

  background-image: linear-gradient(
    to right,
    rgba(47, 48, 58, 0.4),
    rgba(47, 48, 58, 0.4)
  );
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

export const TitleForm = styled.p`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 15px;

  color: white;
  text-decoration: underline ${({ theme }) => theme.colors.clPrimary};
`;

export const FormIconBox = styled.div`
  color: white;
`;

export const FormLabel = styled.label`
  display: flex;
  align-items: center;

  position: relative;
  margin: 5px;

  svg {
    position: absolute;
    top: 20%;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
    left: 3%;
    color: ${({ theme }) => theme.colors.clAccent};
  }
`;

export const FormInput = styled.input`
  padding: 5px 7px;
  padding-left: 30px;
`;

export const LogRegBtn = styled.button`
  padding: 7px 75px;
  color: white;
  background-color: ${({ theme }) => theme.colors.clAccent};
  border: none;
  transition: box-shadow 250ms ease-in-out;
  margin-top: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
  cursor: pointer;

  :hover,
  :focus {
    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  }
`;

export const ToggleBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.clPrimary};
  color: white;
  border: none;
  transition: box-shadow 250ms ease-in-out;
  border-radius: 4px;
  cursor: pointer;

  :hover,
  :focus {
    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  }
`;


export const ShowPassword = styled.button`
  position: absolute;
  top: 15%;
  right:10px;
  background: transparent;
  border: none;

`