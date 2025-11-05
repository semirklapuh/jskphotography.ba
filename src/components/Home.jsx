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

  // Detect screen width for responsive image set
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Desktop images
  const desktopImages = [
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08106.jpg",
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08112.jpg",
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08123.jpg",
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08147.jpg",
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08167.jpg",
  ];

  // Mobile images (use lighter, vertical, or cropped versions)
  const mobileImages = [
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08064.jpg",
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08118.jpg",
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08195.jpg",
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08238.jpg",
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08358.jpg",
  ];

  const images = isMobile ? mobileImages : desktopImages;

  return (
    <div className="relative h-screen w-screen">
      <Header />

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="h-screen w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen w-full bg-center bg-cover"
              style={{ backgroundImage: `url(${src})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
