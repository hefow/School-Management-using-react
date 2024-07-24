import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaUserGraduate, FaBook, FaClipboardList, FaSignOutAlt, FaSchool, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (

            <div className={`bg-gradient-to-tr from-indigo-500 to-purple-800 text-white font-bold h-full min-h-screen transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
            <div className="flex justify-between items-center p-4">
                <span className={`${isOpen ? 'block' : 'hidden'} text-xl`}>Dashboard</span>
                <button onClick={toggleSidebar} className="focus:outline-none">
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            </div>
            <nav className="space-y-4">
                <Link to="/" className="flex items-center space-x-2 hover:bg-indigo-600 p-2 rounded">
                <FaChalkboardTeacher size={20} />
                <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Teacher</span>
                </Link>
                <Link to="/students" className="flex items-center space-x-2 hover:bg-indigo-600 p-2 rounded">
                <FaUserGraduate size={20} />
                <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Student</span>
                </Link>
                <Link to="/classes" className="flex items-center space-x-2 hover:bg-indigo-600 p-2 rounded">
                <FaSchool size={20} />
                <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Class</span>
                </Link>
                <Link to="/subjects" className="flex items-center space-x-2 hover:bg-indigo-600 p-2 rounded">
                <FaBook size={20} />
                <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Subject</span>
                </Link>
                <Link to="/reports" className="flex items-center space-x-2 hover:bg-indigo-600 p-2 rounded">
                <FaClipboardList size={20} />
                <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Reports</span>
                </Link>
                <Link to="/logout" className="flex items-center space-x-2 hover:bg-indigo-600 p-2 rounded">
                <FaSignOutAlt size={20} />
                <span className={`${isOpen ? 'inline' : 'hidden'} ml-2`}>Logout</span>
                </Link>
            </nav>
            </div>
  );
};

export default Sidebar;
