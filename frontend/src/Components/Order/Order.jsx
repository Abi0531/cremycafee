import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item || {}; // Retrieve item details from navigation state

  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [quantity, setQuantity] = useState(1); // Default quantity is 1

  const totalPrice = (item.price * quantity).toFixed(2); // Calculate total price

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare order data
    const orderData = {
        itemName: item.name,
        itemPrice: item.price,
        customerName,
        phoneNumber,
        email,
        specialRequests,
        quantity,
        totalPrice,
    };

    try {
        const response = await fetch("http://localhost:5000/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData),
        });

        if (response.ok) {
            alert(`Order placed successfully for ${quantity}x ${item.name}! Total: $${totalPrice}`);
            navigate("/#menu");
        } else {
            alert("Failed to place the order. Please try again.");
        }
    } catch (error) {
        console.error("Error submitting order:", error);
        alert("An error occurred. Please try again later.");
    }
};

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Order</h1>

      {/* Order Details Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{item.name}</h2>
        <img
          src={item.img}
          alt={item.name}
          className="w-60 h-32 object-cover mb-4 rounded-lg mx-auto"
        />
        <p className="text-gray-600 text-center mb-2">{item.description}</p>
        <p className="text-gray-800 font-bold text-center mb-4">${item.price.toFixed(2)} each</p>

        {/* Order Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 font-semibold mb-1">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-800 font-semibold mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 font-semibold mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="requests" className="block text-gray-800 font-semibold mb-1">
              Special Requests
            </label>
            <textarea
              id="requests"
              className="w-full px-4 py-2 border rounded-lg"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="block text-gray-800 font-semibold mb-1">
              Quantity
            </label>
            <input
              id="quantity"
              type="number"
              min="1"
              className="w-full px-4 py-2 border rounded-lg"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              required
            />
          </div>

          {/* Total Price Display */}
          <div className="text-center text-lg font-semibold text-gray-800 mb-4">
            Total Cost: <span className="text-primary">${totalPrice}</span>
          </div>



          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;
