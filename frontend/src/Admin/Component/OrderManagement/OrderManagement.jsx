import React, { useState } from 'react';

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    { 
      id: 1, 
      customerDetails: 'John Doe - john@example.com', 
      menu: 'Latte', 
      status: 'Pending' 
    },
    { 
      id: 2, 
      customerDetails: 'Jane Smith - jane@example.com', 
      menu: 'Cappuccino', 
      status: 'Completed' 
    },
  ]);

  const [newOrder, setNewOrder] = useState({ customerDetails: '', menu: '', status: 'Pending' });
  const [editIndex, setEditIndex] = useState(null);

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  // Add Order
  const addOrder = () => {
    if (newOrder.customerDetails && newOrder.menu) {
      setOrders([
        ...orders, 
        { 
          id: orders.length + 1, 
          ...newOrder 
        },
      ]);
      setNewOrder({ customerDetails: '', menu: '', status: 'Pending' });
    } else {
      alert('Please fill out all fields!');
    }
  };

  // Edit Order
  const editOrder = (index) => {
    setEditIndex(index);
    setNewOrder(orders[index]);
  };

  // Update Order
  const updateOrder = () => {
    const updatedOrders = [...orders];
    updatedOrders[editIndex] = { 
      ...updatedOrders[editIndex], 
      ...newOrder 
    };
    setOrders(updatedOrders);
    setNewOrder({ customerDetails: '', menu: '', status: 'Pending' });
    setEditIndex(null);
  };

  // Remove Order
  const removeOrder = (id) => {
    const filteredOrders = orders.filter((order) => order.id !== id);
    setOrders(filteredOrders);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Order Management</h1>

      {/* Order List */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Orders</h2>
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
            {orders.map((order, index) => (
              <tr key={order.id}>
                <td className="border-b p-2">{order.id}</td>
                <td className="border-b p-2">{order.customerDetails}</td>
                <td className="border-b p-2">{order.menu}</td>
                <td className="border-b p-2">{order.status}</td>
                <td className="border-b p-2">
                  <button
                    onClick={() => editOrder(index)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => removeOrder(order.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Form */}
      <div className="bg-white shadow-lg p-6 rounded-md">
        <h2 className="text-lg font-semibold mb-4">{editIndex !== null ? 'Edit Order' : 'Add New Order'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="customerDetails"
            placeholder="Customer Details"
            value={newOrder.customerDetails}
            onChange={handleInputChange}
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            name="menu"
            placeholder="Menu"
            value={newOrder.menu}
            onChange={handleInputChange}
            className="border p-2 rounded-md"
          />
          <select
            name="status"
            value={newOrder.status}
            onChange={handleInputChange}
            className="border p-2 rounded-md"
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button
          onClick={editIndex !== null ? updateOrder : addOrder}
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          {editIndex !== null ? 'Update Order' : 'Add Order'}
        </button>
      </div>
    </div>
  );
};

export default OrderManagement;
