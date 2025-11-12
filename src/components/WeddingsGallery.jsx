import React from "react";
import imageUrls from "../data/weddings.json";

const WeddingsGallery = () => {
  return (
    <section className="min-h-screen mt-[80px] max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6 text-center">Weddings</h2>

      {/* Masonry layout using CSS columns */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className="mb-4 break-inside-avoid rounded-lg overflow-hidden"
          >
            <img
              src={`${url}?tr=w-1000`}
              alt={`Wedding photo ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105
                sm:h-[150px] md:h-[200px] lg:h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeddingsGallery;
