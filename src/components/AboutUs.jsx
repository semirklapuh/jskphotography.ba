import React from "react";

export default function AboutUs() {
  return (
<section className="relative min-h-screen px-4 sm:px-6 md:px-16 text-gray-800 overflow-x-hidden">

  {/* Background wrapper */}
  <div className="absolute inset-0 overflow-hidden -z-10">
    {/* Desktop background */}
    <div
      className="hidden md:block w-full h-full bg-cover bg-center blur-md opacity-100 transform scale-110"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/jskphotography.ba-01633.jpg"})`,
      }}
    ></div>

    {/* Mobile background */}
    <div
      className="block md:hidden w-full h-full bg-cover bg-center blur-md opacity-100 transform scale-110"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/jskphotography.ba-01428.jpg"})`,
      }}
    ></div>
  </div>

  {/* Content wrapper – slightly lower on mobile */}
  <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full min-h-screen pt-24 md:pt-0">

    {/* Image */}
    <div className="w-48 h-64 sm:w-64 sm:h-64 md:w-80 md:h-96 flex justify-center">
      <img
        src={process.env.PUBLIC_URL + "/images/about-photo.jpg"}
        alt="Jasmina i Semir Klapuh - JSK Photography"
        className="w-full h-full object-cover rounded-2xl shadow-lg"
      />
    </div>

    {/* Text */}
    <div className="w-full md:w-2/3 text-center md:text-left px-2 sm:px-0">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
        O nama
      </h2>

      <p className="text-base sm:text-lg leading-relaxed mb-4 whitespace-pre-line text-white">
        Mi smo <span className="font-semibold">profesionalni fotografi</span>{' '}
        specijalizirani za vjenčanja i portrete. Kroz naš rad razvili smo
        prepoznatljiv stil koji spaja prirodnu estetiku sa elegancijom i
        emocijom, uvijek nastojeći ispričati priču kroz svaki kadar.
      </p>

      <p className="text-base sm:text-lg leading-relaxed mb-4 text-white">
        Posebnu pažnju posvećujemo detaljima, svjetlu i ambijentu, kako
        bismo stvorili fotografije koje odišu autentičnošću i ostavljaju
        trajan dojam. Naša misija je kroz fotografiju prikazati ljepotu
        prostora i trenutka, na način koji povezuje gledaoce s atmosferom i
        pričom iza svakog kadra.
      </p>

      <p className="text-base sm:text-lg mt-6 font-medium text-white">
        Jasmina Klapuh &amp; Semir Klapuh
      </p>
    </div>

  </div>
</section>




  );
}
