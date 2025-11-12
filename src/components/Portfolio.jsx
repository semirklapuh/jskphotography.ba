import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const categories = [
    {
      title: "Weddings",
      image:
        "https://ik.imagekit.io/jskphotography/weddings/jskphotography.ba-08147.jpg",
      link: "/portfolio/weddings",
    },
    {
      title: "Events",
      image: "/images/events-cover.jpg",
    },
    {
      title: "Birthdays",
      image: "/images/birthdays-cover.jpg",
    },
    {
      title: "Portraits",
      image: "/images/portraits-cover.jpg",
    },
  ];

  return (
    <section className="min-h-screen mt-[80px] max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-6 w-full h-auto sm:h-[calc(100vh-100px)]">
        {categories.map((cat, index) =>
          cat.link ? (
            <Link
              key={index}
              to={cat.link}
              className="group relative rounded-3xl overflow-hidden shadow-xl cursor-pointer h-[300px] sm:h-full"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition duration-300 flex items-center justify-center">
                <h3 className="text-white text-3xl font-semibold tracking-wide drop-shadow-lg">
                  {cat.title}
                </h3>
              </div>
            </Link>
          ) : (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden shadow-xl cursor-default h-[300px] sm:h-full"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition duration-300 flex items-center justify-center">
                <h3 className="text-white text-3xl font-semibold tracking-wide drop-shadow-lg">
                  {cat.title}
                </h3>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Portfolio;
