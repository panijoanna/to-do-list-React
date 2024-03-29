import styled, { css } from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
`;

export const StyledNavigation = styled.nav`
  background-color: ${({ theme }) => theme.color.skobeloff};
  color: white;
  padding: 10px 0;
  width: 100%;
`;

export const NavList = styled.ul`
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

  ${({ bolded }) =>
    bolded &&
    css`
      font-weight: bold;
    `}

  &:hover {
    filter: brightness(90%); 
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
`;
