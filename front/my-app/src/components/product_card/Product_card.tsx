"use client";
import { BiCartDownload } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegShareSquare } from "react-icons/fa";
import {
  CardContainer,
  Content,
  Icon,
  IconContainer,
  Image,
  Price,
  Title,
} from "./styles";

function Product_card(producto: any): any {
  return (
    <CardContainer>
      {/* <Image src={producto.data.image} alt={producto.data.name}/>//! cuando funcionen las imagenes, pongo esto. */}
      <Image
        src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTMkJMLIOX_xX6RMnnf5Wh_ctvqPSvvEW1dpU8vfyLUpditTJq9eMKzGPn3vObZwrbvkiX1UIOYnk6Vte_ydbGBcrrqAPX0BhXY6uTlc8Bl3ZrN3W-KeG8NMg"
        alt={producto.data.name}
      />
      <Content>
        <div>
          <Title>{producto.data.name} </Title>
          <Price>${producto.data.price} </Price>
         
        </div>
      </Content>
      <IconContainer>
        <Icon>
          <BiCartDownload />
        </Icon>
        <Icon>
          <FaRegShareSquare />
        </Icon>
        <Icon>
          <MdFavoriteBorder />
        </Icon>
      </IconContainer>
    </CardContainer>
  );
}

export default Product_card;
