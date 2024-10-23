import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: 10px 100px;
  padding: 5px 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    max-width: 90%;
    margin: 10px auto;
  }
`;

export const SectionHeading = styled.h3`
  font-weight: 700;
`;

export const SectionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 0 0 12px;
  }
`;

export const SectionContainer = styled.div`
  padding: 0 5px 10px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    padding: 0 5px 10px 5px;
  }
`;
