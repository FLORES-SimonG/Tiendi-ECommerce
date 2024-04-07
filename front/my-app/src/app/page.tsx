'use client'
import Product_card from '@/components/product_card/Product_card'
import Footer from '../components/footer/Footer'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'




export default function Home() {

  return (
    <div>
      <Header/>
      <Navbar/>
    
      
      <h1> ESTÁS EN EL Home Page</h1>
      <Product_card />

      <Footer/>

    </div>
  )
}
