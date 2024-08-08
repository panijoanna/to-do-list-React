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
            <NavigationLink to="/o-autorze">O autorze</NavigationLink>
          </NavLists>
        </NavList>
      </StyledNavigation>
      <Header title="O autorze"></Header>
      <Section title="Joanna Panimasz" />
      <Section
        body={
          <>
            Mam na imię Joanna. Jestem programistką Front-end, pasjonatką
            technologii i branży IT. Zawsze stawiam sobie ambitne cele i dążę do
            ich realizacji z maksymalną starannością. Moja pasja do
            programowania narodziła się, gdy projektowałam różnego rodzaju
            grafiki. Zafascynowało mnie, jak działa to, co projektuję, i ta
            ciekawość poprowadziła mnie w stronę programowania. Front-end
            Development daje mi ogromną satysfakcję, ponieważ pozwala tworzyć
            funkcjonalne rozwiązania, które są użyteczne dla innych. Ponadto,
            lubię widzieć efekty pracy, co daje mi motywację do dalszego
            działania i udoskonalenia. Każdy projekt to dla mnie okazja do
            nauki, nieustannego rozwoju, co sprawia, że praca w tej branży jest
            nie tylko satysfakcjonująca, ale również pełna wyzwań i inspiracji.
          </>
        }
      ></Section>
    </>
  );
};

export default Author;
