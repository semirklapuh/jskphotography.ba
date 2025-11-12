import { useState, useEffect } from "react";
import Header from "../components/Header";
import EmotionCard from "../components/EmotionCard";
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
    <div className="relative w-screen h-auto">
      <Header />

      <div className="h-screen">
        {/* Swiper */}
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

      {/* Emotion Card */}
      <EmotionCard
        title="True Emotions"
        text="Every photograph tells a story — not through poses, but through genuine emotions. I capture the fleeting moments that reveal laughter, tears, and connection — the true essence of your wedding day, as it naturally unfolds."
        images={[
          process.env.PUBLIC_URL + "/images/jskphotography.ba-08147.jpg",
          process.env.PUBLIC_URL + "/images/jskphotography.ba-08167.jpg",
          process.env.PUBLIC_URL + "/images/jskphotography.ba-08167.jpg",
        ]}
      />
      <EmotionCard
  title="Our Photography Style"
  text="Our style blends natural emotions with cinematic composition. We focus on capturing authentic moments, soft lighting, and the little details that tell the story of your wedding day. Every shot is carefully framed to reflect elegance, romance, and timeless beauty."
  images={[
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08118.jpg", // main
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08195.jpg", // top-left
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08238.jpg", // bottom-right
  ]}
  reverse={true} // flips images to the right side
/>
<EmotionCard
  title="The Look"
  text="Every glance, every subtle gesture tells a story. We capture your interactions naturally, creating portraits that reflect your true connection. Our goal is to highlight the intimacy, joy, and personality of each couple, turning fleeting moments into timeless memories."
  images={[
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08358.jpg", // main
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08195.jpg", // top-left
    process.env.PUBLIC_URL + "/images/jskphotography.ba-08238.jpg", // bottom-right
  ]}
/>

    </div>
  );
}
