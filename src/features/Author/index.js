import {
  NavigationLink,
  NavLists,
  StyledNavigation,
  NavUl,
} from "../NavBar/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";

const Author = () => {
  return (
    <>
      <StyledNavigation>
        <NavUl>
          <NavLists>
            <NavigationLink to="/to-do-list-React">Zadania</NavigationLink>
          </NavLists>
          <NavLists bolded>
            <NavigationLink to="/o autorze">O autorze</NavigationLink>
          </NavLists>
        </NavUl>
      </StyledNavigation>
      <Header title="O autorze"></Header>
      <Section title="Joanna Panimasz"></Section>
      <Section
        body={
          <>
            Mam na imię Asia. Zafascynowana technologiami frontendowymi. Z
            wykształcenia rekruterka. Japońskie sztuki walki to moje hobby.
            Trenuję karate. W przyszłości chciałabym polecieć do Japonii i zjeść
            prawdziwy ramen.
          </>
        }
      ></Section>
    </>
  );
};

export default Author;
