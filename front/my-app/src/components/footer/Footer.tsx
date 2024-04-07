'use client';

import { FooterContainer, FooterContent, FooterText, FooterLink } from './styles';


function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>© {new Date().getFullYear()} Tiendi. Todos los derechos reservados.</FooterText>
        <FooterText>
          Diseñado por <FooterLink href="https://example.com">FLORES, Simón G.</FooterLink>
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;