import React, { useState } from 'react'
import ProductList from './context/ProductList';
import Cart from './context/Cart';
import ProductContext from './context/ProductContext';

const App = () => {
  const [cart,setCart]=useState([])
  const products = [
  {
    id: 1,
    title: "iPhone 15",
    price: 79999,
    category: "Mobiles",
    rating: 4.8,
   
  },
  {
    id: 2,
    title: "Samsung Galaxy S24",
    price: 69999,
    category: "Mobiles",
    rating: 4.5,

  },
  {
    id: 3,
    title: "MacBook Air M3",
    price: 114999,
    category: "Laptops",
    rating: 4.9,
  
  },
  {
    id: 4,
    title: "Sony Headphones",
    price: 4999,
    category: "Accessories",
    rating: 4.3,
  
  },
  {
    id: 5,
    title: "Apple Watch Series 9",
    price: 39999,
    category: "Watches",
    rating: 4.6,
  }
];

function addToCart(item){
   setCart([...cart,item])
}
function removeCart(id){
    setCart([...cart.filter((item)=>item.id !==id)])
}
console.log(cart)
  return (
    <div>
      <h1>Main Page </h1>
      <ProductContext.Provider value={{products,addToCart,cart,removeCart}}>
<ProductList/>
<Cart/>
      </ProductContext.Provider>
      
    </div>
  )
}

export default App