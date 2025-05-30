import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;

  width: 90%;
  margin: 8rem auto;
  padding: 2rem;

  list-style: none;

  background-color: ${({ theme }) => theme.COLORS.BG_GRAY_700};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-weight: 500;

  p {
    margin-bottom: 1.2rem;
  }

  span {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-weight: 400;
  }

  margin-bottom: 4rem;
  border-radius: 8px;
`;
