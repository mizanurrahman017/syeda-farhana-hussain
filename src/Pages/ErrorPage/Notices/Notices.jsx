import React, { useState } from 'react';

const noticeData = [
  {
    id: 1,
    title: "জুনিয়র বৃত্তি প্রাপ্ত ছাত্র/ছাত্রীদের পরিসংখ্যান - ২০২৫",
    date: "February 26, 2026",
    category: "NOTICEBOARD",
    image: "/notice.png" 
  },
  {
    id: 2,
    title: "বার্ষিক ক্রীড়া প্রতিযোগিতা ও পুরস্কার বিতরণী অনুষ্ঠান",
    date: "January 20, 2026",
    category: "GENERAL",
    image: "/notice.png"
  },
  {
    id: 3,
    title: "শোক বার্তা",
    date: "December 30, 2025",
    category: "NOTICEBOARD",
    image: "/notice.png"
  }
];

const Notices = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
      {/* Blue Header Section */}
      <div className="bg-[#3b5998] text-white px-[8%] py-16 relative">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold border-b-4 border-orange-500 inline-block pb-1">Notices</h1>
          <p className="mt-4 text-blue-100 opacity-90">Stay updated with our latest announcements, events, and important information.</p>
        </div>
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 text-8xl opacity-10 hidden lg:block">
          📢
        </div>
      </div>

      {/* Notice Cards Container - Added MT-16 to avoid clashing with header */}
      <div className="max-w-5xl mx-auto px-4 mt-16 pb-20 space-y-6">
        {noticeData.map((notice) => (
          <div key={notice.id} className="bg-white p-6 rounded-xl shadow-md border-l-[6px] border-[#3b5998] flex flex-col md:flex-row justify-between items-center gap-6 hover:shadow-lg transition-shadow">
            <div className="flex-1 w-full text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{notice.title}</h3>
              <div className="flex items-center gap-6">
                <span className="bg-gray-100 text-gray-500 text-[10px] font-black px-3 py-1 rounded border border-gray-200 tracking-widest">
                  {notice.category}
                </span>
                <span className="text-sm text-gray-400 flex items-center gap-2">
                  📅 {notice.date}
                </span>
              </div>
            </div>
            
            <button 
              onClick={() => setSelectedImage(notice.image)}
              className="px-8 py-2.5 border-2 border-blue-500 text-blue-500 font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 active:scale-95"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* --- Notice Image Modal (Popup) --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z- flex justify-center items-center p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white rounded-2xl p-2 max-w-2xl w-full relative animate-in fade-in zoom-in duration-300 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Icon */}
            <button 
              className="absolute -top-12 right-0 text-white text-4xl font-light hover:text-orange-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            {/* Image Box with Hover Zoom */}
            <div className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
              <img 
                src={selectedImage} 
                alt="Notice" 
                className="w-full h-auto max-h-[80vh] object-contain transition-transform duration-700 cursor-zoom-in hover:scale-150 origin-top"
              />
            </div>
            
            {/* <div className="py-3 text-center">
              <p className="text-gray-500 text-sm font-medium italic">
                💡 মাউস ইমেজ এর ওপর নিয়ে জুম করে দেখুন
              </p>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notices;