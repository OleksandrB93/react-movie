import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  padding-top: 100px;

  :hover,
  :focus button {
    color: ${({ theme }) => theme.colors.clAccent};
  }
`;

export const Input = styled.input`
  width: 500px;
  border-radius: 25px;
  border: 3px solid #14c6b3;
  outline: none;
  padding: 10px;
  font-size: 18px;
  text-align: center;

  background-color: black;
  color: ${({ theme }) => theme.colors.clAccent};
  transition: width 300ms ease-in-out, border 400ms ease-in-out;

  :hover,
  :focus {
    width: 500px;
    border: 2px solid ${({ theme }) => theme.colors.clAccent};
    border: 3px solid ${({ theme }) => theme.colors.clAccent};
    color: ${({ theme }) => theme.colors.clAccent};
  }
`;
export const BtnContainer = styled.div`
  /* background-color: ${({ theme }) => theme.colors.bgPrimary}; */
`;
export const SearchIconBtn = styled.button`
  border: none;
  padding: 5px;
  cursor: pointer;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.clPrimary};
`;

export const SkeltonBox = styled.div`
  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-content: start;
  flex-wrap: wrap;
`;
