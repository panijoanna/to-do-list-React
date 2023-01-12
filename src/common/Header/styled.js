import styled from "styled-components";

export const Heading = styled.h2`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 0 20px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    padding: 40px 0 20px 20px;
  }
`;
