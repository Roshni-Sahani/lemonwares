import React, { useState } from "react";

const myArray = [
  {
    heading: "Starter",
    heading2: "$2.80",
    heading3: "₹2.00",
    heading4: "Starter",
  },
  {
    heading: "Standard",
    heading2: "$4.20",
    heading3: "₹3.00",
    heading4: "Standard",
  },
  {
    heading: "Suprem",
    heading2: "$7.00",
    heading3: "₹10.00",
    heading4: "Suprem",
  },
];

const Toggle = () => {
  const [toggle, settoggle] = useState(false);
  const [Premium, setPremium] = useState("tabone");
  function btn() {
    settoggle(!toggle);
  }
  function latest(tab) {
    setPremium(tab);
  }

  const data = myArray.map((myArray, i) => (
    <div className="lg:w-1/3 sm:w-1/2 w-full px-3  justify-center flex mb-5 ">
      <div
        className="card max-w-[299px] w-full rounded-[15px] max-lg:mt-3 border-[1.5px] border-[#C4C4C4] shadow-[0px_0px_4px_0px_#00000040_inset] bg-white md:pt-[34px] sm:pt-7 pt-6 md:pb-12 sm:pb-10 pb-8 md:pl-[35px] pl-7 md:pr-[28px] pr-5
"
        data-aos="flip-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <p className="text-black font-poppins text-[28px] font-semibold leading-[89.286%]">
          {Premium === "tabone" && <div>{myArray.heading}</div>}
          {Premium === "tabsecond" && <div>{myArray.heading4}</div>}
        </p>
        <p className="md:pt-[11px] sm:pt-2 pt-1 text-black text-xs font-normal !leading-[150%] max-w-[237px] font-poppins">
          with all your customers via all conversation channels in one central
          dashboard.
        </p>
        <p className="font-poppins text-black md:text-[42px] text-3xl font-semibold leading-[76.19%] md:pt-7 sm:pt-5 pt-4">
          {Premium === "tabone" && <div>{myArray.heading2}</div>}
          {Premium === "tabsecond" && <div>{myArray.heading3}</div>}
        </p>
        {toggle ? (
          <p className="font-poppins text-[14px] text-black font-light">
            Per year
          </p>
        ) : (
          <p className="font-poppins text-[14px] text-black font-light">
            Per month
          </p>
        )}
        <div className="flex justify-center">
          <button class="md:px-14 md:pb-[13px] md:pt-2.5 px-12 pb-2 pt-1.5 border-[2px] border-black group overflow-hidden bg-white text-black hover:shadow-2xl rounded-[12px] md:mt-[35px] mt-6 transition-all before:ease-linear hover:border-black before:hover:bg-black duration-300 before:duration-300 before:absolute before:left-[100%] before:bg-transparent before:hover:left-0 before:hover:w-full before:top-0 before:w-full before:h-full relative">
            <span class="relative z-10  text-black font-poppins group-hover:text-white duration-500  leading-[ 228.571%] text-nowrap font-semibold  sm:text-sm text-xs">
              Choose this Plan
            </span>
          </button>
        </div>
        <div className="flex items-center md:pt-[35px] pt-7 pb-2 md:pb-4">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
                fill="black"
              />
            </svg>
          </span>
          <p className="text-[#808080] pl-6 font-inter text-base font-bold leading-[150%]">
            2GB SSD
          </p>
        </div>
        <div className="flex items-center md:pb-[15px] pb-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
                fill="black"
              />
            </svg>
          </span>
          <p className="text-[#808080] pl-6 font-inter text-base font-bold leading-[150%]">
            10GB Bandwidth
          </p>
        </div>
        <div className="flex items-center md:pb-[15px] pb-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
                fill="black"
              />
            </svg>
          </span>
          <p className="text-[#808080] pl-6 font-inter text-base font-bold leading-[150%]">
            15 Email Accounts
          </p>
        </div>
        <div className="flex items-center md:pb-[15px] pb-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
                fill="black"
              />
            </svg>
          </span>
          <p className="text-[#808080] pl-6 font-inter text-base font-bold leading-[150%]">
            Unlimited Database
          </p>
        </div>
        <div className="flex items-center md:pb-[15px] pb-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
                fill="black"
              />
            </svg>
          </span>
          <p className="text-[#808080] pl-6 font-inter text-base font-bold leading-[150%]">
            4 Subdomains
          </p>
        </div>
        <div className="flex items-center md:pb-[15px] pb-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
                fill="black"
              />
            </svg>
          </span>
          <p className="text-[#808080] pl-6 font-inter text-base font-bold leading-[150%]">
            1 Parked Domain
          </p>
        </div>
        <div className="flex items-center md:pb-[18px] pb-2 ">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
                fill="black"
              />
            </svg>
          </span>
          <p className="text-[#808080] pl-6 font-inter text-base font-bold leading-[150%]">
            2 Websites
          </p>
        </div>
        <div className="flex items-center md:pb-[15px] pb-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
                fill="black"
              />
            </svg>
          </span>
          <p className="text-[#808080] pl-6 font-inter text-base font-bold leading-[150%]">
            Free SSL
          </p>
        </div>
        <div className="flex items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
                fill="black"
              />
            </svg>
          </span>
          <p className="text-[#808080] pl-6 font-inter text-base font-bold leading-[150%]">
            Softaculous
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className=" lg:pt-32 md:pt-20 sm:pt-12 pt-5" id="account">
      <div className="container max-w-[1097px] mx-auto px-3">
        <div className="flex justify-center flex-col">
          <h2 className="text-black font-poppins text-center mx-auto lg:text-[50px] md:text-5xl sm:text-4xl text-3xl font-semibold !leading-[120%] max-w-[650px]">
            Ready to get started with Lemon Wares?
          </h2>
          <p className="md:pt-9 sm:pt-5 pt-3 text-black font-poppins md:text-[25px] text-xl font-normal leading-[100%] text-center mx-auto">
            Choose the package that suits you
          </p>
          <div className="flex justify-center ml-auto items-center"></div>
          <div className="lg:pt-[57px] md:pt-8 sm:pt-4 flex items-center lg:mb-[85px] md:mb-18 sm:mb-10 mb-8 justify-center">
            <p className=" text-black font-poppins md:text-[25px] text-[20px] font-normal leading-[100%]">
              Monthly
            </p>
            <div
              className={`relative md:w-[93px] w-[63px] h-[30px] md:h-[50px] ml-8  px-[9px] py-[10px] cursor-pointer rounded-[73px] duration-500 ${
                toggle ? "bg-black" : "bg-[#B00000]"
              }`}
              onClick={btn}
            >
              <div
                className={`bg-white md:h-[30px] h-[20px] md:w-[30px] w-[20px] max-md:top-[20%] absolute rounded-full duration-500 transition-all ${
                  toggle ? "right-[10%]" : "left-[10%]"
                }`}
              ></div>
            </div>
            <div className="flex md:flex-row md:gap-[17px] gap-2 max-md:pl-7 max-md:mt-6 flex-col items-center justify-center">
              <p className=" text-black font-poppins md:pl-7 md:text-[25px] text-[20px] font-normal leading-[100%]">
                Yearly
              </p>
              <button className="text-black  font-poppins text-[10px] rounded-[8px] font-medium  leading-[90%] px-2 py-[7px] bg-[#FFE87A]">
                20% discount
              </button>
            </div>
          </div>
          <div className="flex items-center border-b-[4px] lg:mb-24 md:mb-20 sm:mb-14 mb-8 max-w-[856px] justify-center w-full mx-auto">
            <p
              className={`text-black font-poppins md:text-[30px] text-2xl font-semibold leading-[40px] cursor-pointer text-center relative w-1/2 ${
                Premium === "tabone"
                  ? "after:bg-[#B00000] after:w-full after:h-1 after:absolute after:bottom-[-4px] after:z-[2] after:left-0"
                  : ""
              }`}
              onClick={() => latest("tabone")}
            >
              Basic
            </p>
            <p
              className={`text-black font-poppins md:text-[30px] text-2xl font-semibold leading-[40px] cursor-pointer text-center relative w-1/2 ${
                Premium === "tabsecond"
                  ? "after:bg-[#B00000] after:w-full after:h-1 after:absolute after:bottom-[-4px] after:z-[2] after:left-0"
                  : ""
              }`}
              onClick={() => latest("tabsecond")}
            >
              Premium
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap -mx-3 justify-center">
          {data}
        </div>
      </div>
    </div>
  );
};

export default Toggle;
