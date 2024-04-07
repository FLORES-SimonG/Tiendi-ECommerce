'use client';
import styled from 'styled-components';
// import { FooterContainer, FooterContent, FooterText, FooterLink } from './styles';


const FooterContainer = styled.footer`
background-color: red;
color: #fff;
padding: 1rem;
position: fixed;
bottom: 0;
width: 100%;
`;

const FooterContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const FooterText = styled.p`
font-size: 14px;
`;

const FooterLink = styled.a`
color: #fff;
text-decoration: none;
&:hover {
  text-decoration: underline;
}
`;
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