import { HomeContainer, Contenedor, StyledCardInformation, Texto, StyledLi, Title } from "./styles";
import { LuPin } from "react-icons/lu";

function HomeConteiner() {
  return (
    // esto es una ecommerce que se llama Tiendi
    <HomeContainer>
      <Title>Bienvenidos a Tiendi </Title>
      <Contenedor>

      <StyledCardInformation>
        <Texto>
          <StyledLi className="titleText">
          <LuPin />
          </StyledLi>
          {/* <br />
          <br /> */}
          <StyledLi>
            Nos preocupamos por el medio ambiente, trae tu telefono viejo y te  damos un descuento en tu compra.
          </StyledLi>
          <img src="https://img.gruporeforma.com/imagenes/960x640/5/443/4442147.jpg" alt="celu" />
          
        </Texto>
      </StyledCardInformation>
      
      <StyledCardInformation>
        <Texto>
          <StyledLi className="titleText">
          <LuPin />
          </StyledLi>
          {/* <br />
          <br /> */}
          <StyledLi>
            Compras en cuotas sin interes con tarjeta de Crédito MasterCard, Visa y American Express.
          </StyledLi>
          <img src="https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=600" alt="TarjetaDeCrédito" />
          
        </Texto>
      </StyledCardInformation>
      
      <StyledCardInformation>
        <Texto>
          <StyledLi className="titleText">
          <LuPin />
          </StyledLi>
          {/* <br />
          <br /> */}
          <StyledLi>
            Aceptamos pagos con Bitcoin, Ethereum y Litecoin.
          </StyledLi>
          <img src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=300" alt="cripto" />
          
        </Texto>
      </StyledCardInformation>
      
      <StyledCardInformation>
        <Texto>
          <StyledLi className="titleText">
          <LuPin />
          </StyledLi>
          {/* <br />
          <br /> */}
          <StyledLi>
            Vendemos tecnologías usadas en optimas condiciones con garantía de 6 meses posteriores a la compra. 
          </StyledLi>
          <img src="https://images.pexels.com/photos/2582931/pexels-photo-2582931.jpeg?auto=compress&cs=tinysrgb&w=300" alt="reparacion" />
          
        </Texto>
      </StyledCardInformation>
      
      <StyledCardInformation>
        <Texto>
          <StyledLi className="titleText">
          <LuPin />
          </StyledLi>
          {/* <br />
          <br /> */}
          <StyledLi>
            Contamos con la atención personalizada de nuestros vendedores, para que puedas elegir el producto que mejor se adapte a tus necesidades.
          </StyledLi>
          <img src="https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=300" alt="service" />
          
        </Texto>
      </StyledCardInformation>
      
      <StyledCardInformation>
        <Texto>
          <StyledLi className="titleText">
          <LuPin />
          </StyledLi>
          {/* <br />
          <br /> */}
          <StyledLi>
            Envío gratis a todo el país en compras mayores a $5000.
          </StyledLi>
          <img src="https://media.istockphoto.com/id/1218449770/es/foto/obtenci%C3%B3n-de-paquete-s-desde-el-concepto-de-oficina-de-correos-perfil-lateral-foto-de-cerca-de.jpg?b=1&s=612x612&w=0&k=20&c=t5Pb9iyTjPUWssEoYZCatrN1HxEQpy8dxDp-tlJ-yaQ=" alt="celu" />
          
        </Texto>
      </StyledCardInformation>
      
      </Contenedor>
    </HomeContainer>
  );
}

export default HomeConteiner;