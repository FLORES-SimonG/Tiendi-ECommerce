'use client'
import { LuMenuSquare } from "react-icons/lu";
import { CustomNavbar, MenuButton, Logo, StyledUl, StyledLi, CartIcon, NavItem , NumeroDeProductos} from "./styles";
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
          <NumeroDeProductos>
            0
            </NumeroDeProductos>
        </StyledLi>
      </StyledUl>
    </CustomNavbar>
  );
}

export default Header;
