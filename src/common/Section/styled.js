import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 2px ${({ theme }) => theme.color.galery};
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 10px 0;
  border: 1px solid ${({ theme }) => theme.color.mercury};
  padding: 5px 20px;
`;

export const SectionHeading = styled.h3`
  font-weight: 900;
`;

export const SectionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const SectionContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    padding: 5px 0;
  }
`;