import styled from 'styled-components';
import {
    customColorPrimary,
    customColorSecondary,
    customColorTertiary,
  } from "../../../public/colores";


export const CardInformation = styled.div`
  display: grid;
  justify-content: space-around;
  align-content: center;
  align-items: center;

  .texto {
    width: 90vw;
    color: #323232;
    padding: 12px;
    margin: 16px;
    background-color: whitesmoke;
    border-radius: 15px;
    cursor: pointer;

    .textTitle {
      color: whitesmoke;
      background-color: ${customColorTertiary};
      padding: 12px;
      display: inline-flex;
      align-items: center;
      border-radius: 15px;
      margin-top: 4px;
    }
  }

  &:hover {
    .texto {
      background-color: ${customColorPrimary};
      transition: 0.75s;
      scale: 1.05;
      color: whitesmoke;

      .textTitle {
        background-color: #323232;
        color: whitesmoke;
        transition: 0.9s;
      }
    }
  }

  &:hover > &:not(:hover) {
    transform: scale(0.95);
    transition: 0.75s;
  }
`;

export const TextoSecundario = styled.div`
  text-align: right;
`;

export const DivEquipo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
    height: 50%;
    border-radius: 25px;
    background: linear-gradient(180grad, ${customColorSecondary},${customColorTertiary}, ${customColorSecondary}); 
    /* ${customColorSecondary}; */
    padding: 20px;
    margin: 2rem;

    &:hover {
      transform: scale(1.05);
      transition: 0.75s;
      cursor: pointer;
      
    }
  }
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`;
