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
    gap: 10px;
  }
`;

export const Input = styled.input`
  padding: 12px;
  width: 100%;
  display: flex;
  align-self: center;
  border: none;
  background: ${({ theme }) => theme.color.gray};
  border-radius: 8px;
  font-size: 14px;
`;

export const FormButton = styled.button`
  background-color: ${({ theme }) => theme.color.cornFlowerBlue};
  color: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  font-weight: 500;
  padding: 10px;
  margin-left: 20px;
  border: none;
  width: 200px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    filter: brightness(95%);
    transform: scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    width: 100%;
    margin: 10px 0;
  }
`;
