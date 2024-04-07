import styled from 'styled-components';


export const FooterContainer = styled.footer`
background-color: #333;
color: #fff;
padding: 1rem;
position: fixed;
bottom: 0;
width: 100%;
`;

export const FooterContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const FooterText = styled.p`
font-size: 14px;
`;

export const FooterLink = styled.a`
color: #fff;
text-decoration: none;
&:hover {
  text-decoration: underline;
}
`;


