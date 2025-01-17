import React, { useEffect, useState } from "react";

const AdminHome = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch orders from the API
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/orders"); // Adjust API URL if needed
        if (!response.ok) {
          throw new Error(`Failed to fetch orders. Status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Invalid JSON response from the server.");
        }

        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error("Expected an array but received invalid data.");
        }
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading orders...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white shadow-lg p-4 rounded-md">
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-2xl font-bold">{orders.length}</p>
        </div>
        <div className="bg-white shadow-lg p-4 rounded-md">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-2xl font-bold">
            $
            {orders
              .reduce((total, order) => total + parseFloat(order.total_price || 0), 0)
              .toFixed(2)}
          </p>
        </div>
        <div className="bg-white shadow-lg p-4 rounded-md">
          <h2 className="text-lg font-semibold">Pending Reviews</h2>
          <p className="text-2xl font-bold">
            {orders.filter((order) => order.status === "inprogress").length}
          </p>
        </div>
        <div className="bg-white shadow-lg p-4 rounded-md">
          <h2 className="text-lg font-semibold">Delivered Reviews</h2>
          <p className="text-2xl font-bold">
            {orders.filter((order) => order.status === "delivered").length}
          </p>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white shadow-lg p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2 text-left">Order ID</th>
              <th className="border-b p-2 text-left">Customer</th>
              <th className="border-b p-2 text-left">Status</th>
              <th className="border-b p-2 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id}>
                  <td className="border-b p-2">#{order.id}</td>
                  <td className="border-b p-2">{order.customer_name}</td>
                  <td
                    className={`border-b p-2 ${
                      order.status === "completed"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {order.status}
                  </td>
                  <td className="border-b p-2">
                    ${parseFloat(order.total_price).toFixed(2)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-2 text-center">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHome;
