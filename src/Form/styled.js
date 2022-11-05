import styled from "styled-components";

export const FormElement = styled.form`
  padding: 10px 0;
  justify-content: space-between;
  display: flex;

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;
