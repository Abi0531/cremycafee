// import React from "react";

// const ContactPage = () => {
//   return (
//     <>
//     <span id= "contact">  </span>
    
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 bg-primary/10">
//       <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
//         <h1 className="text-3xl font-bold font-cursive text-center mb-6 text-gray-800">Contact Us</h1>
//         <p className="text-center text-gray-600 mb-8">
//           We'd love to hear from you! Fill out the form below, and we'll get back to you shortly.
//         </p>
//         <form>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//               placeholder="Your Name"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//               placeholder="Your Email"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
//               Message
//             </label>
//             <textarea
//               id="message"
//               rows="4"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//               placeholder="Your Message"
//               required
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-dark transition duration-300"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//     </>
//   );
// };

// export default ContactPage;

import React, { useState } from "react";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log('Submitting form data:', formData); // Log form data

    try {
        const response = await axios.post('http://localhost:5000/api/contact', formData);
        console.log('Server response:', response.data); // Log server response
        alert(response.data.message);
        setFormData({ name: "", email: "", message: "" });
    } catch (error) {
        console.error("Error submitting form:", error);
        alert('An error occurred. Please try again.');
    }
};

  

  return (
    <>
      <span id="contact"></span>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 bg-primary/10">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold font-cursive text-center mb-6 text-gray-800">Contact Us</h1>
          <p className="text-center text-gray-600 mb-8">
            We'd love to hear from you! Fill out the form below, and we'll get back to you shortly.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-dark transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
