import React, { useState } from "react";
import girl from "../assets/images/girlimg.webp";
import triangle1 from "../assets/images/triangle1.webp";
import triangle2 from "../assets/images/triangle2.webp";
import triangle3 from "../assets/images/triangle3.webp";

const Header = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="overflow-hidden" id="head">
        <div className="max-w-[1215px] mx-auto px-3 lg:py-12 pb-5">
          <div className="flex flex-wrap flex-row -mx-3">
            <div
              className="lg:w-1/2 w-full px-3 pt-8 lg:pt-0"
              data-aos="fade-up"
            >
              <div className="flex lg:justify-start justify-center mx-auto gap-5 relative after:absolute after:w-[232px] after:h-[1px] after:bg-[#E5E5E5] after:bottom-[-12%] lg:after:left-[0%]">
                <button
                  onClick={() => handleTab("tab1")}
                  className={`${
                    activeTab === "tab1"
                      ? "!text-[#B00000] relative after:w-full after:h-[1px] after:absolute after:-bottom-[2px] after:left-0 after:bg-[#B00000]"
                      : ""
                  } ff-poppins text-[15px] font-semibold text-[#dbd9d9]`}
                >
                  Hosting
                </button>
                <button
                  onClick={() => handleTab("tab2")}
                  className={`${
                    activeTab === "tab2"
                      ? "!text-[#B00000] relative after:w-full after:h-[1px] after:absolute after:-bottom-[2px]  after:left-0 after:bg-[#B00000]"
                      : ""
                  } ff-poppins text-[15px] font-semibold text-[#dbd9d9]`}
                >
                  Domain
                </button>
                <button
                  onClick={() => handleTab("tab3")}
                  className={`${
                    activeTab === "tab3"
                      ? "!text-[#B00000] relative after:w-full after:h-[1px] after:absolute after:-bottom-[2px]  after:left-0 after:bg-[#B00000]"
                      : ""
                  } ff-poppins text-[15px] font-semibold text-[#dbd9d9]`}
                >
                  SEO{" "}
                </button>
                <button
                  onClick={() => handleTab("tab4")}
                  className={`${
                    activeTab === "tab4"
                      ? "!text-[#B00000] relative after:w-full after:h-[1px] after:absolute after:-bottom-[2px]  after:left-0 after:bg-[#B00000]"
                      : ""
                  } ff-poppins text-[15px] font-semibold text-[#dbd9d9]`}
                >
                  Email
                </button>
              </div>
              {activeTab === "tab1" && (
                <p className="fw-bold">
                  <h2 className="text-[45px] sm:text-[64px] font-poppins font-bold text-[#2E2E2E] lg:max-w-[608px] leading-[77.5px] text-center lg:text-start pt-4">
                    Premium Web Hosting for Your Website
                  </h2>
                  <p className=" font-inter text-[#808080] text-[16px] font-normal lg:max-w-[408px] pt-10 text-center lg:text-start">
                    Blazing fast web hosting for individuals and businesses of
                    all sizes backed by 24x7x365 Support.
                  </p>
                  <div className=" flex gap-5 pt-14 justify-center lg:justify-start">
                    <button
                      class="relative sm:pb-3 sm:pt-2 pb-2 pt-1 sm:px-[18px] px-2.5 group rounded-[8px] overflow-hidden  bg-[#B00000] text-white shadow-[0px_0px_64px0px#B000004D] hover:shadow-black hover:shadow-2xl
                      before:transition-all before:ease-linear before:hover:bg-black duration-300 before:duration-300 before:absolute before:left-[100%] before:bg-transparent before:hover:left-0 before:hover:w-full before:top-0 before:w-full before:h-full border-none"
                    >
                      <span class="relative z-10  text-white font-poppins group-hover:text-white duration-500    sm:text-sm text-xs font-normal leading-[171.429%]">
                        Create an Account
                      </span>
                    </button>
                    <button class="relative sm:pb-3 sm:pt-2 pb-2 pt-1 sm:px-[18px] px-2.5 group rounded-[8px] overflow-hidden border border-black bg-white text-black before:transition-all before:ease-linear before:hover:bg-black duration-300 before:duration-300 before:absolute before:left-[100%] before:bg-transparent before:hover:left-0 before:top-0 before:w-full before:h-full ">
                      <span class="relative z-10  text-black font-poppins group-hover:text-white duration-500    sm:text-sm text-xs font-normal leading-[171.429%]">
                        Choose your plan
                      </span>
                    </button>
                  </div>
                </p>
              )}
              {activeTab === "tab2" && (
                <p className="fw-bold">
                  <h2 className="text-[50px] md:text-[64px] font-poppins font-bold text-[#2E2E2E] lg:max-w-[608px] leading-[77.5px] text-center lg:text-start pt-4">
                    Premium Web Domain for Your Website
                  </h2>
                  <p className=" font-inter text-[#808080] text-[16px] font-normal lg:max-w-[408px] pt-10 text-center lg:text-start">
                    Blazing fast web hosting for individuals and businesses of
                    all sizes backed by 24x7x365 Support.
                  </p>
                  <div className=" flex gap-5 pt-14 justify-center lg:justify-start">
                    <button className="text-white text-[14px] font-normal font-poppins p-[12px] rounded-[8px] bg-[#B00000] shadow-[0px_0px_64px_0px_#B000004D]">
                      Create an Account
                    </button>
                    <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white  group hover:shadow-[0px_0px_64px_0px_#B000004D]">
                      <span className="w-0 h-0 rounded-[8px] bg-[#B00000] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1 hover:!border-none"></span>
                      <span className="w-full p-[12px] text-[14px] font-poppins font-normal rounded-[8px] border-[1px] border-solid border-black hover:border-transparent text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                        Choose your plan
                      </span>
                    </button>
                  </div>
                </p>
              )}
              {activeTab === "tab3" && (
                <p className="fw-bold">
                  <h2 className="text-[50px] md:text-[64px] font-poppins font-bold text-[#2E2E2E] lg:max-w-[608px] leading-[77.5px] text-center lg:text-start pt-4">
                    Premium Web SEO for Your Website
                  </h2>
                  <p className=" font-inter text-[#808080] text-[16px] font-normal lg:max-w-[408px] pt-10 text-center lg:text-start">
                    Blazing fast web hosting for individuals and businesses of
                    all sizes backed by 24x7x365 Support.
                  </p>
                  <div className=" flex gap-5 pt-14 justify-center lg:justify-start">
                    <button className="text-white text-[14px] font-normal font-poppins p-[12px] rounded-[8px] bg-[#B00000] shadow-[0px_0px_64px_0px_#B000004D]">
                      Create an Account
                    </button>
                    <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white  group hover:shadow-[0px_0px_64px_0px_#B000004D]">
                      <span className="w-0 h-0 rounded-[8px] bg-[#B00000] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1 hover:!border-none"></span>
                      <span className="w-full p-[12px] text-[14px] font-poppins font-normal rounded-[8px] border-[1px] border-solid border-black hover:border-transparent text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                        Choose your plan
                      </span>
                    </button>
                  </div>
                </p>
              )}
              {activeTab === "tab4" && (
                <p className="fw-bold">
                  <h2 className="text-[50px] md:text-[64px] font-poppins font-bold text-[#2E2E2E] lg:max-w-[608px] leading-[77.5px] text-center lg:text-start pt-4">
                    Premium Web Hosting for Your Website
                  </h2>
                  <p className=" font-inter text-[#808080] text-[16px] font-normal lg:max-w-[408px] pt-10 text-center lg:text-start">
                    Blazing fast web hosting for individuals and businesses of
                    all sizes backed by 24x7x365 Support.
                  </p>
                  <div className=" flex gap-5 pt-14 justify-center lg:justify-start">
                    <button className="text-white text-[14px] font-normal font-poppins p-[12px] rounded-[8px] bg-[#B00000] shadow-[0px_0px_64px_0px_#B000004D]">
                      Create an Account
                    </button>
                    <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white  group hover:shadow-[0px_0px_64px_0px_#B000004D]">
                      <span className="w-0 h-0 rounded-[8px] bg-[#B00000] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1 hover:!border-none"></span>
                      <span className="w-full p-[12px] text-[14px] font-poppins font-normal rounded-[8px] border-[1px] border-solid border-black hover:border-transparent text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                        Choose your plan
                      </span>
                    </button>
                  </div>
                </p>
              )}
            </div>
            <div
              className="lg:w-1/2 w-full px-3 flex lg:justify-end justify-center lg:pt-0 pt-4 xl:translate-x-14"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="relative">
                <img src={girl} alt="girlimg" />
                <img
                  src={triangle1}
                  alt="1"
                  className="absolute bottom-[45%] left-[-6%]"
                />
                <img
                  src={triangle2}
                  alt="1"
                  className="absolute top-[15%] right-[-4%]"
                />
                <img
                  src={triangle3}
                  alt="1"
                  className="absolute bottom-[15%] right-[-5%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
