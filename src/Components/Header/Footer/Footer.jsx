import React from "react";
import { NavLink } from "react-router";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2f3e52] text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-5">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Logo Section */}
          <div>
            <img src="/logo.png" alt="logo" className="w-16 mb-4" />

            <p className="text-gray-300 leading-relaxed">
              "শিক্ষার নিয়ে গড় দেশ লাল সবুজের বাংলাদেশ"
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-4">
              <a className="bg-blue-600 p-2 rounded-full hover:scale-110 transition">
                <FaFacebookF />
              </a>

              <a className="bg-blue-500 p-2 rounded-full hover:scale-110 transition">
                <FaLinkedinIn />
              </a>

              <a className="bg-red-600 p-2 rounded-full hover:scale-110 transition">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-2 text-gray-300">

              <li>
                <NavLink to="/" className="hover:text-white transition">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/" className="hover:text-white transition">
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className="hover:text-white transition">
                  Contact Us
                </NavLink>
              </li>

              <li>
                <NavLink to="/admission" className="hover:text-white transition">
                  Admission
                </NavLink>
              </li>

              <li>
                <NavLink to="/notices" className="hover:text-white transition">
                  Notices
                </NavLink>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>

            <div className="space-y-3 text-gray-300">

              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> সিলেট
              </p>

              <p className="flex items-center gap-2">
                <FaPhoneAlt /> 01711273586
              </p>

              <p className="flex items-center gap-2">
                <FaEnvelope /> sfhhs@gmail.com
              </p>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-500 mt-8 pt-5">

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-gray-300 text-sm text-center md:text-left">

            <p>
              © 2026 Syeda Farhana Hussain High School. All rights reserved.
            </p>

            <p>
              Developed by <span className="font-semibold">Mizanur Rahman Asif</span>
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;