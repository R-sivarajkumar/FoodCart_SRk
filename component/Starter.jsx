import React from 'react'
import Cart from './Cart';
import './cart.css'
import { useState } from 'react';
import App from '../src/App';

function Starter({addToCart}) {
     

    // Array of menu items stored as objects
    const menuItems = [
        {
          id: 19,
          name: "Punjabi Samosa",
          price: 150,
          img: "https://prashantcorner.com/cdn/shop/files/PUNJABISAMOSA.jpg?v=1689247178"
        },
        {
          id: 20,
          name: "Paneer Pakora",
          price: 180,
          img: "https://www.vegrecipesofindia.com/wp-content/uploads/2013/10/paneer-pakora-recipe14.jpg"
        },
        {
          id: 21,
          name: "Aloo Tikki",
          price: 160,
          img: "https://www.teaforturmeric.com/wp-content/uploads/2024/02/Aloo-Tikki-18-1024x1536.jpg"
        },
        {
          id: 22,
          name: "Hara Bhara Kabab",
          price: 200,
          img: "https://www.vegrecipesofindia.com/wp-content/uploads/2013/01/hara-bhara-kabab-2.jpg"
        },
        {
          id: 23,
          name: "Veg Manchurian",
          price: 220,
          img: "https://www.vegrecipesofindia.com/wp-content/uploads/2024/06/manchurian-gravy.jpg"
        },
        {
          id: 24,
          name: "Dahi Puri",
          price: 180,
          img: "https://ministryofcurry.com/wp-content/uploads/2022/07/Dahi-Puri_-4-1.jpg"
        },
        {
          id: 25,
          name: "Masala Papad",
          price: 100,
          img: "https://www.whiskaffair.com/wp-content/uploads/2020/09/Masala-Papad-2-1.jpg"
        },
        {
          id: 26,
          name: "Chana Chaat",
          price: 150,
          img: "https://www.vegrecipesofindia.com/wp-content/uploads/2019/03/chana-chaat-recipe.jpg"
        },
        {
          id: 27,
          name: "Pani Puri",
          price: 120,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Pani_Puri1.JPG/300px-Pani_Puri1.JPG"
        }
      ];
      

    

    return (
        <>
           <section className="menu">
      <h1>Our Veg Dishes</h1>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)} className='btn'>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>

    


        </>
    );
}

export default Starter
