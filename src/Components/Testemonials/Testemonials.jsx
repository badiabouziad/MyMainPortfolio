// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./Testemonials.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={false}
        navigation={false}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="MySwiper"
      >
        <SwiperSlide className="Testemonial">
          <div className="img-name">
            <img src="./IMG/girl.webp"></img>
            <h4>Sarah Johnson</h4>
          </div>
          <div className="text">
            "Amazing service! The team delivered a stunning, user-friendly
            website that exceeded my expectations. Professional, efficient, and
            highly recommended. Thank you for your excellent work!"
          </div>
        </SwiperSlide>
        <SwiperSlide className="Testemonial">
          <div className="img-name">
            <img src="./IMG/girl.webp"></img>
            <h4>Sarah Johnson</h4>
          </div>
          <div className="text">
            "Amazing service! The team delivered a stunning, user-friendly
            website that exceeded my expectations. Professional, efficient, and
            highly recommended. Thank you for your excellent work!"
          </div>
        </SwiperSlide>
        <SwiperSlide className="Testemonial">
          <div className="img-name">
            <img src="./IMG/girl.webp"></img>
            <h4>Sarah Johnson</h4>
          </div>
          <div className="text">
            "Amazing service! The team delivered a stunning, user-friendly
            website that exceeded my expectations. Professional, efficient, and
            highly recommended. Thank you for your excellent work!"
          </div>
        </SwiperSlide>
        <SwiperSlide className="Testemonial">
            <div className="img-name">
              <img src="./IMG/girl.webp"></img>
              <h4>Sarah Johnson</h4>
            </div>
          <div className="text">
            "Amazing service! The team delivered a stunning, user-friendly
            website that exceeded my expectations. Professional, efficient, and
            highly recommended. Thank you for your excellent work!"
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
