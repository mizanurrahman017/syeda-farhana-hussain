import { useState } from "react";

const Welcome = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="relative h-screen w-full overflow-hidden">

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            >
                <source src="/view.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10"></div>

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">

                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Welcome to Syeda Farhana Hussain High School, Sylhet
                </h1>

                <p className="text-lg md:text-xl mb-6">
                    Where Excellence in Education Meets Character Development
                </p>

                <div className="flex gap-4">

                    <button className="bg-blue-400 hover:bg-blue-700 px-6 py-3 rounded-3xl font-semibold">
                        Apply for Admission
                    </button>

                    <button
                        onClick={() => setOpenModal(true)}
                        className="border border-white px-6 py-3 rounded-3xl font-semibold hover:bg-white hover:text-black transition"
                    >
                        Discover Our Story
                    </button>

                </div>

            </div>

            {/* Modal */}
            {openModal && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">

                    <div className="bg-white max-w-4xl w-full rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">

                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-400 to-indigo-700 text-white px-8 py-6 relative">

                            <h2 className="text-3xl md:text-4xl font-bold text-center tracking-wide">
                                আমাদের সম্পর্কে
                            </h2>

                            <button
                                onClick={() => setOpenModal(false)}
                                className="absolute right-5 top-4 text-2xl font-bold hover:text-gray-200 transition"
                            >
                                ✕
                            </button>

                        </div>

                        {/* Body */}
                        <div className="p-8 md:p-10 space-y-6 max-h-[70vh] overflow-y-auto">

                            {/* decorative line */}
                            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>

                            <p className="text-gray-700 text-lg leading-relaxed text-justify">
                                সৈয়দা ফারহানা হোসেন উচ্চ বিদ্যালয় বাংলাদেশের অন্যতম স্বনামধন্য ও ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান।
                                প্রতিষ্ঠালগ্ন থেকেই এই প্রতিষ্ঠানটি শিক্ষার্থীদের মানসম্মত শিক্ষা প্রদান, নৈতিক মূল্যবোধ গঠন
                                এবং নেতৃত্বের গুণাবলী বিকাশে গুরুত্বপূর্ণ ভূমিকা পালন করে আসছে। আমাদের লক্ষ্য শুধুমাত্র একাডেমিক
                                উৎকর্ষতা অর্জন নয়, বরং শিক্ষার্থীদেরকে একজন আদর্শ, সৃজনশীল ও দায়িত্বশীল নাগরিক হিসেবে গড়ে তোলা।
                            </p>

                            <p className="text-gray-700 text-lg leading-relaxed text-justify">
                                দক্ষ ও অভিজ্ঞ শিক্ষকবৃন্দের তত্ত্বাবধানে শিক্ষার্থীরা আধুনিক শিক্ষার সকল সুযোগ-সুবিধা পেয়ে থাকে।
                                সহশিক্ষা কার্যক্রম, প্রযুক্তিনির্ভর শিক্ষা এবং নৈতিক শিক্ষার সমন্বয়ে আমরা শিক্ষার্থীদের ভবিষ্যতের
                                জন্য প্রস্তুত করে থাকি। আমাদের প্রতিষ্ঠান শিক্ষার্থীদের আত্মবিশ্বাস, নেতৃত্ব এবং মানবিক গুণাবলী
                                বিকাশে সর্বদা প্রতিশ্রুতিবদ্ধ।
                            </p>

                            <p className="text-gray-700 text-lg leading-relaxed text-justify">
                                সৈয়দা ফারহানা হোসেন উচ্চ বিদ্যালয় সবসময় বিশ্বাস করে যে আজকের শিক্ষার্থীরাই আগামী দিনের ভবিষ্যৎ।
                                তাই আমরা তাদেরকে এমনভাবে গড়ে তুলতে চাই, যাতে তারা দেশ, সমাজ এবং বিশ্বে ইতিবাচক অবদান রাখতে পারে।
                            </p>

                            {/* Footer */}
                            <div className="text-center pt-4">
                                <span className="text-blue-400 font-semibold text-lg">
                                    Excellence • Integrity • Leadership
                                </span>
                            </div>

                        </div>

                    </div>

                </div>
            )}

        </div>
    );
};

export default Welcome;