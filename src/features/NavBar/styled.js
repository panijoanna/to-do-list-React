import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavigation = styled.nav`
  background-color: ${({ theme }) => theme.color.skobeloff};
  color: white;
  padding: 10px 0;
  width: 100%;
`;

export const NavUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  padding: 0;
  margin: 0;
`;

export const NavLists = styled.li`
  font-size: 14px;
  padding: 5px;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
`;
