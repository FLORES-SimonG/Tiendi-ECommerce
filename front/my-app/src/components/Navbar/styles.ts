import styled from "styled-components";
import {
  customColorPrimary,
  customColorSecondary,
  customColorTertiary,
} from "../../../public/colores";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  
  background: linear-gradient(to bottom ,${customColorSecondary} 45%, white); ;
  padding: 0rem 1rem 1rem 1rem;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
`;
export const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 1rem;
  * {
    text-decoration: none;
  }
`;
export const NavbarListItem = styled.li`
  cursor: pointer;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 25px;
  
  color: whitesmoke;
  background-color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
  
  
  &:hover {
    background-color: ${customColorTertiary};
    transition: 0.5s;
  }
`;
