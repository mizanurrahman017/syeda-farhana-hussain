import React, { useState } from 'react';

const Routin = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // রুটিন ডাটা (৬টি কার্ডের জন্য)
  const routineData = [
    { id: 1, name: "Class 6", img: "https://via.placeholder.com/150?text=Logo" },
    { id: 2, name: "Class 7", img: "https://via.placeholder.com/150?text=Logo" },
    { id: 3, name: "Class 8", img: "https://via.placeholder.com/150?text=Logo" },
    { id: 4, name: "Class 9", img: "https://via.placeholder.com/150?text=Logo" },
    { id: 5, name: "Class 10", img: "https://via.placeholder.com/150?text=Logo" },
    { id: 6, name: "Class old 10", img: "https://via.placeholder.com/150?text=Logo" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header Section based on image_6ddfa9.png */}
      <div className="bg-[#3b5998] text-white px-[8%] py-12 relative mb-12 shadow-md">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold border-b-4 border-orange-500 inline-block pb-1">
            Routine
          </h1>
        </div>
      </div>

      {/* Routine Cards Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {routineData.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedImage(item.img)}
              className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-orange-400 flex flex-col items-center justify-center cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {/* Routine Icon/Logo Area */}
              <div className="w-24 h-24 mb-6 flex items-center justify-center">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Class/Section Name */}
              <h3 className="text-[#1a365d] font-bold text-lg text-center leading-tight">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* --- Image Zoom Modal (Popup) --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z- flex justify-center items-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white p-2 rounded-lg max-w-4xl w-full relative animate-in zoom-in duration-300 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute -top-12 right-0 text-white text-4xl hover:text-orange-500 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            {/* Large Image with Hover Zoom */}
            <div className="overflow-auto max-h-[85vh] rounded-md border border-gray-100 shadow-inner">
              <img 
                src={selectedImage} 
                alt="Detailed Routine" 
                className="w-full h-auto cursor-zoom-in transition-transform duration-500 hover:scale-125 origin-top"
              />
            </div>
            
            <p className="text-center text-gray-400 mt-2 text-xs italic">
              মাউস দিয়ে হোভার করলে রুটিনটি বড় হয়ে দেখা যাবে
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Routin;