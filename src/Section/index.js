import { StyledSection } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <header className="section__header section__header--toggleButtons">
      <h3 className="section__heading">{title}</h3>
      {extraHeaderContent}
    </header>
    <div className="section__container">{body}</div>
  </StyledSection>
);

export default Section;
