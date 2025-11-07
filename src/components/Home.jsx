import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const desktopImages = [
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08106.jpg",
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08112.jpg",
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08123.jpg",
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08147.jpg",
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08167.jpg",
  ];

  const mobileImages = [
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08064.jpg",
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08118.jpg",
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08195.jpg",
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08238.jpg",
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08358.jpg",
  ];

  const images = isMobile ? mobileImages : desktopImages;

  return (
    <div className="relative w-screen h-screen">
      {/* Header floating above */}
      <Header />

      {/* Swiper covers full viewport */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
