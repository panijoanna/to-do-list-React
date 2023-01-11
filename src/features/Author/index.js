import { NavigationLink, NavLists, StyledNavigation } from "../NavBar/styled";

const Author = () => {
  return (
    <>
      <StyledNavigation>
        <NavUl>
          <NavLists>
            <NavigationLink to="/to-do-list-React">Zadania</NavigationLink>
          </NavLists>
          <NavLists>
            <NavigationLink to="/o autorze">O autorze</NavigationLink>
          </NavLists>
        </NavUl>
      </StyledNavigation>
      <Header title="O autorze"></Header>
      <Section title="Joanna Panimasz" body={<>Hello</>}></Section>
    </>
  );
};

export default Author;
