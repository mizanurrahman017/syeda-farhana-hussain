import React, { useState } from 'react';

const Results = () => {
  const [selectedResult, setSelectedResult] = useState(null);

  // রেজাল্ট ডাটা (৬টি কার্ড)
  const resultsData = [
    { id: 1, title: "SSC RESULT-2025", date: "July 28, 2025", image: "https://via.placeholder.com/800x500?text=SSC+Result+Sheet" },
    { id: 2, title: "JSC RESULT-2025", date: "December 15, 2025", image: "https://via.placeholder.com/800x500?text=JSC+Result+Sheet" },
    { id: 3, title: "Class 9 Final Result", date: "December 10, 2025", image: "https://via.placeholder.com/800x500?text=Class+9+Result" },
    { id: 4, title: "Class 8 Final Result", date: "December 10, 2025", image: "https://via.placeholder.com/800x500?text=Class+8+Result" },
    { id: 5, title: "Class 7 Final Result", date: "December 08, 2025", image: "https://via.placeholder.com/800x500?text=Class+7+Result" },
    { id: 6, title: "Class 6 Final Result", date: "December 08, 2025", image: "https://via.placeholder.com/800x500?text=Class+6+Result" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Blue Header Section Based on image_6dcd1b.jpg */}
      <div className="bg-[#3b5998] text-white px-[8%] py-16 relative mb-12 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold border-b-4 border-orange-500 inline-block pb-1 uppercase tracking-wider">
              Academic Results
            </h1>
            <p className="mt-4 text-blue-100 opacity-90">View and download the latest examination results.</p>
          </div>
          <div className="text-7xl opacity-20 hidden md:block">
             {/* Icon from image_6dcd1b.jpg */}
             📋
          </div>
        </div>
      </div>

      {/* Results Grid - Larger Cards */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resultsData.map((result) => (
            <div 
              key={result.id}
              onClick={() => setSelectedResult(result)}
              className="bg-white rounded-xl shadow-lg border-t-8 border-[#3b5998] overflow-hidden cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-2 group"
            >
              {/* Image Preview Area */}
              <div className="h-48 bg-gray-100 relative overflow-hidden">
                <img 
                  src={result.image} 
                  alt={result.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-all">
                   <span className="bg-white/90 text-[#3b5998] px-4 py-2 rounded-full text-sm font-bold shadow-md">Click to View</span>
                </div>
              </div>

              {/* Info Area (Title and Date) */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-black text-gray-800 mb-2 leading-tight">
                  {result.title}
                </h3>
                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm font-medium">
                   <span>📅 Published on:</span>
                   <span>{result.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Result Modal (Popup) --- */}
      {selectedResult && (
        <div 
          className="fixed inset-0 bg-black/95 z- flex justify-center items-center p-4 backdrop-blur-md"
          onClick={() => setSelectedResult(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-5xl w-full relative animate-in zoom-in duration-300 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gray-100 px-6 py-4 flex justify-between items-center border-b">
               <h2 className="text-xl font-bold text-[#3b5998]">{selectedResult.title}</h2>
               <button 
                className="text-gray-500 hover:text-red-500 text-3xl font-light transition-colors"
                onClick={() => setSelectedResult(null)}
              >
                ✕
              </button>
            </div>

            {/* Scrollable Image Area with Zoom */}
            <div className="overflow-auto max-h-[75vh] p-4 bg-gray-200">
              <img 
                src={selectedResult.image} 
                alt="Full Result Sheet" 
                className="mx-auto shadow-lg cursor-zoom-in transition-transform duration-500 hover:scale-125 origin-top"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white text-center border-t">
               <p className="text-sm text-gray-500 italic">💡 মাউস দিয়ে হোভার করলে রেজাল্ট শিটটি বড় হয়ে দেখা যাবে</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;