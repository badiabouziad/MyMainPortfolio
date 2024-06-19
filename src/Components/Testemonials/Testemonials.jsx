// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./Testemonials.css";

// import required modules
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

export default function App() {
  return (
    <>
      <h1 id="testemonials"> Reviews </h1>
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
        modules={[Autoplay, EffectCoverflow, Pagination]}
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
            <img src="./IMG/foodie.webp"></img>
            <h4>Foodie Restaurant ,Milan</h4>
          </div>
          <div className="text">
            "Amazing service! The team delivered a stunning, user-friendly
            website that exceeded my expectations. Professional, efficient, and
            highly recommended. Thank you for your excellent work!"
          </div>
        </SwiperSlide>
        <SwiperSlide className="Testemonial">
          <div className="img-name">
            <img src="./IMG/Gericht.webp"></img>
            <h4>Gericht Dinning ,Berlin</h4>
          </div>
          <div className="text">
            "Loved working with these guys! They built an awesome website for us
            that’s super easy to use. Really friendly and quick to respond.
            Highly recommend them!"
          </div>
        </SwiperSlide>
        <SwiperSlide className="Testemonial">
          <div className="img-name">
            <img src="./IMG/hoobank.webp"></img>
            <h4>Hoo bank , Sweden</h4>
          </div>
          <div className="text">
            "The team did a fantastic job on our website. It looks great and
            works perfectly. They were really easy to work with and got
            everything done on time. Thanks a lot!"
          </div>
        </SwiperSlide>
        <SwiperSlide className="Testemonial">
          <div className="img-name">
            <img src="./IMG/colaro.webp"></img>
            <h4>Colaro FF ,France</h4>
          </div>
          <div className="text">
            "So happy with our new site! It’s exactly what we wanted and the
            whole process was smooth and stress-free. The team was super helpful
            and responsive. Definitely recommend them!"
          </div>
        </SwiperSlide>
        <SwiperSlide className="Testemonial">
          <div className="img-name">
            <img src="./IMG/reine.webp"></img>
            <h4>Reine ,Canada</h4>
          </div>
          <div className="text">
            "Great job on our website! The team was super friendly and made
            everything easy to understand. The site looks amazing and works
            perfectly. Would definitely work with them again!"
          </div>
        </SwiperSlide>
        <SwiperSlide className="Testemonial">
          <div className="img-name">
            <img src="./IMG/asian.webp"></img>
            <h4>Steezy ,USA</h4>
          </div>
          <div className="text">
            "Absolutely thrilled with our new website! The team captured the
            essence of our brand perfectly. The design is sleek and the
            functionality is spot on. They were great to work with and super
            responsive. Highly recommend them!"
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
