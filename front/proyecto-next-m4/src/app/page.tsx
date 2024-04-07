import Homes from '../components/Home/Home'
import Navbar from '../components/navbar/Navbar'
import "tailwindcss/tailwind.css"
import Product_card from '@/components/product_card/Product_card'




export default function Home() {

  return (
    <div>
      <Navbar/>
      <h1>Home</h1>
     
      <h2>Product Card</h2>
      <Product_card />

    </div>
  )
}
