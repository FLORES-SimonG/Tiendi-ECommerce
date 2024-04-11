"use client";
import Link from "next/link";
import { NavbarContainer, NavbarList, NavbarListItem, NavbarListItemSpecial } from "./styles";

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarList>
        {/* <Link href="/">
          <NavbarListItem>Bienvenida</NavbarListItem>
        </Link> */}
        <Link href="/home">
          <NavbarListItem>Home</NavbarListItem>
        </Link>
        <Link href="/register">
          <NavbarListItem>Registrate</NavbarListItem>
        </Link>
        <Link href="/store">
          <NavbarListItem>Productos</NavbarListItem>
        </Link>
        <Link href="/login">
          <NavbarListItem>Ingresa</NavbarListItem>
        </Link>
        <Link href="/aboutus">
          <NavbarListItem>Nosotros</NavbarListItem>
        </Link>
      </NavbarList>
    </NavbarContainer>
  );
}

export default Navbar;
