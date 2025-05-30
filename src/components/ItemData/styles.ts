import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: start;
  gap: 0.2rem;

  margin-bottom: 6rem;

  label {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  input,
  select,
  textarea {
    padding: 1rem;
    border-radius: 8px;
    border: 0;
    font-size: 1.6rem;
    font-weight: 600;
    width: 100%;
  }

  textarea {
    height: 11.6rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 0.6rem;
  }

  /* .buttons {
      display: flex;
      justify-content: center;
      align-items: center;
    } */
`;
