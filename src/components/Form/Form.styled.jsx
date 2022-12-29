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
  transform: translate(50%, -50%);

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
  box-shadow: rgba(192, 192, 192, 0.5) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
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
