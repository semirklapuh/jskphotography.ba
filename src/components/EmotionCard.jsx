import React from "react";

export default function EmotionCard({ title, text, images, reverse = false }) {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#f8f6f4] px-4 sm:px-8 py-20">
      <div
        className={`max-w-7xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Image Section */}
        <div className="relative md:w-1/2 flex items-center justify-center p-8">
          {/* Main large image */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg w-3/4 h-[450px] md:h-[550px] transition-transform duration-700 ease-out hover:scale-[1.05]">
            <img
              src={images[0]}
              alt={`${title}-main`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top-left smaller image */}
          {images[1] && (
            <div className="absolute top-6 left-6 w-1/3 h-48 md:h-56 overflow-hidden rounded-2xl shadow-md rotate-[-3deg] transition-transform duration-700 ease-out hover:scale-[1.08]">
              <img
                src={images[1]}
                alt={`${title}-secondary`}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Bottom-right smaller image */}
          {images[2] && (
            <div className="absolute bottom-6 right-6 w-1/3 h-48 md:h-56 overflow-hidden rounded-2xl shadow-md rotate-[2deg] transition-transform duration-700 ease-out hover:scale-[1.08]">
              <img
                src={images[2]}
                alt={`${title}-tertiary`}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col justify-center p-10 lg:p-16 text-center md:text-left">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 font-serif">
            {title}
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
