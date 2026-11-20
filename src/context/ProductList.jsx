import React, { useContext } from 'react'
import ProductContext from './ProductContext'

const ProductList = () => {
   const {products,addToCart}= useContext(ProductContext);
   console.log(products)
  return (
    <div>
        <h2>ProductList</h2>
        <ul>
            {products.map((item)=>(
                <li key={item.id}>Id:{item.id},Title:{item.title}<button onClick={()=>{addToCart(item)}}>AddToCart</button></li>
            ))}
        </ul>

    </div>
  )
}

export default ProductList