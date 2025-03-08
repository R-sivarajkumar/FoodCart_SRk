import React from 'react'
import Cart from './Cart';
import './cart.css'
import { useState } from 'react';
 


function NonVeg({addToCart}) {
    

    // Array of menu items stored as objects
    const menuItems = [
        {
            id: 10,
            name: "Spicy Chettinad Chicken",
            price: 300,
            img: "https://cdn.shopify.com/s/files/1/0261/7960/0481/files/chicken_chettinand_made_from_non-veg_spices_480x480.jpg?v=1693671559"
        },
        {
            id: 11,
            name: "Nethili Fish fry",
            price: 350,
            img: "https://cdn.shopify.com/s/files/1/0261/7960/0481/files/Nethili_Fish_fry_480x480.jpg?v=1693671761"
        },
        {
            id: 12,
            name: "Egg Bhurji",
            price: 200,
            img: "https://cdn.shopify.com/s/files/1/0261/7960/0481/files/spicy_egg_bhurji_480x480.jpg?v=1693672157"
        },

        {
            id: 13,
            name: "Lamb Chops",
            price: 400,
            img: "https://cdn.shopify.com/s/files/1/0261/7960/0481/files/lamb_chops_480x480.jpg?v=1693673499"
        },
        {
            id: 14,
            name: "Chicken Biryani",
            price: 320,
            img: "https://i.pinimg.com/736x/c4/b6/7e/c4b67e3f8e2efc18ded5dd2840439e7a.jpg"
        },
        {
            id: 15,
            name: "Butter Chiken",
            price: 550,
            img: "https://cdn.shopify.com/s/files/1/0261/7960/0481/files/butter_chicken_masala_480x480.jpg?v=1693674488"
        },
        {
            id: 16,
            name: "Murgh Dum Biryani",
            price: 250,
            img: "https://cdn.shopify.com/s/files/1/0261/7960/0481/files/murgh_dum_biryani_made_with_biryani_masalas_480x480.jpg?v=1693672447"
        },
        {
            id: 17,
            name: "Fish Makhani",
            price: 500,
            img: "//cdn.shopify.com/s/files/1/0261/7960/0481/files/fish_makhani_curry_480x480.jpg?v=1693672330"
        },
        {
            id: 18,
            name: "Chicken Tikka Masala",
            price: 400,
            img: "https://blog.swiggy.com/wp-content/uploads/2024/09/Image-4_Chicken-Tikka-Masala-1.png"
        },

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

export default NonVeg
