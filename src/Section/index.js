import { StyledSection, SectionHeading } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <header className="section__header section__header--toggleButtons">
      <SectionHeading>
          {title}
      </SectionHeading>
      {extraHeaderContent}
    </header>
    <div className="section__container">{body}</div>
  </StyledSection>
);

export default Section;
