import React, { useState } from 'react';
import dashimg from "../../../Assets/dashimg.png";
import { FaHome, FaBook, FaBell, FaCalendar, FaCog, FaBars, FaTimes ,FaSignOutAlt,FaChartBar} from 'react-icons/fa';

const Studentdash = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-purple-200">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out bg-purple-500 shadow-lg w-64 z-50`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200  bg-purple-500 text-white">
          <h2 className="text-xl font-semibold">Eduplex</h2>
          <button
            className="focus:outline-none"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex flex-col p-4 space-y-4">
          <a href="#dashboard" className="flex items-center space-x-2 text-white hover:text-purple-900">
            <FaHome />
            <span>Dashboard</span>
          </a>
          <a href="#courses" className="flex items-center space-x-2 text-white hover:text-purple-900">
            <FaBook />
            <span>My Courses</span>
          </a>
          <a href="/reviewform" className="flex items-center space-x-2 text-white hover:text-purple-900">
            <FaChartBar />
            <span>Review Form</span>
          </a>

          <a href="#messages" className="flex items-center space-x-2 text-white hover:text-purple-900">
            <FaBell />
            <span>Messages</span>
          </a>
          <a href="#calendar" className="flex items-center space-x-2 text-white hover:text-purple-900">
            <FaCalendar />
            <span>Calendar</span>
          </a>
          <a href="#settings" className="flex items-center space-x-2 text-white hover:text-purple-900">
            <FaCog />
            <span>Settings</span>
          </a>
          <a href="#logout" className="flex items-center space-x-2 text-white hover:text-purple-900">
            <FaSignOutAlt />
            <span>Logout</span>
          </a>

          <div >
            <img src={dashimg} alt="" />
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="flex justify-between items-center bg-white p-4 shadow-md">
          <button
            className="focus:outline-none" // Menu button always visible on all screens
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            <FaBars />
          </button>
          <h1 className="sm:text-base font-semibold lg:text-xl md:text-xl">Welcome Students!👋</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border border-gray-300 rounded-full"
            />
            <img
              src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* New Courses */}
            <section className="lg:col-span-2 bg-white rounded-lg p-6 shadow">
              <h2 className="text-lg font-semibold mb-4">New Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <h3 className="text-lg font-semibold">Content Writing</h3>
                  <p className="text-sm">Data Research</p>
                  <span className="block mt-2 text-sm text-gray-500">4.8 Rating</span>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold">Usability Testing</h3>
                  <p className="text-sm">UX/UI Design</p>
                  <span className="block mt-2 text-sm text-gray-500">5.0 Rating</span>
                </div>
                <div className="p-4 bg-pink-50 rounded-lg">
                  <h3 className="text-lg font-semibold">Photography</h3>
                  <p className="text-sm">Art and Design</p>
                  <span className="block mt-2 text-sm text-gray-500">4.6 Rating</span>
                </div>

              </div>
            </section>

            {/* Activity Overview */}
            <section className="lg:col-span-1 bg-purple-400 rounded-lg p-6 shadow">
              <h2 className="text-lg font-semibold mb-4 text-white">Activity Chart</h2>
              <div className="h-32 bg-white flex items-center justify-center">
                <p>Activity Chart Placeholder</p>
              </div>
            </section>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Daily Schedule */}
            <section className="lg:col-span-2 bg-white rounded-lg p-6 shadow">
              <h2 className="text-lg font-semibold mb-4">Daily Schedule</h2>
              <ul className="space-y-2">
                <li className="bg-green-100 p-2 rounded">Design System - 12:00 PM</li>
                <li className="bg-yellow-100 p-2 rounded">Typography - 1:00 PM</li>
                <li className="bg-blue-100 p-2 rounded">Visual Design - 2:00 PM</li>
              </ul>
            </section>

            {/* Assignments */}
            <section className="lg:col-span-1 bg-purple-400 rounded-lg p-6 shadow">
              <h2 className="text-lg font-semibold mb-4 text-white">Analysis Chart</h2>
              <ul className="space-y-2">
                <li className="bg-white p-2 rounded">Market Research - Completed</li>
                <li className="bg-white p-2 rounded">Data Collection - Upcoming</li>
                <li className="bg-white p-2 rounded">Methods of Data - In Progress</li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Studentdash;
