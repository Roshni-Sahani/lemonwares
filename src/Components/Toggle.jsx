// import React, { useState } from "react";

// const warescards = [
//   {
//     heading: "Starter",
//     paraghraph: "$2.80",
//   },
//   {
//     heading: "Standard",
//     paraghraph: "$4.20",
//   },
//   {
//     heading: "Suprem",
//     paraghraph: "$7.00",
//   },
// ];
// const Toggle = () => {
//   const [toggle, settoggle] = useState(false);
//   const [data, setdata] = useState("tab1");
//   function tabs(tab) {
//     setdata(tab);
//   }
//   function togglebtn() {
//     settoggle(!toggle);
//   }
//   const list = warescards.map((warescards, m) => (
//     <div className="lg:w-1/3 md:w-1/2">
//       <div className="max-w-[300px] rounded-[15px] border-[1.5px] border-solid border-[#c4c4c4] shadow-[0px_0px_4px_0px_#00000040] p-[34px_29px_48px_35px]">
//         <h3 className="text-black font-poppins text-[28px] font-semibold">
//           {warescards.heading}
//         </h3>
//         <p className="font-poppins text-[12px] font-normal text-black pt-2">
//           with all your customers via all conversation channels in one central
//           dashboard.
//         </p>
//         <h2 className="font-poppins text-black text-[42px] font-semibold pt-4 mb-0">
//           {warescards.paraghraph}
//         </h2>
//         {toggle ? (
//           <p className="font-poppins text-[14px] text-black font-light">
//             Per year
//           </p>
//         ) : (
//           <p className="font-poppins text-[14px] text-black font-light">
//             Per month
//           </p>
//         )}

//         {/* <button class="relative h-[50px] w-40 overflow-hidden border border-green-900 bg-white text-green-900 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-green-900 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-green-900 after:duration-500 hover:text-white hover:shadow-green-900 hover:before:h-2/4 hover:after:h-2/4">
//           <span class="relative z-10">Smoosh</span>
//         </button> */}
//         <button className="text-nowrap text-[14px] py-[9px] px-[60px] font-semibold font-poppins text-black rounded-[12px] border-[2px] mt-12 border-black border-solid p-[9px_60px] relative h-[50px] w-40 overflow-hidden  bg-white  shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-green-900 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-green-900 after:duration-500 !hover:text-white hover:shadow-green-900 hover:before:h-2/4 hover:after:h-2/4 text-center flex justify-center items-center">
//           Choose this Plan
//         </button>
//         <div className="flex items-center gap-2 pt-7">
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
//               fill="black"
//             />
//           </svg>
//           <p className="text-[16px] font-inter font-bold text-[#808080]">
//             2GB SSD
//           </p>
//         </div>
//         <div className="flex items-center gap-2 pt-4">
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
//               fill="black"
//             />
//           </svg>
//           <p className="text-[16px] font-inter font-bold text-[#808080]">
//             10GB Bandwidth
//           </p>
//         </div>
//         <div className="flex items-center gap-2 pt-4">
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
//               fill="black"
//             />
//           </svg>
//           <p className="text-[16px] font-inter font-bold text-[#808080]">
//             15 Email Accounts
//           </p>
//         </div>
//         <div className="flex items-center gap-2 pt-4">
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
//               fill="black"
//             />
//           </svg>
//           <p className="text-[16px] font-inter font-bold text-[#808080]">
//             Unlimited Database
//           </p>
//         </div>
//         <div className="flex items-center gap-2 pt-4">
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
//               fill="black"
//             />
//           </svg>
//           <p className="text-[16px] font-inter font-bold text-[#808080]">
//             4 Subdomains
//           </p>
//         </div>

//         <div className="flex items-center gap-2 pt-4">
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
//               fill="black"
//             />
//           </svg>
//           <p className="text-[16px] font-inter font-bold text-[#808080]">
//             1 Parked Domain
//           </p>
//         </div>
//         <div className="flex items-center gap-2 pt-4">
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
//               fill="black"
//             />
//           </svg>
//           <p className="text-[16px] font-inter font-bold text-[#808080]">
//             2 Websites
//           </p>
//         </div>

//         <div className="flex items-center gap-2 pt-4">
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
//               fill="black"
//             />
//           </svg>
//           <p className="text-[16px] font-inter font-bold text-[#808080]">
//             Free SSL
//           </p>
//         </div>
//         <div className="flex items-center gap-2 pt-4">
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z"
//               fill="black"
//             />
//           </svg>
//           <p className="text-[16px] font-inter font-bold text-[#808080]">
//             Softaculous
//           </p>
//         </div>
//       </div>
//     </div>
//   ));
//   return (
//     <>
//       <div className="max-w-[1097px] mx-auto px-3 py-8">
//         <h2 className="font-poppins text-[50px] font-semibold text-black text-center max-w-[650px] mx-auto pt-[133px] pb-[38px]">
//           Ready to get started with Lemon Wares?
//         </h2>
//         <p className="font-poppins text-[25px] font-normal text-black text-center mx-auto pb-20">
//           Choose the package that suits you
//         </p>
//         <div className="flex items-center gap-5 mx-auto justify-center">
//           <p className="font-poppins text-[25px] font-normal text-black">
//             Monthly
//           </p>
//           <div
//             onClick={togglebtn}
//             className="w-[93px] h-[50px] rounded-[73px] bg-[#B00000] duration-500 relative p-[9px] flex items-center"
//           >
//             <div
//               className={`w-[30px] h-[30px] bg-white duration-500 rounded-[50%] absolute ${
//                 toggle
//                   ? "right-[10%]  duration-500"
//                   : "duration-500 right-[60%]"
//               }`}
//             ></div>
//           </div>
//           <p className="font-poppins text-[25px] font-normal text-black">
//             Monthly
//           </p>
//           <button className="font-poppins text-[10px] font-medium text-black rounded-[8px] bg-[#FFE87A] p-[7px_8px]">
//             20% discount
//           </button>
//         </div>
//         <div className="flex gap-24 mx-auto justify-center">
//           <p
//             onClick={() => tabs("tab1")}
//             className={` text-[30px] cursor-pointer font-semibold leading-10 font-poppins text-black`}
//           >
//             {" "}
//             Basic{" "}
//           </p>
//           {/* <p className="font-poppins font-semibold text-[38px] text-[#000]">
//             Premium
//           </p> */}
//         </div>
//         <div className="flex flex-wrap flex-row -mx-3">{list}</div>
//       </div>
//     </>
//   );
// };

// export default Toggle;
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
          <button class="md:px-14 md:pb-[13px] md:pt-2.5 px-12 pb-2 pt-1.5 border-[2px] border-black group overflow-hidden bg-white text-black shadow-2xl rounded-[12px] md:mt-[35px] mt-6 transition-all before:ease-linear hover:border-[#B00000] before:hover:bg-[#B00000] duration-300 before:duration-300 before:absolute before:left-[100%] before:bg-transparent before:hover:left-0 before:hover:w-full before:top-0 before:w-full before:h-full relative ">
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
                toggle ? "bg-[#B00000]" : "bg-black"
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
