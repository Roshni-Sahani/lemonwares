import React, { useState } from "react";

const Backtotop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="overflow-hidden">
      <button
        className="group  flex justify-center items-center p-2 w-[70px] h-[65px] bg-[#0109 2A]  fixed right-[1.7%] bottom-[10px] z-30 transition-all ease-linear duration-300 translate-y-[0%] animate-bounce overflow-hidden "
        onClick={scrollToTop}
        style={{
          display: visible ? "flex " : "none",
        }}
      >
        <div className="h-[50px] w-[180%]  rounded-[10px] cursor-pointer scroll-smooth transform-[all] transform-[.3s] transform-[linear] bg-[#000000]  hover:shadow-[0px_0px_64px0px#B000004D]  flex justify-center items-center">
          <svg
            width="16"
            height="11"
            viewBox="0 0 16 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0.879028L0.938995 7.93903L3.061 10.061L8 5.12103L12.939 10.061L15.061 7.93903L8 0.879028Z"
              fill="white"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default Backtotop;
