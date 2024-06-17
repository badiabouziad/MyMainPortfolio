// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./ProjectsSlider.css";

// import required modules
import { EffectCoverflow, Pagination , Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
      <h1 id="projects">My projects</h1>
      <Swiper
        id="ProjectsSlider"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"1.5"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          initialSlide: 1,
        }}
        loop={true}

        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[Autoplay ,EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a
            className="NewWifu"
            href="https://badiabouziad.github.io/Gericht/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./IMG/Frame 1.png" alt="g" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className="NewWifu"
            href="https://badiabouziad.github.io/Restaurant/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./IMG/Frame 2.png" alt="g" className="image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className="NewWifu"
            href="https://badiabouziad.github.io/Bank/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./IMG/Frame 3.png" alt="g" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className="NewWifu"
            href="https://badiabouziad.github.io/Foodie/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./IMG/Frame 4.png" alt="g" />
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
