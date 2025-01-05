import React from 'react';

const AdminHome = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white shadow-lg p-4 rounded-md">
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-2xl font-bold">120</p>
        </div>
        <div className="bg-white shadow-lg p-4 rounded-md">
          <h2 className="text-lg font-semibold">New Users</h2>
          <p className="text-2xl font-bold">45</p>
        </div>
        <div className="bg-white shadow-lg p-4 rounded-md">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-2xl font-bold">$7,500</p>
        </div>
        <div className="bg-white shadow-lg p-4 rounded-md">
          <h2 className="text-lg font-semibold">Pending Reviews</h2>
          <p className="text-2xl font-bold">8</p>
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
            <tr>
              <td className="border-b p-2">#12345</td>
              <td className="border-b p-2">John Doe</td>
              <td className="border-b p-2 text-green-600">Completed</td>
              <td className="border-b p-2">$25.00</td>
            </tr>
            <tr>
              <td className="border-b p-2">#12346</td>
              <td className="border-b p-2">Jane Smith</td>
              <td className="border-b p-2 text-yellow-600">Pending</td>
              <td className="border-b p-2">$45.00</td>
            </tr>
            <tr>
              <td className="border-b p-2">#12347</td>
              <td className="border-b p-2">Mike Johnson</td>
              <td className="border-b p-2 text-red-600">Cancelled</td>
              <td className="border-b p-2">$30.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHome;
