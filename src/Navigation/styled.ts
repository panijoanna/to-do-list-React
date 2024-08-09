import styled, { css } from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { ComponentProps } from "react";

interface BoldItem extends ComponentProps<"li"> {
  bolded?: boolean;
}

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.gableGreen};
`;

export const StyledNavigation = styled.nav`
  background-color: ${({ theme }) => theme.color.tundora};
  padding: 14px 0;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0;
  margin: 0;
`;

export const NavLists = styled.li<BoldItem>`
  font-size: 14px;
  padding: 5px;

  ${({ bolded }) =>
    bolded &&
    css`
      font-weight: bold;
    `}

  &:hover {
    filter: brightness(95%); 
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
`;
