import React from "react";

export default function AboutUs() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-16 pt-24 bg-white text-gray-800 min-h-screen">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={process.env.PUBLIC_URL + "/images/about-photo.jpg"} // your photo (e.g. portrait of both of you)
          alt="Jasmina i Semir Klapuh - JSK Photography"
          className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 md:pl-12 text-center md:text-left">
        <h2 className="text-3xl font-semibold mb-4 text-[#B3A398]">
          O nama
        </h2>

        <p className="text-lg leading-relaxed mb-4 whitespace-pre-line">
          Mi smo <span className="font-semibold">profesionalni fotografi</span>{' '}
          specijalizirani za vjenčanja i portrete. Kroz naš rad razvili smo
          prepoznatljiv stil koji spaja prirodnu estetiku sa elegancijom i
          emocijom, uvijek nastojeći ispričati priču kroz svaki kadar.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Posebnu pažnju posvećujemo detaljima, svjetlu i ambijentu, kako
          bismo stvorili fotografije koje odišu autentičnošću i ostavljaju
          trajan dojam. Naša misija je kroz fotografiju prikazati ljepotu
          prostora i trenutka, na način koji povezuje gledaoce s atmosferom i
          pričom iza svakog kadra.
        </p>

        <p className="text-lg mt-6 font-medium text-[#B3A398]">
          Jasmina Klapuh &amp; Semir Klapuh
        </p>
      </div>
    </section>
  );
}
