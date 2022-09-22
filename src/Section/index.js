import "./style.css";

const Section = ({title, body, extraHeaderContent}) => (
    <section className="section">
        <header className="section__header section__header--toggleButtons">
            <h3 className="section__heading">{title}</h3>
            {extraHeaderContent}
        </header>
        <div className="section__container">
            {body}
        </div>
    </section>
);

export default Section;