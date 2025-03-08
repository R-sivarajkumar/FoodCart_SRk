import React, { useState } from 'react';
import './App.css';
 


function Content({ addToCart }) {

    // Array of menu items stored as objects
    const menuItems = [
        {
            id: 1,
            name: "Paneer Butter Masala",
            price: 250,
            img: "https://media.istockphoto.com/id/885881832/photo/butter-paneer-masala-traditional-indian-paneer-curry.jpg?s=612x612&w=0&k=20&c=iJkpQbnpoKYSPAx24u1HDm0OyXNLyQ0HzXgRfwaq-iQ="
        },
        {
            id: 2,
            name: "Chicken Biryani",
            price: 320,
            img: "https://i.pinimg.com/736x/c4/b6/7e/c4b67e3f8e2efc18ded5dd2840439e7a.jpg"
        },
        {
            id: 3,
            name: "Veg Thali",
            price: 180,
            img: "https://img.freepik.com/free-psd/indian-cuisine-isolated-transparent-background_191095-32402.jpg?ga=GA1.1.512962524.1740072696&semt=ais_hybrid"
        },

        {
            id: 4,
            name: "Butter Naan",
            price: 40,
            img: "https://media.istockphoto.com/id/1140752821/photo/indian-naan-bread-with-garlic-butter-on-wooden-table.jpg?s=612x612&w=0&k=20&c=lTtokg-1e2OxzzPDHhtwWLR_43TCRBTcmpJU08OL6nQ="
        },
        {
            id: 5,
            name: "Dal Tadka",
            price: 160,
            img: "https://media.istockphoto.com/id/525433997/photo/dal-tadka-indian-food-india.jpg?s=612x612&w=0&k=20&c=YMvLt16Sqz6cZGqi3PnxqiBdCgLLmP805PFnRbIbPHA="
        },
        {
            id: 6,
            name: "Chocolate Brownie",
            price: 120,
            img: "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvd25pZXxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            id: 7,
            name: "Gulab Jamun",
            price: 50,
            img: "https://bakewithzoha.com/wp-content/uploads/2023/04/gulab-jamun-featured.jpg"
        },
        {
            id: 8,
            name: "Puran Poli",
            price: 500,
            img: "https://media.istockphoto.com/id/941615770/photo/puran-poli-holige-obbattu-indian-sweet-flatbread-selective-focus.jpg?s=612x612&w=0&k=20&c=lM9oey5IvXg2rgRHWcxKC4m9GZCs-AB8Rngwud5G38o="
        },
        {
            id: 9,
            name: "Veg Thali",
            price: 400,
            img: "https://img.freepik.com/free-psd/indian-cuisine-isolated-transparent-background_191095-32402.jpg?ga=GA1.1.512962524.1740072696&semt=ais_hybrid"
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

export default Content;
