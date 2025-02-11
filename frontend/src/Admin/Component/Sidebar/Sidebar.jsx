import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTachometerAlt, FaCog, FaBars, FaAngleLeft,  FaUser } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-60" : "w-20"
        } h-screen bg-gray-900 text-white transition-all duration-300 flex flex-col`}
      >
        {/* Toggle Button */}
        <div className="p-4 flex justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none text-xl"
          >
            {isOpen ? <FaAngleLeft /> : <FaBars />}
          </button>
        </div>

        {/* Sidebar Content */}
        <ul className="flex-1">

          <li className="p-3 hover:bg-gray-700 flex items-center">
            <FaTachometerAlt className="text-lg" />
            {isOpen && (<Link to="/admin/dashboard" className="ml-3 text-sm text-white">
            Dashboard
            </Link>)}
          </li>

          <li className="p-3 hover:bg-gray-700 flex items-center">
            <FaBars className="text-lg" /> {/* Change the icon */}
            {isOpen && (<Link to="/admin/order" className="ml-3 text-sm text-white">
            Order Management
            </Link>)}
          </li>

          <li className="p-3 hover:bg-gray-700 flex items-center">
            <FaBars className="text-lg" /> {/* Icon */}
            {isOpen && (
              <Link to="/admin/staff" className="ml-3 text-sm text-white">
                Staff Management
              </Link>
            )}
          </li>

          <li className="p-3 hover:bg-gray-700 flex items-center">
            <FaBars className="text-lg" /> {/* Icon */}
            {isOpen && (
              <Link to="/admin/salary" className="ml-3 text-sm text-white">
                Salary Management
              </Link>
            )}
          </li>

          <li className="p-3 hover:bg-gray-700 flex items-center">
            <FaCog className="text-lg" />
            {isOpen && <span className="ml-3 text-sm">Settings</span>}
          </li>
        </ul>

        {/* Footer Section */}
        <div className="p-4 text-gray-400 text-xs">
          {isOpen && <span>© 2024 cremy caffe</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
