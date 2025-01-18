import React from "react";

function NavigationBtn({ handleNext, handlePrev }) {
  return (
    <div>
      <button
        onClick={handlePrev}
        className=" bg-white h-10 w-10 flex items-center justify-center rounded-full absolute top-1/2 z-50 left-4"
      >
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className=" bg-white h-10 w-10 flex items-center justify-center rounded-full absolute top-1/2 z-50 right-4"
      >
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default NavigationBtn;
