import { ReactNode } from "react";
import {
  StyledSection,
  SectionHeading,
  SectionHeader,
  SectionContainer,
} from "./styled";

interface SectionItems {
  title?: string;
  body?: ReactNode;
  extraHeaderContent?: ReactNode;
}

const Section = ({ title, body, extraHeaderContent }: SectionItems) => (
  <StyledSection>
    <SectionHeader>
      <SectionHeading>{title}</SectionHeading>
      {extraHeaderContent}
    </SectionHeader>
    <SectionContainer>{body}</SectionContainer>
  </StyledSection>
);

export default Section;
