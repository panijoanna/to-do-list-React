import styled from "styled-components";

export const ListsButton = styled.button `
  color: hsl(187, 97%, 26%);
  border: none;
  background-color: transparent;
  transition: 0.5s;

  &:hover {
    color: hsl(185, 36%, 50%);
  }

  &:disabled {
    color: hsl(0, 0%, 69%);
  }

  @media (max-width: 767px) {
      padding: 10px;
    }
`;
