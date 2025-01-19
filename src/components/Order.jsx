import React from "react";

function Order({ cart, handleCheckout, setOpenOrder }) {
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div
      onClick={() => setOpenOrder(false)}
      className=" fixed inset-0 bg-black bg-opacity-50 z-50"
    >
      <div className="absolute flex items-center justify-end top-16 mt-1 z-50 w-full box-border ">
        <div className="sm:w-96 h-60 bg-white w-full rounded-lg sm:shadow-lg">
          <div className=" h-16 border-b-2 p-4">
            <h1 className=" text-xl font-medium">Cart</h1>
          </div>
          {cart.length > 0 ? (
            <div>
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
                      <p className="text-stone-600">
                        $<span>{cart[0].price.toFixed(2)}</span>
                      </p>
                      <p className=" text-stone-600">
                        x<span>{cartItemCount}</span>
                      </p>
                      <p className=" text-xl font-semibold">
                        $<spn>{(cart[0].price * cartItemCount).toFixed(2)}</spn>
                      </p>
                    </div>
                  </div>
                </div>
                <button className="">🗑</button>
              </div>
              <button
                onClick={handleCheckout}
                className=" col-span-3 mb-12 mx-auto w-80 flex items-center justify-center gap-4 py-3 px-4 bg-[hsl(26_100%_55%)] hover:bg-[#ff7d1aab] text-l font-bold rounded-lg"
              >
                Checkout
              </button>
            </div>
          ) : (
            <p className=" text-center justify-self-center">
              Your cart is empty
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Order;
