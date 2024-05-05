import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Tabscategory from "../components/TabsCategory";

const Home = () => {
  return (
    <div>
      <section>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="h-[400px] flex items-center justify-center">
              sider 1
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="h-[400px] flex items-center justify-center">
              sider 1
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="h-[400px] flex items-center justify-center">
              sider 2
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="h-[400px] flex items-center justify-center">
              sider 3
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="h-[400px] flex items-center justify-center">
              sider 4
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="h-[400px] flex items-center justify-center">
              sider 5
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="h-[400px] flex items-center justify-center">
              sider 6
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="h-[400px] flex items-center justify-center">
              sider 7
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="h-[400px] flex items-center justify-center">
              sider 8{" "}
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section>
        <Tabscategory />
      </section>
    </div>
  );
};

export default Home;
