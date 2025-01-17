import React, { useState } from 'react';

// const SalaryManagement = () => {
//   const [salaries, setSalaries] = useState([
//     { 
//       id: 1, 
//       name: 'John Doe', 
//       position: 'Manager', 
//       workingHours: 160, 
//       totalSalary: 5000 
//     },
//     { 
//       id: 2, 
//       name: 'Jane Smith', 
//       position: 'Barista', 
//       workingHours: 150, 
//       totalSalary: 3000 
//     },
//   ]);

//   const [newSalary, setNewSalary] = useState({ name: '', position: '', workingHours: '', totalSalary: '' });
//   const [editIndex, setEditIndex] = useState(null);

//   // Handle Input Change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewSalary({ ...newSalary, [name]: value });
//   };

//   // Add Salary
//   const addSalary = () => {
//     if (newSalary.name && newSalary.position && newSalary.workingHours && newSalary.totalSalary) {
//       setSalaries([
//         ...salaries, 
//         { 
//           id: salaries.length + 1, 
//           ...newSalary, 
//           workingHours: parseFloat(newSalary.workingHours), 
//           totalSalary: parseFloat(newSalary.totalSalary) 
//         },
//       ]);
//       setNewSalary({ name: '', position: '', workingHours: '', totalSalary: '' });
//     } else {
//       alert('Please fill out all fields!');
//     }
//   };

//   // Edit Salary
//   const editSalary = (index) => {
//     setEditIndex(index);
//     setNewSalary(salaries[index]);
//   };

//   // Update Salary
//   const updateSalary = () => {
//     const updatedList = [...salaries];
//     updatedList[editIndex] = { 
//       ...updatedList[editIndex], 
//       ...newSalary, 
//       workingHours: parseFloat(newSalary.workingHours), 
//       totalSalary: parseFloat(newSalary.totalSalary) 
//     };
//     setSalaries(updatedList);
//     setNewSalary({ name: '', position: '', workingHours: '', totalSalary: '' });
//     setEditIndex(null);
//   };

//   // Remove Salary
//   const removeSalary = (id) => {
//     const filteredList = salaries.filter((salary) => salary.id !== id);
//     setSalaries(filteredList);
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-6">Salary Management</h1>

//       {/* Salary List */}
//       <div className="mb-6">
//         <h2 className="text-lg font-semibold mb-4">Salary Details</h2>
//         <table className="w-full border-collapse bg-white shadow-lg rounded-md">
//           <thead>
//             <tr>
//               <th className="border-b p-2 text-left">ID</th>
//               <th className="border-b p-2 text-left">Name</th>
//               <th className="border-b p-2 text-left">Position</th>
//               <th className="border-b p-2 text-left">Working Hours</th>
//               <th className="border-b p-2 text-left">Total Salary</th>
//               <th className="border-b p-2 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {salaries.map((salary, index) => (
//               <tr key={salary.id}>
//                 <td className="border-b p-2">{salary.id}</td>
//                 <td className="border-b p-2">{salary.name}</td>
//                 <td className="border-b p-2">{salary.position}</td>
//                 <td className="border-b p-2">{salary.workingHours} hrs</td>
//                 <td className="border-b p-2">${salary.totalSalary}</td>
//                 <td className="border-b p-2">
//                   <button
//                     onClick={() => editSalary(index)}
//                     className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => removeSalary(salary.id)}
//                     className="bg-red-500 text-white px-3 py-1 rounded-md"
//                   >
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Add/Edit Form */}
//       <div className="bg-white shadow-lg p-6 rounded-md">
//         <h2 className="text-lg font-semibold mb-4">{editIndex !== null ? 'Edit Salary' : 'Add New Salary'}</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={newSalary.name}
//             onChange={handleInputChange}
//             className="border p-2 rounded-md"
//           />
//           <input
//             type="text"
//             name="position"
//             placeholder="Position"
//             value={newSalary.position}
//             onChange={handleInputChange}
//             className="border p-2 rounded-md"
//           />
//           <input
//             type="number"
//             name="workingHours"
//             placeholder="Working Hours"
//             value={newSalary.workingHours}
//             onChange={handleInputChange}
//             className="border p-2 rounded-md"
//           />
//           <input
//             type="number"
//             name="totalSalary"
//             placeholder="Total Salary"
//             value={newSalary.totalSalary}
//             onChange={handleInputChange}
//             className="border p-2 rounded-md"
//           />
//         </div>
//         <button
//           onClick={editIndex !== null ? updateSalary : addSalary}
//           className="bg-green-500 text-white px-4 py-2 rounded-md"
//         >
//           {editIndex !== null ? 'Update Salary' : 'Add Salary'}
//         </button>
//       </div>
//     </div>
//   );
// };

const  SalaryManagement = () => {
  return(
    <div>

    </div>
  );
}

export default SalaryManagement;
