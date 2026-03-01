import React, { useEffect, useRef, useState } from "react";

const Banner = () => {

  const slides = [
    { img: "/school banner.jpg", text: "School Building" },
    { img: "/school banner 2.jpg", text: "School Building" },

    { img: "/school banner 3.jpeg", text: "Farewell" },

    { img: "/study tour.jpeg", text: "Study Tour" },
    { img: "/teacher.jpeg", text: "Study Tour" },

    { img: "/february.jpeg", text: "21 February" },
    { img: "/sir.jpeg", text: "21 February" },
  ];

  // duplicate for infinite effect
  const extendedSlides = [...slides, ...slides];

  const [index, setIndex] = useState(0);
  const sliderRef = useRef();

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    setIndex(prev => prev - 1);
  };

  // reset position smoothly
  useEffect(() => {
    if (index >= slides.length) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setIndex(0);
      }, 800);
    }

    if (index < 0) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setIndex(slides.length - 1);
      }, 800);
    }

    setTimeout(() => {
      sliderRef.current.style.transition =
        "transform 0.8s ease-in-out";
    }, 50);

  }, [index]);

  return (
    <div className="max-w-7xl mx-auto mt-6 px-4">

      <div className="relative overflow-hidden rounded-2xl shadow-xl">

        {/* Slides */}
        <div
          ref={sliderRef}
          className="flex"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: "transform 0.8s ease-in-out",
          }}
        >
          {extendedSlides.map((slide, i) => (
            <div key={i} className="min-w-full relative">

              <img
                src={slide.img}
                className="w-full h-[260px] md:h-[500px] object-contain md:object-cover bg-black"
                alt=""
              />

              {/* text overlay */}
              <div className="absolute bottom-0 w-full bg-black/40 py-4 text-center">
                <h2 className="text-white text-xl md:text-2xl font-semibold">
                  {slide.text}
                </h2>
              </div>

            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60"
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 w-full flex justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-8 rounded-full ${index % slides.length === i
                  ? "bg-white"
                  : "bg-white/40"
                }`}
            />
          ))}
        </div>

      </div>

    </div>
  );
};

export default Banner;