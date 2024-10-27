import { ReactNode } from "react";
import {
  StyledSection,
  SectionHeading,
  SectionHeader,
  SectionContainer,
} from "./styled";

interface SectionProps {
  title?: string;
  body?: ReactNode;
  extraHeaderContent?: ReactNode;
}

const Section = ({ title, body, extraHeaderContent }: SectionProps) => (
  <StyledSection>
    <SectionHeader>
      <SectionHeading>{title}</SectionHeading>
      {extraHeaderContent}
    </SectionHeader>
    <SectionContainer>{body}</SectionContainer>
  </StyledSection>
);

export default Section;
