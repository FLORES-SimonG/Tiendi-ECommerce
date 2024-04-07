'use client'
import styled from 'styled-components';
import { LuMenuSquare } from "react-icons/lu";
import { customColorPrimary, customColorSecondary, customColorTertiary } from '../../../public/colores';

const CustomNavbar = styled.nav`
  height: 3rem;
  padding: 1rem;
  background-color: rgb(173, 172, 217);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 3rem;
  cursor: pointer;
`;

const MenuButton = styled.button`
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

const CartIcon = styled.img`
  height: 2rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    transition: 0.5s;
    padding: 0.5rem;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const StyledLi = styled.li`
display: flex;
margin: 0;
padding: 4px;
list-style-type: none;
flex-direction: row;
flex-wrap: nowrap;
align-content: center;
align-items: center;

`;

function Header() {
  return (
    <CustomNavbar>
      <NavItem>
        <MenuButton>
          <LuMenuSquare />
        </MenuButton>
      </NavItem>
      <Logo src="/Tiendi.svg" alt="Tiendi" />
      <StyledUl>
        {/* <StyledLi>Ingresa</StyledLi> */}
        <StyledLi>
          <CartIcon src="/carritoBlanco.svg" alt="carrito" />
        </StyledLi>
      </StyledUl>
    </CustomNavbar>
  );
}

export default Header;
