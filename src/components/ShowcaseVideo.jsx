import React from "react";

export default function ShowcaseVideo({
videoSrc = process.env.PUBLIC_URL + "/videos/jskphotographyWEB.mp4",
  poster = process.env.PUBLIC_URL + "/images/showcase-poster.jpg",
  height = "h-[100vh]",
  className = "",
}) {
  return (
    <section className={`relative w-full ${height} overflow-hidden shadow-xl ${className}`}>      
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content slot */}
      <div className="relative z-10 flex items-center justify-center h-full text-white px-4">
        <div className="text-center">
          <h6 className="!text-5xl md:text-6xl font-semibold drop-shadow-lg">
            Zabilježimo ono što je najvažnije
          </h6>
          <p className="mt-4 text-lg md:text-xl opacity-90 drop-shadow-lg">
            Vaše emocije. Vaša ljubav. Vaša priča.
          </p>
        </div>
      </div>
    </section>
  );
}
