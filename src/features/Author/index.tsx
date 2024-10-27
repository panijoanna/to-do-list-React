import {
  NavList,
  NavLists,
  NavigationLink,
  StyledNavigation,
} from "../../Navigation/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";

const Author = () => {
  return (
    <>
      <StyledNavigation>
        <NavList>
          <NavLists>
            <NavigationLink to="/to-do-list-React">Zadania</NavigationLink>
          </NavLists>
          <NavLists bolded>
            <NavigationLink to="/o-autorze">O autorze</NavigationLink>
          </NavLists>
        </NavList>
      </StyledNavigation>
      <Header title="O autorze"></Header>
      <Section title="Joanna Panimasz" />
      <Section
        body={
          <>
            Mam na imię Joanna i jestem frontend developerką. Programowaniem
            zajmuję się od 2020 roku – to wtedy po raz pierwszy połączyłam
            kreatywność z technologią, co szybko stało się moją pasją. Wcześniej
            pracowałam jako grafik, gdzie rozwijałam umiejętności w
            projektowaniu wizualnym. Z czasem jednak zaczęłam poszukiwać
            rozwiązań, dzięki którym moje projekty byłyby nie tylko estetyczne,
            ale również interaktywne i angażujące. <br />
            Od tamtej pory miałam okazję pracować z wieloma technologiami,
            takimi jak: React, Redux, Vue3, Pinia, Angular, NgRx, JavaScript,
            TypeScript, REST API, GraphQL, NestJS, Next.js oraz narzędziami UI:
            Styled-components, Figma, Bootstrap, TailwindCSS i Material UI.
            <br />
            Obecnie stale rozwijam swoje umiejętności techniczne.
          </>
        }
      ></Section>
    </>
  );
};

export default Author;
