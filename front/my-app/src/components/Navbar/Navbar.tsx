'use client';
import Link from "next/link";
import { NavbarContainer } from "./styles";

function Navbar() {
  return (
    <NavbarContainer>
      <ul>
      <Link href="/">
      <li>Home Link</li>
      </Link>
      <Link href="/store">

      <li>Store Link</li>
      </Link>
     </ul>
    </NavbarContainer>
  );
}

export default Navbar;