import React, { useContext } from 'react'
import ProductContext from './ProductContext'

const Cart = () => {
 const {cart,removeCart}=   useContext(ProductContext)
  return (
    <div>
        <h2>Cart List</h2>
        <ul>
            {cart.map((item)=>(
                  <li key={item.id}>Id:{item.id},Title:{item.title}<button onClick={()=>{removeCart(item.id)}}>Remove</button></li>
            ))}
        </ul>
    </div>
  )
}

export default Cart