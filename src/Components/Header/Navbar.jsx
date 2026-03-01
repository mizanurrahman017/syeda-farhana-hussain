import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaBullhorn, FaMedal } from "react-icons/fa";

const Navbar = () => {

    const [aboutOpen, setAboutOpen] = useState(false);

    return (
        <div className="w-full">

            {/* Top Contact Bar */}
            <div className="bg-[#2f3e55] text-white text-sm">
                <div className="max-w-7xl mx-auto flex justify-between px-4 py-2">

                    <div className="flex gap-6">
                        <p>📞 01869438544</p>
                        <p>✉️ sfhhs@gmail.com</p>
                    </div>

                    <div className="flex gap-6">
                        <p>📅 Established 1965</p>
                        <p>EIIN: 130127</p>
                    </div>

                </div>
            </div>



            {/* Logo Section */}
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

                    {/* Left Side Logo */}
                    <div className="flex items-center gap-4 group cursor-pointer">

                        <img
                            src="/logo.png"
                            alt="logo"
                            className="w-16 transition duration-300 group-hover:scale-110"
                        />

                        <div>
                            <h1 className="text-xl font-bold text-blue-400">
                                Syeda Farhana Hussain High School
                            </h1>

                            <p className="text-gray-500 text-sm">
                                "শিক্ষা নিয়ে গড়ব দেশ লাল সবুজের বাংলাদেশ"
                            </p>
                        </div>

                    </div>



                    {/* Right Side Buttons */}
                    <div className="flex items-center gap-4">

                        {/* Latest Notices */}
                        <NavLink
                            to="/notices"
                            className="flex items-center gap-2 bg-[#2f4e85] text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
                        >
                            <FaBullhorn />
                            Latest Notices
                        </NavLink>

                        {/* Exam Results */}
                        <NavLink
                            to="/results"
                            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-400 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
                        >
                            <FaMedal />
                            Exam Results
                        </NavLink>

                    </div>

                </div>
            </div>


            {/* Notice Bar */}
            <div className="bg-[#7a4f55] text-white">
                <div className="max-w-7xl mx-auto flex items-center gap-3 px-4 py-2">

                    <span className="bg-white text-red-500 text-xs px-2 py-1 rounded font-bold">
                        NOTICE
                    </span>

                    <p className="text-sm">
                        শিক্ষাবর্ষ লটারি অনুযায়ী ভর্তি কার্যক্রম সম্পন্ন
                    </p>

                </div>
            </div>


            {/* Main Navbar */}
            <div className="bg-[#4f6ea5] text-white">

                <div className="max-w-7xl mx-auto">

                    <ul className="flex justify-center items-center gap-10 py-3 font-medium">

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-yellow-300"
                                        : "hover:text-yellow-300"
                                }
                            >
                                হোম
                            </NavLink>
                        </li>


                        {/* About Dropdown */}
                        <li
                            className="relative"
                            onMouseEnter={() => setAboutOpen(true)}
                            onMouseLeave={() => setAboutOpen(false)}
                        >

                            <span className="cursor-pointer hover:text-yellow-300">
                                আমাদের সম্পর্কে
                            </span>

                            {aboutOpen && (
                                <ul className="absolute top-10 left-0 bg-white text-black w-64 shadow-lg rounded">

                                    <li className="hover:bg-gray-100 px-4 py-2">
                                        <NavLink to="/history">
                                            প্রতিষ্ঠানের ইতিহাস
                                        </NavLink>
                                    </li>

                                    <li className="hover:bg-gray-100 px-4 py-2">
                                        <NavLink to="/governing">
                                            গভর্নিং বডি
                                        </NavLink>
                                    </li>

                                    <li className="hover:bg-gray-100 px-4 py-2">
                                        <NavLink to="/teachers">
                                            শিক্ষকদের তথ্য
                                        </NavLink>
                                    </li>

                                    <li className="hover:bg-gray-100 px-4 py-2">
                                        <NavLink to="/students">
                                            শিক্ষার্থীর তথ্য
                                        </NavLink>
                                    </li>

                                    <li className="hover:bg-gray-100 px-4 py-2">
                                        <NavLink to="/staff">
                                            কর্মকর্তা ও কর্মচারীর তথ্য
                                        </NavLink>
                                    </li>

                                    <li className="hover:bg-gray-100 px-4 py-2">
                                        <NavLink to="/approval">
                                            অনুমোদন
                                        </NavLink>
                                    </li>

                                    <li className="hover:bg-gray-100 px-4 py-2">
                                        <NavLink to="/service">
                                            তথ্য সেবা কেন্দ্রের ঠিকানা ও মোবাইল
                                        </NavLink>
                                    </li>

                                </ul>
                            )}

                        </li>


                        <li>
                            <NavLink
                                to="/academic"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-yellow-300"
                                        : "hover:text-yellow-300"
                                }
                            >
                                একাডেমিক
                            </NavLink>
                        </li>


                        <li>
                            <NavLink
                                to="/gallery"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-yellow-300"
                                        : "hover:text-yellow-300"
                                }
                            >
                                গ্যালারি
                            </NavLink>
                        </li>


                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-yellow-300"
                                        : "hover:text-yellow-300"
                                }
                            >
                                যোগাযোগ
                            </NavLink>
                        </li>

                    </ul>

                </div>

            </div>

        </div>
    );
};

export default Navbar;