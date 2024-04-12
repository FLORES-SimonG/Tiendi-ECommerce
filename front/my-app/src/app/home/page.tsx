'use client'
// import Product_card from '@/components/product_card/Product_card'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
// import Products_cards from '@/components/products_cards/Procucts_cards'
import HomeContainer from '../../components/HomeConteiner/HomeConteiner';
import PreFooter from '@/components/PreFooter/PreFooter';




export default function Home() {
  return (
    <div>

      
    <Header/>
    <Navbar/>
    
  
    
    {/* <h1> ESTÁS EN EL Home Page</h1>
   <h2>ESTE ES EL HOME CONTEINER:</h2> */}
   <HomeContainer/>
   <PreFooter/>
    <Footer/>

  </div>
  );
}
