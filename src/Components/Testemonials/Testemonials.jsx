// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./Testemonials.css";

// import required modules
import { Pagination, Autoplay ,EffectCoverflow} from "swiper/modules";

export default function App() {
  return (
    <>
    <h1
    id="testemonials" > Reviews </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"2"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 1000,
          modifier: 1,
          slideShadows: false,
          initialSlide: 1,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[Autoplay ,EffectCoverflow, Pagination]}
        className="MySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1.1,
          },
          430: {
            slidesPerView: 1.05,
          },
          850: {
            slidesPerView: 2,
          },
        }}
        
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
