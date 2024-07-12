import React, { useEffect, useState } from 'react'
import '../styles/product-page.css'
import ProductCard from '../components/ProductCard'
 const ProductPage = () => {
    const [products, setproducts] = useState([])
    async function loadproducts(){
        const res=await fetch('http://localhost:8083/get-products')
        const data=await res.json()
        setproducts(data)
        console.log(products);
    }
    useEffect(() => {
      loadproducts()
      
    }, [])
    
  return (
    <div className="product-page">
      {products.map((product, product_id) => (
        <ProductCard
          key={product_id}
          image={product.img}
          name={product.name}
          description={product.description}
          mrp={product.mrp}
        />
      ))}
    </div>
  )
}
export default ProductPage