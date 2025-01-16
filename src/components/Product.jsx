import React, { useState } from "react";
import product1 from "../../public/images/image-product-1.jpg";
import product2 from "../../public/images/image-product-2.jpg";
import product3 from "../../public/images/image-product-3.jpg";
import product4 from "../../public/images/image-product-4.jpg";
import thumbnail1 from "../../public/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../public/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../public/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../public/images/image-product-4-thumbnail.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Slider from "./Slider";

function Product() {
  const [imageURL, setImageURL] = useState(product1);
  function handleSelectImage(url) {
    setImageURL(url);
  }
  return (
    <div className=" mb-4 w-96 sm:w-full md:w-84 lg:w-96">
      {/* <img
        className=" mb-4 h-72 rounded-lg w-full"
        src={imageURL}
        alt="Product image"
      /> */}
      <Slider />
      {/* <div className=" hidden sm:flex items-center justify-between">
        <img
          onClick={() => handleSelectImage(product1)}
          className=" w-20 sm:w-16 rounded-md"
          src={thumbnail1}
          alt="product thumbnail"
        />
        <img
          onClick={() => handleSelectImage(product2)}
          className=" w-20 rounded-md"
          src={thumbnail2}
          alt="product thumbnail"
        />
        <img
          onClick={() => handleSelectImage(product3)}
          className=" w-20 rounded-md"
          src={thumbnail3}
          alt="product thumbnail"
        />
        <img
          onClick={() => handleSelectImage(product4)}
          className=" w-20 rounded-md"
          src={thumbnail4}
          alt="product thumbnail"
        />
      </div> */}
    </div>
  );
}

export default Product;
