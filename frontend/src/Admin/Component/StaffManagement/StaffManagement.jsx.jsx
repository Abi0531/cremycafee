import React, { useState } from 'react';

const StaffManagement = () => {
  const [staffList, setStaffList] = useState([
    { 
      id: 1, 
      name: 'John Doe', 
      contact: '123-456-7890', 
      address: '123 Elm St', 
      position: 'Manager', 
      email: 'john.doe@example.com' 
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      contact: '987-654-3210', 
      address: '456 Oak St', 
      position: 'Barista', 
      email: 'jane.smith@example.com' 
    },
  ]);

  const [newStaff, setNewStaff] = useState({ name: '', contact: '', address: '', position: '', email: '' });
  const [editIndex, setEditIndex] = useState(null);

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStaff({ ...newStaff, [name]: value });
  };

  // Add Staff
  const addStaff = () => {
    if (newStaff.name && newStaff.contact && newStaff.address && newStaff.position && newStaff.email) {
      setStaffList([...staffList, { id: staffList.length + 1, ...newStaff }]);
      setNewStaff({ name: '', contact: '', address: '', position: '', email: '' });
    } else {
      alert('Please fill out all fields!');
    }
  };

  // Edit Staff
  const editStaff = (index) => {
    setEditIndex(index);
    setNewStaff(staffList[index]);
  };

  // Update Staff
  const updateStaff = () => {
    const updatedList = [...staffList];
    updatedList[editIndex] = { ...updatedList[editIndex], ...newStaff };
    setStaffList(updatedList);
    setNewStaff({ name: '', contact: '', address: '', position: '', email: '' });
    setEditIndex(null);
  };

  // Remove Staff
  const removeStaff = (id) => {
    const filteredList = staffList.filter((staff) => staff.id !== id);
    setStaffList(filteredList);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Staff Management</h1>

      {/* Staff List */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Staff List</h2>
        <table className="w-full border-collapse bg-white shadow-lg rounded-md">
          <thead>
            <tr>
              <th className="border-b p-2 text-left">ID</th>
              <th className="border-b p-2 text-left">Name</th>
              <th className="border-b p-2 text-left">Contact</th>
              <th className="border-b p-2 text-left">Address</th>
              <th className="border-b p-2 text-left">Position</th>
              <th className="border-b p-2 text-left">Email</th>
              <th className="border-b p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffList.map((staff, index) => (
              <tr key={staff.id}>
                <td className="border-b p-2">{staff.id}</td>
                <td className="border-b p-2">{staff.name}</td>
                <td className="border-b p-2">{staff.contact}</td>
                <td className="border-b p-2">{staff.address}</td>
                <td className="border-b p-2">{staff.position}</td>
                <td className="border-b p-2">{staff.email}</td>
                <td className="border-b p-2">
                  <button
                    onClick={() => editStaff(index)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => removeStaff(staff.id)}
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
        <h2 className="text-lg font-semibold mb-4">{editIndex !== null ? 'Edit Staff' : 'Add New Staff'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newStaff.name}
            onChange={handleInputChange}
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={newStaff.contact}
            onChange={handleInputChange}
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={newStaff.address}
            onChange={handleInputChange}
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={newStaff.position}
            onChange={handleInputChange}
            className="border p-2 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newStaff.email}
            onChange={handleInputChange}
            className="border p-2 rounded-md"
          />
        </div>
        <button
          onClick={editIndex !== null ? updateStaff : addStaff}
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          {editIndex !== null ? 'Update Staff' : 'Add Staff'}
        </button>
      </div>
    </div>
  );
};

export default StaffManagement;
