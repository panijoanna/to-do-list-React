import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: white;
  box-shadow: 0 2px #eee;
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 10px 0;
  border: 1px solid #e2e2e2;
  padding: 5px 20px;
`;

export const SectionHeading = styled.h3`
  font-weight: 900;
`;

export const SectionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const SectionContainer = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
