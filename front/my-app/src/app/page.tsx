'use client'
import Product_card from '@/components/product_card/Product_card'
import Footer from '../components/footer/Footer'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Products_cards from '@/components/products_cards/Procucts_cards'




export default function Home() {

  return (
    <div>
      <Header/>
      <Navbar/>
    
      
      <h1> ESTÁS EN EL Home Page</h1>
      {/* <h2> Aquí se mostrarán los productos</h2> */}
      {/* <Products_cards/> */}
      
      {/* <Product_card /> */}

      <Footer/>

    </div>
  )
}
