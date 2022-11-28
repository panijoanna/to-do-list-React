import styled from "styled-components";

export const ListsButton = styled.button`
  color: ${({ theme }) => theme.color.lagoon};
  border: none;
  background-color: transparent;
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.color.blue};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.silver};
  }

  @media (max-width: 767px) {
    padding: 10px;
  }
`;

export const SectionButton = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
