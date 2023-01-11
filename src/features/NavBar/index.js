import { NavigationLink, NavLists, NavUl, StyledNavigation } from "./styled";

const NavBar = () => {
  return (
    <StyledNavigation>
      <NavUl>
        <NavLists>Zadania</NavLists>
        <NavLists>
          <NavigationLink to="/o autorze">O autorze</NavigationLink>
        </NavLists>
      </NavUl>
    </StyledNavigation>
  );
};

export default NavBar;
