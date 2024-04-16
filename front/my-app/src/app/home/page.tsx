'use client'
// import Product_card from '@/components/product_card/Product_card'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
// import Products_cards from '@/components/products_cards/Procucts_cards'
import HomeContainer from '../../components/HomeConteiner/HomeConteiner';
import PreFooter from '@/components/PreFooter/PreFooter';
import BurgerMenu from '@/components/BurgerMenu';




export default function Home() {
  return (
    <div className=' font-sans leading-relaxed'>

      
    <Header/>
    <BurgerMenu/>
    <Navbar/>
    
  
   <HomeContainer/>
   <PreFooter/>
    <Footer/> 

  </div>
  );
}
