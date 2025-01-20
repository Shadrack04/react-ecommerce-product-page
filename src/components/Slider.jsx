import React, { useRef } from "react";
import { useState } from "react";
import NavigationBtn from "./NavigationBtn";
import product1 from "../../public/images/image-product-1.jpg";
import product2 from "../../public/images/image-product-2.jpg";
import product3 from "../../public/images/image-product-3.jpg";
import product4 from "../../public/images/image-product-4.jpg";
import thumbnail1 from "../../public/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../public/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../public/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../public/images/image-product-4-thumbnail.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  { image: product1, thumbnail: thumbnail1 },
  { image: product2, thumbnail: thumbnail2 },
  { image: product3, thumbnail: thumbnail3 },
  { image: product4, thumbnail: thumbnail4 },
];

function Slider({ isLargeScreen, setOpenLightBox }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const swiperRef = useRef(null);

  function handleNext() {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  }

  function handlePrev() {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  }

  return (
    <div className=" relative px-2 sm:px-0 rounded-lg">
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onClick={() => setOpenLightBox(true)}
        className=" mb-4 sm:h-80"
        ref={swiperRef}
        modules={[FreeMode, Navigation, Pagination, Thumbs]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        pagination={{ clickable: true }}
        loop={false}
      >
        <NavigationBtn handlePrev={handlePrev} handleNext={handleNext} />
        {images.map((product) => (
          <SwiperSlide key={product.image}>
            <img
              className=" rounded-lg"
              src={product.image}
              alt={product.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden sm:block">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          <div className="">
            {images.map((thumb, index) => (
              <SwiperSlide key={thumb.thumbnail} className="">
                <img
                  style={
                    activeIndex === index
                      ? {
                          transform: "scale(1.1)",
                          border: "2px solid hsl(26, 100%, 55%)",
                          filter: "grayscale(30%)",
                        }
                      : {}
                  }
                  className=" sm:w-[90%] sm:h-[90%] mx-auto rounded-md hover:skew-y-6 transition-all duration-300 origin-top-right "
                  src={thumb.thumbnail}
                  alt={thumb.thumbnail}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
