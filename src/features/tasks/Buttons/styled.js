import styled from "styled-components";

export const ListsButton = styled.button`
  color: ${({ theme }) => theme.color.osloGray};
  border: none;
  background-color: transparent;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    filter: brightness(95%);
  }

  &:disabled {
    color: ${({ theme }) => theme.color.disable};
  }

  @media (max-width: 767px) {
    padding: 10px 10px 10px 0;
  }
`;

export const SectionButton = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
