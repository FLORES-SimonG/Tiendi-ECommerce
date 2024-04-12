import styled from "styled-components";

import {
  customColorPrimary,
  customColorSecondary,
  customColorTertiary,
} from "../../../public/variablesGlobales";

const HomeContainer = styled.div`
  background-color: transparent;
`;

const Title = styled.h2`
  padding: 3rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
  background: linear-gradient(
    to bottom,
    transparent 5%,
    ${customColorSecondary} 90%,
    transparent 100%
  );
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
`;
const Contenedor = styled.div`
  background: linear-gradient(
    to bottom,
    transparent,
    ${customColorSecondary} 10%,
    transparent 100%
  );

  border-radius: 15px;

  margin: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

// const CardInformation = styled.div`
//   display: grid;
//   justify-content: space-around;
//   align-content: center;
//   align-items: center;
// `;

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
  transition: 0.75s;

  .titleText {
    color: whitesmoke;
    background-color: rgba( 0, 0, 0, 0.7);
    padding: 0.75rem;
    margin: 0.5rem;
    display: inline-flex;
    align-items: center;
    border-radius: 15px;
    margin-top: 4px;
    
  }

  img {
    width: 10rem;
    height: 10rem;
    object-fit: cover;

    border-radius: 15px;

    border-radius: 50%;
    transition: 0.75s;
  }
`;

const StyledLi = styled.li`
  list-style: none;
  padding: 0;
`;

const StyledCardInformation = styled.div`
  background-color: transparent;
  
  display: flex;
  flex-direction: column;
  :hover {
    background-color: ${customColorPrimary};
    transition: 0.75s;
    color: whitesmoke;
    border-radius: 15px;
    /* scale: 1.05; */
  }
`;

const AppDownloader = styled.div`
  display: flex;
  padding: 2rem 0rem;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to bottom,
    transparent,
    ${customColorPrimary} 10%,
    transparent 100%
  );

  height: 25dvh;
  width: 100%;
  .information {
    display: flex;
    margin: 1rem;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 25rem;
    text-align: center;
    /* background-color: red; */
    p {
      margin: 0 2rem;
    }
    h3 {
      color: whitesmoke;
      background-color: ${customColorSecondary};
      padding: 0.75rem;
      border-radius: 15px;
      cursor: pointer;
      transition: 0.75s;
      &:hover {
        background-color: ${customColorPrimary};
        transition: 0.75s;
        color: whitesmoke;
        border-radius: 15px;
      }
    }
  }
  .logos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 25rem;

    img {
      width: 3rem;
      height: 3rem;
      margin: 1rem;
      background-color: whitesmoke;
      border-radius: 50%;
      padding: 0.5rem;
      cursor: pointer;
      transition: 0.75s;
      &:hover {
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
      }
    }
  }
`;

export {
  HomeContainer,
  Title,
  Texto,
  StyledLi,
  Contenedor,
  AppDownloader,
  StyledCardInformation,
};
