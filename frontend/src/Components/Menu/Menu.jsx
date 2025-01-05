// import React, { useState } from "react";
// import ImgL from "../../assets/L.png";
// import ImgE from "../../assets/Espresso.png";
// import ImgC from "../../assets/Cappuccino (2).png";
// import ImgM from "../../assets/Mocha.png";
// import ImgI from "../../assets/Iced.png";
// import ImgM2 from "../../assets/Macchiato(2).png";
// import ImgF from "../../assets/Flat-White.png";
// import ImgA from "../../assets/affogato.png";

// const menuItems = [
//   { id: 1, img: ImgE, name: "Espresso", description: "Rich and bold coffee shot.", price: 3.5 },
//   { id: 2, img: ImgL, name: "Latte", description: "Creamy coffee with steamed milk.", price: 4.5 },
//   { id: 3, img: ImgC, name: "Cappuccino", description: "Coffee topped with foamed milk.", price: 4.0 },
//   { id: 4, img: ImgM, name: "Mocha", description: "Coffee with chocolate and whipped cream.", price: 5.0 },
//   { id: 5, img: ImgI, name: "Iced Coffee", description: "Refreshing cold brew.", price: 3.0 },
//   { id: 6, img: ImgM2, name: "Macchiato", description: "Espresso with a touch of milk foam.", price: 3.8 },
//   { id: 7, img: ImgF, name: "Flat White", description: "Velvety smooth coffee with microfoam.", price: 4.2 },
//   { id: 8, img: ImgA, name: "Affogato", description: "Espresso poured over ice cream.", price: 4.8 },
//   { id: 9, img: ImgL, name: "Americano", description: "Espresso with added hot water.", price: 3.0 },
//   { id: 10, img: ImgE, name: "Cold Brew Latte", description: "Cold brew coffee blended with creamy milk.", price: 4.5 },
//   { id: 11, img: ImgL, name: "Caramel Macchiato", description: "Espresso with steamed milk and caramel drizzle.", price: 5.5 },
//   { id: 12, img: ImgE, name: "Irish Coffee", description: "Coffee blended with a hint of whiskey and cream.", price: 6.0 },
// ];

// const Menu = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (item) => {
//     setCart((prevCart) => [...prevCart, item]);
//   };

//   const placeOrder = (item) => {
//     alert(`You have ordered: ${item.name} for $${item.price.toFixed(2)}. Thank you!`);
//   };

//   const removeFromCart = (indexToRemove) => {
//     setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove));
//   };

//   return (
//     <>
//     <span id= "menu">  </span>
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
//       <h1 className="text-4xl font-bold font-cursive text-gray-800 mb-6">Menu</h1>

//       {/* Menu Items Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
//         {menuItems.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
//           >
//             <img
//               src={item.img}
//               alt={item.name}
//               className="w-60 h-32 object-cover mb-4 rounded-full"
//             />
//             <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
//             <p className="text-gray-600 text-center mb-3">{item.description}</p>
//             <p className="text-gray-800 font-bold mb-4">${item.price.toFixed(2)}</p>
//             <div className="flex gap-2">
//               <button
//                 onClick={() => addToCart(item)}
//                 className="bg-primary text-white py-2 px-4 rounded-full hover:bg-primary/90"
//               >
//                 Add to Cart
//               </button>
//               <button
//                 onClick={() => placeOrder(item)}
//                 className="bg-primary text-white py-2 px-4 rounded-full hover:bg-primary/90"
//               >
//                 Order Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Cart Section */}
//       <div className="mt-8 bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart</h2>
//         {cart.length > 0 ? (
//           <ul className="space-y-4">
//             {cart.map((item, index) => (
//               <li
//                 key={index}
//                 className="flex justify-between items-center border-b pb-2"
//               >
//                 <span>{item.name}</span>
//                 <span className="text-gray-600">${item.price.toFixed(2)}</span>
//                 <button
//                   onClick={() => removeFromCart(index)}
//                   className="text-red-500 hover:underline"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-600">Your cart is empty.</p>
//         )}
//         <p className="text-right font-bold text-gray-800 mt-4">
//           Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
//         </p>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Menu;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import ImgL from "../../assets/L.png";
import ImgE from "../../assets/Espresso.png";
import ImgC from "../../assets/Cappuccino (2).png";
import ImgM from "../../assets/Mocha.png";
import ImgI from "../../assets/Iced.png";
import ImgM2 from "../../assets/Macchiato(2).png";
import ImgF from "../../assets/Flat-White.png";
import ImgA from "../../assets/affogato.png";

const menuItems = [
  { id: 1, img: ImgE, name: "Espresso", description: "Rich and bold coffee shot.", price: 3.5 },
  { id: 2, img: ImgL, name: "Latte", description: "Creamy coffee with steamed milk.", price: 4.5 },
  { id: 3, img: ImgC, name: "Cappuccino", description: "Coffee topped with foamed milk.", price: 4.0 },
  { id: 4, img: ImgM, name: "Mocha", description: "Coffee with chocolate and whipped cream.", price: 5.0 },
  { id: 5, img: ImgI, name: "Iced Coffee", description: "Refreshing cold brew.", price: 3.0 },
  { id: 6, img: ImgM2, name: "Macchiato", description: "Espresso with a touch of milk foam.", price: 3.8 },
  { id: 7, img: ImgF, name: "Flat White", description: "Velvety smooth coffee with microfoam.", price: 4.2 },
  { id: 8, img: ImgA, name: "Affogato", description: "Espresso poured over ice cream.", price: 4.8 },
  { id: 9, img: ImgL, name: "Americano", description: "Espresso with added hot water.", price: 3.0 },
  { id: 10, img: ImgE, name: "Cold Brew Latte", description: "Cold brew coffee blended with creamy milk.", price: 4.5 },
  { id: 11, img: ImgL, name: "Caramel Macchiato", description: "Espresso with steamed milk and caramel drizzle.", price: 5.5 },
  { id: 12, img: ImgE, name: "Irish Coffee", description: "Coffee blended with a hint of whiskey and cream.", price: 6.0 },
];

const Menu = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleOrderNow = (item) => {
    navigate("/order", { state: { item } }); // Redirect to order page with item details
  };

  const removeFromCart = (indexToRemove) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
        <h1 className="text-4xl font-bold font-cursive text-gray-800 mb-6">Menu</h1>

        {/* Menu Items Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-60 h-32 object-cover mb-4 rounded-full"
              />
              <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
              <p className="text-gray-600 text-center mb-3">{item.description}</p>
              <p className="text-gray-800 font-bold mb-4">${item.price.toFixed(2)}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => addToCart(item)}
                  className="bg-primary text-white py-2 px-4 rounded-full hover:bg-primary/90"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleOrderNow(item)}
                  className="bg-primary text-white py-2 px-4 rounded-full hover:bg-primary/90"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Section */}
        <div className="mt-8 bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart</h2>
          {cart.length > 0 ? (
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <span id= "menu">{item.name} </span>
                  <span className="text-gray-600">${item.price.toFixed(2)}</span>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}
          <p className="text-right font-bold text-gray-800 mt-4">
            Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
};

export default Menu;
