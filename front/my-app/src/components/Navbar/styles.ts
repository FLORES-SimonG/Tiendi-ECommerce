import styled from "styled-components";
import {
  customColorPrimary,
  customColorSecondary,
} from "../../../public/colores";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${customColorSecondary};
  padding: 0.5rem 1rem;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
`;
export const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  * {
    text-decoration: none;
  }
`;
export const NavbarListItem = styled.li`
  cursor: pointer;

  color: whitesmoke;
  font-weight: 500;
  &:hover {
    color: ${customColorPrimary};
  }
`;
