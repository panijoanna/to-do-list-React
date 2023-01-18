import { NavigationLink, NavLists, NavList, StyledNavigation } from "./styled";

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavList>
        <NavLists bolded>
          <NavigationLink to="/to-do-list-React">Zadania</NavigationLink>
        </NavLists>
        <NavLists>
          <NavigationLink to="/o-autorze">O autorze</NavigationLink>
        </NavLists>
      </NavList>
    </StyledNavigation>
  );
};

export default Navigation;
