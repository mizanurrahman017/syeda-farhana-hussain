import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Blue Header Section (Like image_6e35fc.jpg) */}
      <div className="bg-[#3b5998] text-white px-[8%] py-16 relative mb-12 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold border-b-4 border-orange-500 inline-block pb-1">
              Our History
            </h1>
          </div>
          <div className="bg-white text-[#3b5998] w-12 h-12 rounded-full flex items-center justify-center font-serif text-2xl font-bold shadow-lg">
            i
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white shadow-xl rounded-sm border-t-4 border-orange-400 p-8 md:p-16">
          
          {/* Internal Title */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 border-b-2 border-blue-100 inline-block pb-2">
              Our Journey Through Time
            </h2>
          </div>

          {/* Text Content in Bengali */}
          <div className="space-y-8 text-gray-800 text-md md:text-lg leading-relaxed text-justify font-light">
            <section>
              <h3 className="font-bold text-blue-800 mb-2">প্রতিষ্ঠা:</h3>
              <p>
                Syeda Farhana Hussain High School, Motijheel, Dhaka, বাংলাদেশের একটি প্রখ্যাত শিক্ষা প্রতিষ্ঠান। 
                আমরা শিক্ষার্থীদের শুধুমাত্র শিখতে প্রেরণা দিই না, বরং তাদের ব্যক্তিত্ব, নেতৃত্ব এবং 
                সামাজিক দায়িত্ববোধও গড়ে তুলি। প্রতিটি শিক্ষার্থীকে আমাদের অভিজ্ঞ শিক্ষকগণ ব্যক্তিগতভাবে 
                গাইড করে যাতে তারা শিক্ষাগত ও ব্যক্তিগত ক্ষেত্রে সাফল্য অর্জন করতে পারে।
              </p>
            </section>

            <section>
              <h3 className="font-bold text-blue-800 mb-2">আমাদের লক্ষ্য:</h3>
              <p>
                আমাদের শিক্ষাপদ্ধতি কেবল পাঠ্যবই সীমাবদ্ধ নয়। আমরা কো-কারিকুলার কার্যক্রমের মাধ্যমে 
                শিক্ষার্থীদের সৃজনশীলতা, দলগত কাজ এবং সমস্যা সমাধানের দক্ষতা বৃদ্ধি করি। 
                ক্লাসরুম শিক্ষা ও কার্যক্রমের সমন্বয়ে শিক্ষার্থীরা সম্যক জ্ঞান, আত্মবিশ্বাস এবং নেতৃত্বের 
                গুণাবলী অর্জন করে।
              </p>
            </section>

            <section>
              <h3 className="font-bold text-blue-800 mb-2">সাফল্য গাঁথা:</h3>
              <p>
                শিক্ষার্থীরা নিয়মিত জাতীয় ও আন্তর্জাতিক প্রতিযোগিতায় অংশগ্রহণ করে সাফল্য অর্জন করেছে। 
                আমাদের প্রতিষ্ঠান শিক্ষার্থীদের ভবিষ্যতের চ্যালেঞ্জ মোকাবিলা করার জন্য প্রস্তুত করে, 
                যাতে তারা দায়িত্বশীল, দক্ষ ও সৃজনশীল নাগরিক হিসেবে সমাজে অবদান রাখতে পারে।
              </p>
            </section>

            <section>
              <h3 className="font-bold text-blue-800 mb-2">ভবিষ্যৎ পরিকল্পনা:</h3>
              <p>
                আমাদের লক্ষ্য হলো শিক্ষার মান ও চরিত্রগঠনের মাধ্যমে সমাজে ইতিবাচক পরিবর্তন আনা। 
                আমরা চাই প্রতিটি শিক্ষার্থী যেন কেবল জ্ঞানই নয়, বরং নৈতিকতা, নেতৃত্ব এবং সামাজিক 
                দায়িত্ববোধেও উন্নত হয়। Syeda Farhana Hussain High School এ আমরা এক অনন্য শিক্ষা পরিবেশ 
                গড়ে তুলেছি যা শিক্ষার্থীদের সর্বোচ্চ সম্ভাবনা বিকাশে সহায়তা করে।
              </p>
            </section>

            <p className="italic text-gray-500 border-l-4 border-blue-500 pl-4 mt-10">
              "আমরা বিশ্বাস করি, গুণসম্পন্ন শিক্ষা কেবল ব্যক্তিকে নয়, পুরো সমাজকে এগিয়ে নিয়ে যায়।"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;