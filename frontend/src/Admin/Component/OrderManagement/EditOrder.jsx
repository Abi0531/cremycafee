import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onEdit = (order) => {
    navigate("/editOrder", { state: { order } }); // Navigate to the EditOrder component with the order data
  };

  const onDelete = (orderId) => {
    console.log(`Delete order with ID: ${orderId}`);
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/orders");
        if (!response.ok) {
          throw new Error("Failed to fetch orders.");
        }
        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Order Management</h1>
      {error && <div className="mb-4 text-red-500">{error}</div>}

      <table className="w-full border-collapse bg-white shadow-lg rounded-md">
        <thead>
          <tr>
            <th className="border-b p-2 text-left">Order ID</th>
            <th className="border-b p-2 text-left">Customer Details</th>
            <th className="border-b p-2 text-left">Menu</th>
            <th className="border-b p-2 text-left">Status</th>
            <th className="border-b p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id}>
                <td className="border-b p-2">{order.id}</td>
                <td className="border-b p-2">{order.customer_name}</td>
                <td className="border-b p-2">{order.item_name}</td>
                <td className="border-b p-2">{order.status}</td>
                <td className="border-b p-2">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
                    onClick={() => onEdit(order)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-md"
                    onClick={() => onDelete(order.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-4">
                No orders found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;
