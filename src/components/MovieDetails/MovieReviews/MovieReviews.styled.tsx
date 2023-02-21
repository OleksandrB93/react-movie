import styled from "@emotion/styled";

export const ReviewsList = styled.ul`
`;

export const ReviewsItem = styled.li`
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.clPrimary};
  margin: 20px;
  padding: 15px;
  border: 2px solid gray;
  border-radius: 7px;
  box-shadow: 0px 0px 15px 2px gray;
`;

export const AuthorP = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.clAccent};
  margin-bottom: 10px;
`;

export const ReviewsContent = styled.p`
  font-style: italic;
`;
