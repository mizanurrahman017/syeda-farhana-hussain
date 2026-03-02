import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import {
  FaBullhorn,
  FaMedal,
  FaChevronDown,
  FaTimes,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = ({ scrollToResults }) => {
  const [academicOpen, setAcademicOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calendarModalOpen, setCalendarModalOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleExamResultsClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToResults?.(), 300);
    } else {
      scrollToResults?.();
    }
  };

  return (
    <div className="w-full shadow-md bg-white">

      {/* ================= Top Contact Bar ================= */}
      <div className="bg-[#2f3e55] text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-1">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <FaPhone className="text-xs" /> 01869438544
            </span>
            <span className="flex items-center gap-1">
              <FaEnvelope className="text-xs" /> sfhhs@gmail.com
            </span>
          </div>
          <div className="hidden md:block">
            Established 1965 | EIIN: 130127
          </div>
        </div>
      </div>

      {/* ================= Logo & Hamburger Section ================= */}
      <div className="bg-[#3b5998] border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <NavLink to="/">
              <img src="/logo.png" alt="logo" className="w-12 md:w-16" />
            </NavLink>
            <NavLink to="/" className="leading-tight no-underline">
              <h1 className="text-base md:text-2xl font-bold text-white tracking-wide hover:text-blue-600 transition">
                Syeda Farhana Hussain High School
              </h1>
              <p className="text-[10px] md:text-sm text-white italic">
                শিক্ষা নিয়ে গড়ব দেশ লাল সবুজের বাংলাদেশ
              </p>
            </NavLink>
          </div>

          {/* Desktop Buttons (MD+) */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink
              to="/notices"
              className="flex items-center gap-2 bg-[#2f4e85] text-white px-5 py-2 rounded-full hover:scale-105 transition"
            >
              <FaBullhorn /> Latest Notices
            </NavLink>
            <button
              onClick={handleExamResultsClick}
              className="flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-full hover:scale-105 transition"
            >
              <FaMedal /> Exam Results
            </button>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 bg-white rounded-lg border-2 border-slate-700 flex flex-col gap-1 transition-all active:scale-90"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="text-slate-700 text-xl w-6 h-6 p-0.5" />
              ) : (
                <>
                  <span className="w-6 h-0.5 bg-slate-700 block transition-all"></span>
                  <span className="w-6 h-0.5 bg-slate-700 block transition-all"></span>
                  <span className="w-6 h-0.5 bg-slate-700 block transition-all"></span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ================= Mobile Menu ================= */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white ${mobileMenuOpen
            ? "max-h-[600px] border-b opacity-100 shadow-inner"
            : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 py-6 space-y-4 text-white font-bold bg-[#3b5998]">

          <NavLink
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 hover:text-blue-600"
          >
            <span className="text-lg">🏠</span> হোম
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 hover:text-blue-600"
          >
            <span className="text-lg">📘</span> আমাদের সম্পর্কে
          </NavLink>

          <div className="border-t pt-4">
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer list-none hover:text-blue-600">
                <span className="flex items-center gap-3">
                  <span className="text-lg">🎓</span> একাডেমিক
                </span>
                <FaChevronDown className="text-xs group-open:rotate-180 transition-transform" />
              </summary>
              <div className="mt-4 ml-8 flex flex-col gap-4 text-sm text-white border-l-2 border-blue-100 pl-4">
                <NavLink to="/routine" onClick={() => setMobileMenuOpen(false)}>রুটিন</NavLink>
                <NavLink to="/result" onClick={() => setMobileMenuOpen(false)}>রেজাল্ট</NavLink>
                {/* <button
                  onClick={() => { setCalendarModalOpen(true); setMobileMenuOpen(false); }}
                  className="text-left"
                >
                  একাডেমিক ক্যালেন্ডার
                </button> */}
              </div>
            </details>
          </div>

          <NavLink
            to="/gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 hover:text-blue-600"
          >
            🖼️ গ্যালারি
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 hover:text-blue-600"
          >
            📞 যোগাযোগ
          </NavLink>

        </div>
      </div>

      {/* ================= Notice & Mobile Buttons ================= */}
      <div className="relative">

        {/* Notice Bar */}
        <div className="bg-[#7b5b5b] text-white text-sm">
          <div className="max-w-7xl mx-auto flex items-center gap-4 px-4 py-2">
            <span className="bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded flex-shrink-0">
              NOTICE
            </span>
            <marquee speed="50">
              বার্ষিক ক্রীড়া প্রতিযোগিতা ও পুরস্কার বিতরণ অনুষ্ঠান • ২০২৬ শিক্ষাবর্ষে ভর্তি কার্যক্রম সম্পন্ন • এসএসসি পরীক্ষার্থীদের জন্য বিশেষ ক্লাস শুরু
            </marquee>
          </div>
        </div>

        {/* Mobile Quick Action Buttons */}
        <div className="md:hidden bg-white border-b py-3 px-4">
          <div className="flex justify-center gap-3">
            <NavLink
              to="/notices"
              className="flex items-center gap-2 bg-[#2f4e85] text-white px-4 py-2 rounded-full text-xs shadow hover:bg-blue-700 transition"
            >
              <FaBullhorn /> Notices
            </NavLink>
            <button
              onClick={handleExamResultsClick}
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-xs shadow hover:bg-green-600 transition"
            >
              <FaMedal /> Results
            </button>
          </div>
        </div>

      </div>

      {/* ================= Desktop Main Menu ================= */}
      <div className="bg-[#4f6ea5] text-white hidden md:block">
        <ul className="flex justify-center gap-10 py-3 font-medium">
          <li><NavLink to="/" className="hover:text-yellow-300 transition">হোম</NavLink></li>
          <li><NavLink to="/about" className="hover:text-yellow-300 transition">আমাদের সম্পর্কে</NavLink></li>

          <li className="relative">
            <button
              onClick={() => setAcademicOpen(!academicOpen)}
              className="flex items-center gap-1 hover:text-yellow-300 transition"
            >
              একাডেমিক <FaChevronDown className={`text-xs transition-transform ${academicOpen ? 'rotate-180' : ''}`} />
            </button>

            {academicOpen && (
              <ul className="absolute left-0 mt-1 bg-white text-gray-800 w-48 rounded-md shadow-xl z-50 border border-gray-200">
                <li className="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-700 border-b border-gray-100 transition">
                  <NavLink to="/routine" onClick={() => setAcademicOpen(false)}>রুটিন</NavLink>
                </li>
                <li className="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-700 border-b border-gray-100 transition">
                  <NavLink to="/result" onClick={() => setAcademicOpen(false)}>রেজাল্ট</NavLink>
                </li>
                {/* <li
                  onClick={() => { setCalendarModalOpen(true); setAcademicOpen(false); }}
                  className="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-700 cursor-pointer transition"
                >
                  একাডেমিক ক্যালেন্ডার
                </li> */}
              </ul>
            )}
          </li>

          <li><NavLink to="/gallery" className="hover:text-yellow-300 transition">গ্যালারি</NavLink></li>
          <li><NavLink to="/contact" className="hover:text-yellow-300 transition">যোগাযোগ</NavLink></li>
        </ul>
      </div>

      {/* ================= Calendar Modal ================= */}
      {calendarModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z- p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full relative overflow-hidden shadow-2xl animate-in zoom-in duration-300">
            <div className="flex justify-between items-center p-4 border-b bg-gray-50">
              <h2 className="text-lg font-bold text-gray-800">একাডেমিক ক্যালেন্ডার</h2>
              <button
                onClick={() => setCalendarModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition text-xl"
              >
                ✕
              </button>
            </div>
            <div className="p-4 overflow-auto max-h-[80vh]">
              <img src="/Calendar.jpg" alt="Academic Calendar" className="w-full h-auto rounded-lg shadow-inner" />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Navbar;