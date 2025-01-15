import React from "react";
import product1 from "../../public/images/image-product-1.jpg";
import product2 from "../../public/images/image-product-2.jpg";
import product3 from "../../public/images/image-product-3.jpg";

function Product() {
  return (
    <div className="">
      <img
        className=" h-72 w-full sm:w-72"
        src={product1}
        alt="Product image"
      />
    </div>
  );
}

export default Product;
