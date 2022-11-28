import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 10px 0;
  justify-content: space-between;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
`;

export const Input = styled.input`
  padding: 8px;
  width: 100%;
  display: flex;
  align-self: center;
  border: 2px solid ${({ theme }) => theme.color.mercury};
`;

export const FormButton = styled.button`
  background-color: ${({ theme }) => theme.color.skobeloff};
  color: ${({ theme }) => theme.color.white};
  padding: 10px;
  margin-left: 20px;
  border: none;
  width: 200px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: ${({ theme }) => theme.color.cerulean};
    transform: scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    width: 100%;
    margin: 10px 0;
  }
`;
