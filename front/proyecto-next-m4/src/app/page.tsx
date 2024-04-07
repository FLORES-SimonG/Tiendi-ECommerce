import Homes from '../components/Home/Home'
import Navbar from '../components/navbar/Navbar'
// import "tailwindcss/tailwind.css"
import Link from 'next/link'
import Product_card from '@/components/product_card/Product_card'




export default function Home() {

  return (
    <div>
      <Navbar/>
     <ul>
      <Link href="/">
      <li>Home Link</li>
      </Link>
      <Link href="/store">

      <li>Store Link</li>
      </Link>
     </ul>
      
      <h1>Home Page</h1>
      <Product_card />

    </div>
  )
}
