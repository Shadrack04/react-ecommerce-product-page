import React from "react";
import { useState } from "react";
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

function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className=" px-2 mx-auto">
      <Swiper
        className=" mb-4"
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        modules={[FreeMode, Navigation, Pagination, Thumbs]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        pagination={{ clickable: true }}
      >
        {images.map((product) => (
          <SwiperSlide key={product.image}>
            <img src={product.image} alt={product.image} />
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
            {images.map((thumb) => (
              <SwiperSlide key={thumb.thumbnail} className="">
                <img
                  className=" w-full rounded-md "
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
