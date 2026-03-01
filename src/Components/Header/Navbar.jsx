import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { FaBullhorn, FaMedal, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = ({ scrollToResults }) => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [academicOpen, setAcademicOpen] = useState(false);
  const [calendarModalOpen, setCalendarModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleExamResultsClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToResults?.(), 100);
    } else {
      scrollToResults?.();
    }
  };

  return (
    <div className="w-full shadow-md">
      {/* Logo + Actions */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-4">
            <NavLink to="/">
              <img src="/logo.png" alt="Logo" className="w-16 transition duration-300 hover:scale-110" />
            </NavLink>
            <div>
              <NavLink to="/" className="no-underline">
                <h1 className="text-xl font-bold text-blue-400 cursor-pointer">
                  Syeda Farhana Hussain High School
                </h1>
                <p className="text-gray-500 text-sm cursor-pointer">
                  "শিক্ষা নিয়ে গড়ব দেশ লাল সবুজের বাংলাদেশ"
                </p>
              </NavLink>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink
              to="/notices"
              className="flex items-center gap-2 bg-[#2f4e85] text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
            >
              <FaBullhorn /> Latest Notices
            </NavLink>

            <button
              onClick={handleExamResultsClick}
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-400 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
            >
              <FaMedal /> Exam Results
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-2xl text-gray-700">
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#4f6ea5] text-white">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Menu */}
          <ul className="hidden md:flex justify-center items-center gap-10 py-3 font-medium">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-300" : "hover:text-yellow-300")}>
                হোম
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className="hover:text-yellow-300">
                আমাদের সম্পর্কে
              </NavLink>
            </li>

            {/* Academic Dropdown Click */}
            <li className="relative">
              <button
                onClick={() => setAcademicOpen(!academicOpen)}
                className="flex items-center gap-1 hover:text-yellow-300 focus:outline-none"
              >
                একাডেমিক <FaChevronDown />
              </button>

              {academicOpen && (
                <ul className="absolute top-10 left-0 bg-white text-black w-56 shadow-lg rounded z-50">
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <NavLink to="/routine">রুটিন</NavLink>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <NavLink to="/result">রেজাল্ট</NavLink>
                  </li>
                  <li
                    className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                    onClick={() => setCalendarModalOpen(true)}
                  >
                    একাডেমিক ক্যালেন্ডার
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink to="/gallery" className={({ isActive }) => (isActive ? "text-yellow-300" : "hover:text-yellow-300")}>
                গ্যালারি
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-yellow-300" : "hover:text-yellow-300")}>
                যোগাযোগ
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <ul className="md:hidden flex flex-col gap-4 bg-[#4f6ea5] py-4 text-white px-6">
              <li>
                <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>হোম</NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>আমাদের সম্পর্কে</NavLink>
              </li>
              <li>
                <details>
                  <summary className="cursor-pointer">একাডেমিক</summary>
                  <ul className="ml-4 mt-2 flex flex-col gap-2 text-black bg-white p-2 rounded">
                    <li>
                      <NavLink to="/routine" onClick={() => setMobileMenuOpen(false)}>রুটিন</NavLink>
                    </li>
                    <li>
                      <NavLink to="/result" onClick={() => setMobileMenuOpen(false)}>রেজাল্ট</NavLink>
                    </li>
                    <li>
                      <button onClick={() => setCalendarModalOpen(true)} className="text-left w-full">
                        একাডেমিক ক্যালেন্ডার
                      </button>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <NavLink to="/gallery" onClick={() => setMobileMenuOpen(false)}>গ্যালারি</NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>যোগাযোগ</NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>

   {/* Academic Calendar Modal */}
{calendarModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
    <div className="bg-white max-w-3xl w-full p-6 rounded-xl relative overflow-y-auto max-h-[90vh]">
      <button
        onClick={() => setCalendarModalOpen(false)}
        className="absolute top-3 right-3 text-xl font-bold hover:text-gray-700"
      >
        ✕
      </button>
      <h2 className="text-2xl font-bold text-center mb-4">একাডেমিক ক্যালেন্ডার</h2>
      <img
        src="/public/Calendar.jpg" // তোমার calendar image
        alt="Academic Calendar"
        className="w-full max-h-[70vh] object-contain rounded-lg"
      />
    </div>
  </div>
)}
    </div>
  );
};

export default Navbar;