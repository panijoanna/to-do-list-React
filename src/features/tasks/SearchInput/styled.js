import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 8px;
  display: flex;
  align-self: center;
  border: 2px solid ${({ theme }) => theme.color.mercury};
  width: 100%;
`;
