'use client';
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import { CardInformation, DivEquipo, ListItem } from "./aboutUs";
//MI EMPRESA SE LLAMA "TIENDI"

export default function AboutUs() {
    return (
      <>
      <Header />
      <Navbar />
      <CardInformation>
        <ul className="texto">
          <ListItem className="textTitle">Nuestra Historia</ListItem>
          <br /><br />
          <ListItem>
            Fundada en el 2024, Tiendi, es una empresa dedicada a la venta de productos de tecnología y electrónica. Nuestro objetivo es ofrecer a nuestros clientes una amplia gama de productos de alta calidad a precios competitivos.
          </ListItem>
          <br />
          <ListItem>
            En Tiendi, nos esforzamos por brindar un servicio excepcional a nuestros clientes, garantizando una experiencia de compra segura y satisfactoria. Nuestro equipo de profesionales altamente capacitados está siempre dispuesto a ayudar y asesorar a nuestros clientes en la elección de los productos que mejor se adapten a sus necesidades.
          </ListItem>
          <br />
          <ListItem>
            Nos enorgullece ofrecer una amplia selección de productos de marcas reconocidas y de alta calidad, incluyendo teléfonos móviles, ordenadores, tablets, accesorios y mucho más. Además, trabajamos en estrecha colaboración con nuestros proveedores para garantizar que nuestros productos cumplan con los más altos estándares de calidad y seguridad.
          </ListItem>
        </ul>
      </CardInformation>
      <DivEquipo>
        <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="equipo" />
      </DivEquipo>
      <CardInformation>
        <ul className="texto textoSecundario">
          <ListItem className="textTitle">Nuestro Equipo</ListItem>
          <br /><br />
          <ListItem>
            En Tiendi, creemos que nuestro equipo es el motor que impulsa nuestro éxito. Nos enorgullece contar con un equipo de profesionales apasionados y comprometidos que comparten nuestra visión de ofrecer productos y servicios excepcionales a nuestros clientes.
          </ListItem>
          <br />
          <ListItem>
            Nuestro equipo está formado por expertos en tecnología, marketing, ventas, atención al cliente y logística, entre otros. Cada miembro de nuestro equipo aporta su experiencia y conocimientos únicos para garantizar que nuestros clientes reciban el mejor servicio posible.
          </ListItem>
          <br />
          <ListItem>
            Fomentamos un ambiente de trabajo colaborativo y respetuoso, donde cada miembro del equipo se siente valorado y motivado para alcanzar su máximo potencial. Creemos que el éxito de nuestra empresa se basa en el talento y la dedicación de nuestro equipo, y estamos comprometidos a apoyar su crecimiento y desarrollo profesional.
          </ListItem>
          <br />
          <ListItem>
            Si estás interesado en formar parte de nuestro equipo, ¡no dudes en ponerte en contacto con nosotros! Estamos siempre en busca de talento y pasión para unirse a nuestra familia Tiendi.
          </ListItem>
        </ul>
      </CardInformation>
      <Footer />
    </>
    );
    }