import './App.css'
import Footer from './Footer.jsx'
import Middle from './Middle.jsx'
import Content from './Content.jsx'
import { useState } from 'react'
import Starter from '../component/Starter.jsx'
import NonVeg from '../component/NonVeg.jsx'
import Cart from '../component/Cart.jsx'

function App() {
 const [cartItems, setCartItems] = useState([]);


  const [selectedCategory, setSelectedCategory] = useState('veg');

  // Function to add item to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Function to remove item from cart
  const removeFromCart = (itemToRemove) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemToRemove.id));
  };
  
  return (
    <>
      <nav>
        <div className="logo"><img src="http://shutterstock.com/image-vector/sr-logo-design-vector-illustration-600w-1855921645.jpg" alt="" /></div>

        <div className="items">
          <li>Home</li>
          <li>Services</li>
          <li>about us</li>
          <li>contact us</li>
        </div>
        <input type="text" name="" placeholder="Search " id="" />
      </nav>
      <Middle />

      <div className="menu-button">
        <button className='menu-icon' onClick={() => setSelectedCategory("veg")}>Veg</button>
        <button className='menu-icon' onClick={() => setSelectedCategory("non-veg")}>Non-Veg</button>
        <button className='menu-icon' onClick={() => setSelectedCategory("starter")}>Starters</button>
      </div>

      

      {/* ✅ Render selected category only */}
      {selectedCategory === "veg" && <Content addToCart={addToCart} />}
      {selectedCategory === "non-veg" && <NonVeg addToCart={addToCart} />}
      {selectedCategory === "starter" && <Starter addToCart={addToCart} />}

      {/* ✅ Cart is always shown */}
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Footer />

    </>
  )
}

export default App
