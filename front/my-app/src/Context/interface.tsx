interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
  }
  
  interface ProductCardProps {
    producto?: {
      data?: Product;
    };
  }


  export type { Product, ProductCardProps }