import styled from "styled-components";
import {
  customColorPrimary,
  customColorSecondary,
  customColorTertiary,
} from "../../../public/variablesGlobales";

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
    transition: 0.75s;
    cursor: pointer;

    .textTitle {
      color: whitesmoke;
      background-color: ${customColorTertiary};
      padding: 12px;
      display: inline-flex;
      align-items: center;
      border-radius: 15px;
      margin-top: 4px;
      transition: 0.9s;
    }
  }

  &:hover {
    .texto {
      background-color: ${customColorPrimary};

      scale: 1.05;
      color: whitesmoke;

      .textTitle {
        background-color: #323232;
        color: whitesmoke;
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
    background: linear-gradient(
      180grad,
      ${customColorSecondary},
      ${customColorTertiary},
      ${customColorSecondary}
    );
    /* ${customColorSecondary}; */
    padding: 20px;
    margin: 2rem;
    transition: 0.3s;

    &:hover {
      transform: scale(1.05);
      /* transition: 0.3s; */
      cursor: pointer;
    }
  }
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`;
