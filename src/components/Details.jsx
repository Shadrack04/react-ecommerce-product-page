import React from "react";
import cartIcon from "../../public/images/icon-cart.svg";
import thumbnail1 from "../../public/images/image-product-1-thumbnail.jpg";

function Details({ onClick, handleIncrease, handleDecrease, cart }) {
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div className=" px-4">
      <p className=" font-kumbh text-xl text-[hsl(26_100%_55%)] font-medium mb-2">
        SNEAKER COMPANY
      </p>
      <h1 className=" text-2xl font-bold mb-2">
        Fall Limited Edition Sneakers
      </h1>
      <div className="mb-4">
        <p className=" text-stone-500">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole , they'll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className=" flex sm:flex-col items-center sm:items-start justify-between mb-4">
        <div className=" flex gap-4 items-center mb-4 ">
          <h2 className=" text-3xl font-bold">
            $<span>125.00</span>
          </h2>
          <p className=" py-0.5 px-2 bg-[hsl(26_100%_55%)] text-white text-md font-semibold rounded-md">
            50%
          </p>
        </div>
        <p className=" line-through text-stone-500">
          $<span>250.00</span>
        </p>
      </div>
      <div className=" sm:grid sm:grid-cols-5 gap-4">
        <div className=" col-span-2 mb-4 sm:mb-0 flex items-center justify-between sm:h-fit py-2 px-4 bg-[hsl(223_64%_98%)] rounded-lg ">
          <button
            onClick={() =>
              handleDecrease("Fall Limited Edition Sneakers", cartItemCount)
            }
            className=" text-2xl font-bold text-[hsl(26_100%_55%)]"
          >
            -
          </button>
          <p className=" text-2xl font-bold">{cartItemCount}</p>
          <button
            onClick={() => handleIncrease("Fall Limited Edition Sneakers")}
            className=" text-2xl font-bold text-[hsl(26_100%_55%)]"
          >
            +
          </button>
        </div>
        <button
          onClick={() =>
            onClick({
              name: "Fall Limited Edition Sneakers",
              price: 125.0,
              thumbnail: thumbnail1,
            })
          }
          className=" col-span-3 mb-12 w-full flex items-center justify-center gap-4 py-3 px-4 bg-[hsl(26_100%_55%)] text-l font-bold rounded-lg"
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#000"
              fillRule="nonzero"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Details;
