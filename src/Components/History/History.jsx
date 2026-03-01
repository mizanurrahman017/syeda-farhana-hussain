import React from "react";
import { NavLink } from "react-router";
import schoolImg from "/school banner.jpg"; // তোমার image এখানে বসাও

const History = () => {
    return (
        <section className="bg-gray-100 py-16 px-6 md:px-16">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Left Content */}
                <div>

                    <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-3">
                        Welcome to SFHHS
                    </h2>

                    {/* underline design */}
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-16 h-1 bg-blue-400 rounded"></div>
                        <div className="w-8 h-1 bg-yellow-500 rounded"></div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                        সৈয়দা ফারহানা হোসেন উচ্চ বিদ্যালয়  ১৯৬৫ সালে প্রতিষ্ঠিত বাংলাদেশের অন্যতম
                        স্বনামধন্য শিক্ষা প্রতিষ্ঠান। প্রতিষ্ঠার পর থেকেই এই প্রতিষ্ঠানটি শিক্ষার্থীদের
                        মানসম্মত শিক্ষা প্রদান, নৈতিক মূল্যবোধ গঠন এবং নেতৃত্বের গুণাবলী বিকাশে গুরুত্বপূর্ণ
                        ভূমিকা পালন করে আসছে। দক্ষ শিক্ষকবৃন্দের তত্ত্বাবধানে শিক্ষার্থীরা একাডেমিক
                        উৎকর্ষতার পাশাপাশি সহশিক্ষা কার্যক্রমেও অংশগ্রহণের সুযোগ পায়।
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8 text-justify">
                        আমাদের লক্ষ্য হলো শিক্ষার্থীদের একজন আদর্শ, সৎ এবং দায়িত্বশীল নাগরিক হিসেবে
                        গড়ে তোলা, যাতে তারা ভবিষ্যতে দেশ ও সমাজের উন্নয়নে গুরুত্বপূর্ণ অবদান রাখতে পারে।
                    </p>

                    {/* NavLink Button */}
                    {/* <NavLink
                        to="/about"
                        className="inline-block bg-blue-400 hover:bg-blue-700 text-white px-7 py-3 rounded-full font-semibold shadow-md transition duration-300"
                    >
                        Learn More About Us
                    </NavLink> */}

                </div>

                {/* Right Image */}
                <div className="flex justify-center">

                    <div className="bg-white p-4 rounded-xl shadow-lg">

                        <img
                            src={schoolImg}
                            alt="School"
                            className="rounded-lg w-full max-w-md object-cover"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default History;