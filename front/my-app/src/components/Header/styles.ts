import styled from 'styled-components';

import { customColorPrimary, customColorSecondary, customColorTertiary } from '../../../public/variablesGlobales';


export const CustomNavbar = styled.nav`
  height: 3rem;
    padding: 2rem;
    background: linear-gradient(to bottom, rgb(173, 172, 217) 75%, rgb(199, 199, 199));
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 3rem;
  cursor: pointer;
  margin: 4px;
`;

export const MenuButton = styled.button`
  /* background-color: transparent; */
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  background-color:transparent;
  /* padding: 0.5rem; */
  color : white;
  svg{
    // color: red;
    height: 2rem;
    width: 2rem;
    &:hover{
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    transition: 0.5s;
    /* padding: 0.5rem; */
    }
  }
  
`;

export const CartIcon = styled.img`
  height: 2rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    transition: 0.5s;
    /* padding: 0.5rem; */
  }
`;

export const StyledUl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const StyledLi = styled.div`
display: flex;
justify-content: center;
align-items: center;

margin: 0;
background-color:transparent;
/* padding: 4px; */
width: 3rem;
  height: 3rem;
list-style-type: none;
flex-direction: row;
flex-wrap: nowrap;
align-content: center;
align-items: center;

`;

export const NumeroDeProductos = styled.span`
position: relative;
border-radius: 25px;
right: 17%;
top: -29%;
padding: 0.15rem 0.3rem;
font-size: 0.4rem;

/* font-size: 1rem; */
/* font-weight: bold; */

background-color: ${customColorTertiary};
color: white;
`