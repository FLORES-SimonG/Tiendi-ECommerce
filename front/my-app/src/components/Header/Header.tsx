'use client'
import { LuMenuSquare } from "react-icons/lu";
import { CustomNavbar, MenuButton, Logo, StyledUl, StyledLi, CartIcon, NavItem } from "./styles";
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
