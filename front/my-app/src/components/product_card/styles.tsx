import styled from "styled-components";
import {
  customColorPrimary,
  customColorQuaternary,
  customColorSecondary,
  customColorTertiary,
} from "../../../public/colores";

const CardContainer = styled.div`
  border: 2px solid ${customColorPrimary};
  width: 11rem;
  height: 17rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transition: 0.2s ease-in-out;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    background-color: ${customColorPrimary};
  }
`;

const Image = styled.img`
  width: 6rem;
border-radius: 25%;
  height: 6rem;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 0.5rem;
`;

const Title = styled.h4`
  text-align: center;
`;

const Price = styled.h5`
  text-align: center;
`;

const IconContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  background: linear-gradient(
    to bottom,
    ${customColorPrimary},
    ${customColorTertiary}
  );
  border-radius: 25px;
`;

const Icon = styled.span`
  background-color: whitesmoke;
  width: 1rem;
  height: 1rem;
  padding: 0.25rem;
  font-size: 0.75rem;
  border-radius: 0.25rem;
  margin: 0.25rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${customColorQuaternary};
    transition: 0.2s ease-in-out;
  }
`;

export { CardContainer, Image, Content, Title, Price, IconContainer, Icon };