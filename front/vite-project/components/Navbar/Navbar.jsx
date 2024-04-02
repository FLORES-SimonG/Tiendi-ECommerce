import React, { useState } from 'react';
import styled from 'styled-components';
import { ImPower } from 'react-icons/im';

const NavbarWrapper = styled.nav`
  background-color: #333;
  color: white;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  li {
    margin-right: 20px;
    cursor: pointer;
  }

  li:last-child {
    margin-right: 0;
  }
`;

const NavbarLogo = styled.div`
  svg {
    font-size: 24px;
    color: #fff;
    cursor: pointer;
  }
`;

const MobileMenuIcon = styled.div`
  display: none; /* Por defecto oculto en pantallas más grandes */
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; /* Mostrar en dispositivos móviles */
  }
`;

const MobileMenu = styled.div`
  display: none; /* Por defecto oculto en pantallas más grandes */

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')}; /* Mostrar si está abierto */
    background-color: #333;
    padding: 10px;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 10px;
    }
  }
`;

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarLogo>
          <ImPower />
        </NavbarLogo>
        <MenuList>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </MenuList>
        <MobileMenuIcon onClick={toggleMobileMenu}>
          <ImPower />
        </MobileMenuIcon>
      </NavbarContainer>
      <MobileMenu isOpen={isMobileMenuOpen}>
        <ul>
          <li>Item a</li>
          <li>Item b</li>
          <li>Item c</li>
          <li>Item d</li>
          <li>Item e</li>
        </ul>
      </MobileMenu>
    </NavbarWrapper>
  );
};

export default NavBar;
