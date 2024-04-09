import styled from 'styled-components';
import { LuPin } from "react-icons/lu";

import { customColorPrimary, customColorSecondary, customColorTertiary } from '../../../public/colores';

const HomeContainer = styled.div`
  background-color: transparent;
`;

const Title = styled.h2`
  padding: 3rem;
  background: linear-gradient(to bottom, transparent 5%, ${customColorSecondary} 90%, transparent 100%);
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
  /* background-color: #4db86b; */
`;
const Contenedor = styled.div`
  background: linear-gradient(to bottom, transparent, ${customColorSecondary} 10%, transparent 100%);

  border-radius: 15px;
  /* filter: blur(0.5px); */
    margin: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
`;

const CardInformation = styled.div`

display: grid;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`;

const Texto = styled.ul`
      width: 25rem; 
      height: 10rem;
    padding: 0.75rem;
    margin: 1.5rem;
    background-color: whitesmoke;
    border-radius: 1.5rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
   


  .titleText {
    color: whitesmoke;
    background-color: ${customColorTertiary};
    padding: 0.75rem; 
    margin: 0.5rem;
    display: inline-flex;
    align-items: center;
    border-radius: 15px;
    margin-top: 4px;
  }
  img{
    width: 10rem;
    height: 10rem;
    object-fit: cover;

    border-radius: 15px;
    &:hover {
      border-radius: 50%;
      transition: 0.75s;
    }
  
  }
`;

const StyledLi = styled.li`
  list-style: none;
  padding: 0;
  margin: 0%.5;
  
`;

// const TextoSecundario = styled(Texto)`
//   text-align: right;
// `;

const StyledCardInformation = styled(CardInformation)`
background-color:transparent;
/* padding: 1rem; */
/* margin : 1rem; */
display: flex;
flex-direction: column;
  &:hover {
    ${Texto} {
      background-color: ${customColorPrimary};
      transition: 0.75s;
      scale: 1.05;
      color: whitesmoke;

      .titleText {
        background-color: #323232;
        color: whitesmoke;
        transition: 0.9s;
        padding: 0.4rem;
      }
    }
  }

  &:hover > &:not(:hover) {
    transform: scale(0.95);
    transition: 0.75s;
  }
`;

export {
  HomeContainer,
  Title,
  CardInformation,
  Texto,
  StyledLi,
  // TextoSecundario,
  Contenedor,
  StyledCardInformation,
};