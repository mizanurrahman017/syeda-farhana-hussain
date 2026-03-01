import React from 'react';

const Contact = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-20">
            {/* হেডার */}
            <div className="mb-10">
                <h1 className="text-4xl font-bold text-blue-900">Contact Us</h1>
                <p className="text-gray-600 mt-2">We are here to answer your questions and provide you with all the information you need.</p>
            </div>

            {/* মেইন কন্টেন্ট */}
            <div className="grid md:grid-cols-2 gap-10 items-start">

                {/* বাম দিক: লোকেশন ম্যাপ */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Location</h2>
                    <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
                        {/* Google Maps iframe */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.926765738659!2d92.16445941536914!3d24.93328030336857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750350b1cce0fc1%3A0x9908e5c037925d51!2sSFH%20High%20School!5e0!3m2!1sen!2sbd!4v1701600000000!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* ডান দিক: কন্টাক্ট ইনফরমেশন */}
                <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-blue-800 mb-6">Contact Information</h2>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-bold text-gray-700">Address</h4>
                            <p className="text-gray-600">সিলেট ,বিয়ানীবাজার,চারখাই ,পঞ্চগ্রাম </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-700">Phone</h4>
                            <p className="text-gray-600">01869438544</p>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-700">Email</h4>
                            <p className="text-gray-600">sfhhs@gmail.com</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h4 className="font-bold text-gray-700 mb-2">Follow Us</h4>
                        <div className="flex gap-4">
                            {/* সোশ্যাল মিডিয়া আইকন */}
                            <span className="p-2 bg-gray-100 rounded-full">f</span>
                            <span className="p-2 bg-gray-100 rounded-full">in</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;