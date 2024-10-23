import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 12px;
  display: flex;
  align-self: center;
  border-radius: 8px;
  border: none;
  background: ${({ theme }) => theme.color.gray};
  width: 100%;
  font-size: 14px;

  ::placeholder {
    color: ${({ theme }) => theme.color.osloGray};
  }
`;
