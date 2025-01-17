import React from "react";

function Order({ cart }) {
  return (
    <div className="fixed top-16 mt-2 z-50 left-3 right-3 h-60 bg-white rounded-lg ">
      <div className=" h-16 border-b-2 p-4">
        <h1 className=" text-xl font-medium">Cart</h1>
      </div>
      {cart.length > 0 ? (
        <div className=" flex p-4 gap-2 items-center justify-between">
          <div className="flex gap-4">
            <div>
              <img
                className=" w-14 rounded-md"
                src={cart[0].thumbnail}
                alt={`${cart.name} photo`}
              />
            </div>
            <div>
              <p className=" text-md text-stone-600">
                Fall Limited Edition Sneakers
              </p>
              <div className=" flex gap-1">
                <p className="text-stone-600">$125.000</p>
                <p className=" text-stone-600">
                  x<span>3</span>
                </p>
                <p className=" text-xl font-semibold">$375.000</p>
              </div>
            </div>
          </div>
          <button className="">🗑</button>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}

      <button className=" col-span-3 mb-12 mx-auto w-80 flex items-center justify-center gap-4 py-3 px-4 bg-[hsl(26_100%_55%)] text-l font-bold rounded-lg">
        Checkout
      </button>
    </div>
  );
}

export default Order;
