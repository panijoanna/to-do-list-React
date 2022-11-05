import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 10px 0;
  justify-content: space-between;
  display: flex;

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Input = styled.input`
  padding: 8px;
  width: 100%;
  display: flex;
  align-self: center;
  border: 2px solid #e2e2e2;
`;

export const FormButton = styled.button`
  background-color: #027381;
  color: #fff;
  padding: 10px;
  margin-left: 20px;
  border: none;
  width: 200px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: hsl(187, 100%, 31%);
    transform: scale(1.1);
  }

  @media (max-width: 767px) {
    width: 100%;
    margin: 10px 0;
  }
`;
