// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MediaCard from "../MediaCard/MediaCard";
import LeftNavigation from "../LeftNavigation/LeftNavigation";
import RightNavigation from "../RightNavigation/RightNavigation";
import styles from "./Carousel.module.css";

export default function Carousel({ data, section }) {
  return (
    <div className={styles.carouselContainer}>
      <LeftNavigation className={`${styles.leftNav} left-nav-${section}`} />
      <RightNavigation className={`${styles.rightNav} right-nav-${section}`} />
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={6}
        // navigation
        navigation={{
          nextEl: `.right-nav-${section}`,
          prevEl: `.left-nav-${section}`,
        }}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        // slidesPerGroup={3}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <MediaCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
