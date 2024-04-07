'use client';
import styled from 'styled-components';
import { BiCartDownload } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegShareSquare } from "react-icons/fa";

const CardContainer = styled.div`
  border: 2px solid red;
  width: 12rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const Image = styled.img`
  max-width: 10rem;
  margin: 0.5rem;
`;

const Content = styled.div`
  padding: 0.5rem;
`;

const Title = styled.h4`
  font-weight: bold;
  font-size: 0.875rem;
`;

const Price = styled.h5`
  font-weight: bold;
  font-size: 0.75rem;
`;

const Description = styled.p`
  font-size: 0.75rem;
`;

const IconContainer = styled.div`
  display: flex;
  padding: 0.5rem;
`;

const Icon = styled.span`
  background-color: #e2e8f0;
  border-radius: 9999px;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
  margin-right: 0.5rem;
`;

function ProductCard() {
  return (
    <CardContainer>
      <Image src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTMkJMLIOX_xX6RMnnf5Wh_ctvqPSvvEW1dpU8vfyLUpditTJq9eMKzGPn3vObZwrbvkiX1UIOYnk6Vte_ydbGBcrrqAPX0BhXY6uTlc8Bl3ZrN3W-KeG8NMg" alt="Celular"/>
      <Content>
        <div>
          <Title>Xiaomi Example</Title>
          <Price>$19.99</Price>
        </div>
        <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</Description>
      </Content>
      <IconContainer>
        <Icon><BiCartDownload /></Icon>
        <Icon><FaRegShareSquare /></Icon>
        <Icon><MdFavoriteBorder /></Icon>
      </IconContainer>
    </CardContainer>
  );
}

export default ProductCard;
