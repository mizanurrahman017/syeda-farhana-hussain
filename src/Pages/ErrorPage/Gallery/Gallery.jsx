import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  // ১০টি ইমেজের ডামি ডাটা
  const galleryData = [
    { id: 1, title: "Study Tour 2025", url: "/study tour.jpeg" },
    { id: 2, title: "Teachers ", url: "/sir.jpeg" },
    { id: 3, title: "Study Tour 2023", url: "/teacher.jpeg" },
    { id: 4, title: "21 february", url: "/february.jpeg" },
    { id: 5, title: "Campus View", url: "/school banner.jpg" },
    { id: 6, title: "Farewell 2025", url: "/school banner 3.jpeg" },
    { id: 7, title: "Shohid Minar", url: "/public/shohid minar.jpeg" },
    { id: 8, title: "Prize Giving", url: "/public/khela.jpeg" },
    { id: 9, title: "Annual Sports", url: "/public/annual sport.jpeg" },
    { id: 10, title: "Campus", url: "/public/campus.jpeg" },
    { id: 11, title: "Program", url: "/public/program.jpeg" },
    { id: 11, title: "SSC BATCH 2025", url: "/public/ssc batch.jpeg" },
    
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-[#3b5998] text-white px-[8%] py-16 relative mb-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold border-b-4 border-orange-500 inline-block pb-1">Photo Gallery</h1>
            <p className="mt-4 text-blue-100 opacity-90">Explore our memorable moments through photos.</p>
          </div>
          <div className="text-7xl opacity-20 hidden md:block">🖼️</div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-blue-900 mb-10">Photo Albums</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryData.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all"
              onClick={() => setSelectedImg(item.url)}
            >
              {/* Image Container */}
              <div className="h-52 overflow-hidden">
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Small Caption Below Image */}
              <div className="p-3 text-center">
                <p className="text-sm font-semibold text-gray-700">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Image Modal (Popup) --- */}
      {selectedImg && (
        <div 
          className="fixed inset-0 bg-black/90 z- flex justify-center items-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-4xl w-full animate-in zoom-in duration-300">
            {/* Close Button */}
            <button 
              className="absolute -top-12 right-0 text-white text-4xl hover:text-orange-500 transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              ✕
            </button>
            
            <img 
              src={selectedImg} 
              alt="Full Size" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;