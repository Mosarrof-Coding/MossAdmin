"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Beautiful Landscape",
    description: "Enjoy the breathtaking scenery.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "City Lights",
    description: "Experience the vibrant nightlife.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Mountain Adventure",
    description: "Get ready for the thrill of a lifetime.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Sunny Beach",
    description: "Relax on the sunny shores.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
];

const Slide = ({ slide }) => (
  <div className="relative shadow-lg rounded-lg w-full h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
    <img
      src={slide.image}
      alt={slide.title}
      className="w-full h-full object-cover"
      loading="lazy"
    />
    <div className="bottom-4 left-4 absolute bg-black bg-opacity-50 p-3 rounded-md max-w-xs text-white">
      <h3 className="font-semibold text-lg">{slide.title}</h3>
      <p className="text-sm">{slide.description}</p>
    </div>
  </div>
);

const Controls = ({ onPrev, onNext }) => (
  <>
    <button
      onClick={onPrev}
      aria-label="Previous Slide"
      className="top-1/2 left-2 absolute bg-black bg-opacity-40 hover:bg-opacity-70 p-2 rounded-full text-white transition -translate-y-1/2"
    >
      <ChevronLeft size={24} />
    </button>
    <button
      onClick={onNext}
      aria-label="Next Slide"
      className="top-1/2 right-2 absolute bg-black bg-opacity-40 hover:bg-opacity-70 p-2 rounded-full text-white transition -translate-y-1/2"
    >
      <ChevronRight size={24} />
    </button>
  </>
);

const Pagination = ({ current, onClick }) => (
  <div className="flex justify-center space-x-2 mt-2">
    {slides.map((_, idx) => (
      <button
        key={idx}
        onClick={() => onClick(idx)}
        aria-label={`Go to slide ${idx + 1}`}
        className={`w-3 h-3 rounded-full transition-colors ${
          idx === current ? "bg-primary" : "bg-gray-300"
        }`}
      />
    ))}
  </div>
);

const Carousel = () => {
  const total = slides.length;

  // 1. Auto smooth horizontal sliding
  const [autoIndex, setAutoIndex] = useState(0);
  const autoSlideRef = useRef();
  useEffect(() => {
    autoSlideRef.current = () => setAutoIndex((i) => (i + 1) % total);
  });
  useEffect(() => {
    const interval = setInterval(() => autoSlideRef.current(), 3000);
    return () => clearInterval(interval);
  }, []);

  // 2. Click controlled smooth horizontal sliding
  const [smoothIndex, setSmoothIndex] = useState(0);
  const smoothPrev = () => setSmoothIndex((i) => (i - 1 + total) % total);
  const smoothNext = () => setSmoothIndex((i) => (i + 1) % total);

  // 3. Click controlled smooth vertical sliding
  const [verticalIndex, setVerticalIndex] = useState(0);
  const verticalPrev = () => setVerticalIndex((i) => (i - 1 + total) % total);
  const verticalNext = () => setVerticalIndex((i) => (i + 1) % total);

  // 4. Default manual slide no animation
  const [defaultIndex, setDefaultIndex] = useState(0);
  const defaultPrev = () => setDefaultIndex((i) => (i > 0 ? i - 1 : i));
  const defaultNext = () => setDefaultIndex((i) => (i < total - 1 ? i + 1 : i));

  return (
    <div className="mx-auto p-6">
      <h2 className="mb-12 font-bold text-3xl text-center">
        4 Carousel Styles
      </h2>
      <div className="gap-8 space-y-16 grid grid-cols-1 lg:grid-cols-2">
        {/* 1. Auto Smooth Horizontal Slide */}
        <div>
          <h3 className="mb-4 font-semibold text-xl">
            1. Auto Smooth Horizontal Slide
          </h3>
          <div className="relative shadow-lg rounded-lg h-64 sm:h-72 overflow-hidden">
            <div
              className="flex h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${autoIndex * 100}%)` }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="relative flex-shrink-0 w-full h-full"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="bottom-4 left-4 absolute bg-black bg-opacity-50 p-3 rounded-md max-w-xs text-white">
                    <h3 className="font-semibold text-lg">{slide.title}</h3>
                    <p className="text-sm">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Click Controlled Smooth Horizontal Slide */}
        <div>
          <h3 className="mb-4 font-semibold text-xl">
            2. Click Controlled Smooth Horizontal Slide
          </h3>
          <div className="relative shadow-lg rounded-lg h-64 sm:h-72 overflow-hidden">
            <div
              className="flex h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${smoothIndex * 100}%)` }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="relative flex-shrink-0 w-full h-full"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="bottom-4 left-4 absolute bg-black bg-opacity-50 p-3 rounded-md max-w-xs text-white">
                    <h3 className="font-semibold text-lg">{slide.title}</h3>
                    <p className="text-sm">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Controls onPrev={smoothPrev} onNext={smoothNext} />
            <Pagination current={smoothIndex} onClick={setSmoothIndex} />
          </div>
        </div>

        {/* 3. Click Controlled Smooth Vertical Slide */}
        <div>
          <h3 className="mb-4 font-semibold text-xl">
            3. Click Controlled Smooth Vertical Slide
          </h3>
          <div className="relative shadow-lg rounded-lg h-64 sm:h-72 overflow-hidden">
            <div
              className="h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateY(-${verticalIndex * 100}%)` }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="relative w-full h-64 sm:h-72"
                  style={{ height: "100%" }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="bottom-4 left-4 absolute bg-black bg-opacity-50 p-3 rounded-md max-w-xs text-white">
                    <h3 className="font-semibold text-lg">{slide.title}</h3>
                    <p className="text-sm">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Controls onPrev={verticalPrev} onNext={verticalNext} />
            <Pagination current={verticalIndex} onClick={setVerticalIndex} />
          </div>
        </div>

        {/* 4. Default Manual Slide (no animation) */}
        <div>
          <h3 className="mb-4 font-semibold text-xl">
            4. Default Manual Slide (No Animation)
          </h3>
          <div className="relative shadow-lg rounded-lg h-64 sm:h-72">
            <Slide slide={slides[defaultIndex]} />
            <Controls onPrev={defaultPrev} onNext={defaultNext} />
            <Pagination current={defaultIndex} onClick={setDefaultIndex} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
