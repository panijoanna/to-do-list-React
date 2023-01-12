import { NavigationLink, NavLists, NavUl, StyledNavigation } from "./styled";

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavUl>
        <NavLists bolded>Zadania</NavLists>
        <NavLists>
          <NavigationLink to="/o autorze">O autorze</NavigationLink>
        </NavLists>
      </NavUl>
    </StyledNavigation>
  );
};

export default Navigation;
