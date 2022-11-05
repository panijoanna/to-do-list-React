import { StyledSection, SectionHeading, SectionHeader, SectionContainer } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <SectionHeader>
      <SectionHeading>
          {title}
      </SectionHeading>
      {extraHeaderContent}
    </SectionHeader>
    <SectionContainer>
        {body}
        </SectionContainer>
  </StyledSection>
);

export default Section;
