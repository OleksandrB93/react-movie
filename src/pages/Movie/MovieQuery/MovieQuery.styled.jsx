import styled from '@emotion/styled';
export const Form = styled.form`
  display: flex;
  justify-content: center;
  padding-top: 100px;

  :hover,
  :focus button {
    color: ${({ theme }) => theme.colors.clAccent};
  }
`;

export const QueryLabel = styled.label`
  display: flex;
  align-content: center;
`;

export const Input = styled.input`
  /* position: relative; */

  width: 300px;
  border-radius: 25px;
  border: 3px solid ${({ theme }) => theme.colors.clPrimary};
  outline: none;
  padding: 10px;
  font-size: 18px;
  text-align: center;

  background-color: black;
  color: ${({ theme }) => theme.colors.clAccent};
  transition: width 300ms ease-in-out, border 400ms ease-in-out;

  :hover,
  :focus {
    border: 2px solid ${({ theme }) => theme.colors.clAccent};
    border: 3px solid ${({ theme }) => theme.colors.clAccent};
    color: ${({ theme }) => theme.colors.clAccent};
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.clPrimary};
    text-decoration-line: underline;
  }
`;
export const BtnContainer = styled.div`
`;
export const SearchIconBtn = styled.button`
  /* position: absolute; */
/* top: 0; */
/* left: 0; */
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

export const BackgroundImgNoMovie = styled.div`
  /* background-image: radial-gradient(circle, rgba(0, 0, 0, 0) 0%, #003335cc 100%),
    url(${props =>
    props.movies.length === 0
      ? 'https://www.pixelstalk.net/wp-content/uploads/images5/Cool-Batman-Wallpaper-Free-Download.jpg'
      : ''}); */

  width: 100%;
  height: ${props => (props.movies.length ? '100%' : '100vh')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
