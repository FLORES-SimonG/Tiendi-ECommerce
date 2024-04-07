import styled from 'styled-components';

import { customColorPrimary, customColorSecondary, customColorTertiary } from '../../../public/colores';


export const CustomNavbar = styled.nav`
  height: 3rem;
  padding: 1rem;
  background: linear-gradient(to bottom, ${customColorPrimary} 75%, ${customColorSecondary});
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 3rem;
  cursor: pointer;
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  color : white;
  svg{
    // color: red;
    height: 2rem;
    width: 2rem;
    &:hover{
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    transition: 0.5s;
    padding: 0.5rem;
    }
  }
  
`;

export const CartIcon = styled.img`
  height: 2rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    transition: 0.5s;
    padding: 0.5rem;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const StyledLi = styled.li`
display: flex;
margin: 0;
padding: 4px;
list-style-type: none;
flex-direction: row;
flex-wrap: nowrap;
align-content: center;
align-items: center;

`;
