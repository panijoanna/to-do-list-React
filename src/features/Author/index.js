import {
  NavigationLink,
  NavLists,
  StyledNavigation,
  NavList,
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
            <NavigationLink to="/o autorze">O autorze</NavigationLink>
          </NavLists>
        </NavList>
      </StyledNavigation>
      <Header title="O autorze"></Header>
      <Section title="Joanna Panimasz"></Section>
      <Section
        body={
          <>
            Mam na imię Asia👩‍💻. <strong>Zafascynowana</strong> technologiami <strong>frontendowymi</strong> z pasji. Z
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
