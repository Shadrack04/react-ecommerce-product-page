import React from "react";
import Slider from "./Slider";

function LightBox({ isLargeScreen, setOpenLightBox }) {
  if (!isLargeScreen) return;

  function handleBackgroundClick(e) {
    if (e.target.classList.contains("lightbox-background")) {
      setOpenLightBox(false);
    }
  }

  return (
    <div
      onClick={handleBackgroundClick}
      className="lightbox-background fixed inset-0 z-50 bg-black bg-opacity-85 flex flex-col items-center justify-center "
    >
      <button
        onClick={() => setOpenLightBox(false)}
        className=" mb-2 w-96 flex justify-end"
      >
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#fff"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <div className=" w-96 h-96 z-50 ">
        <Slider />
      </div>
    </div>
  );
}

export default LightBox;
