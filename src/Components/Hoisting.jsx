import React from "react";
import panelimg from "../assets/images/panelimg.webp";
import securedimg from "../assets/images/securedimg.webp";
import speedimg from "../assets/images/speedimg.webp";
import soft from "../assets/images/soft.webp";
import wordpressimg from "../assets/images/wordpressimg.webp";
import cloudfare from "../assets/images/cloudflareimg.webp";
const Hoisting = () => {
  return (
    <div className="lg:pt-20" id="about">
      <div className="max-w-[1284px] mx-auto px-3">
        <div className="flex flex-wrap flex-row -mx-3">
          <div
            className="lg:w-6/12 px-3 w-full"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <p className="text-[#18191F] sm:text-[48px] text-[40px] font-inter font-extrabold leading-[133.333%] text-center lg:text-start">
              True Cloud Web Hosting
            </p>
            <p className="font-inter text-lg font-normal leading-[177.778%] max-w-[573px] pt-4 text-center lg:text-start mx-auto">
              True Cloud Web Hosting All of the hosting packages we offer are
              deployed instantly on our SSD powered cloud. We don’t use
              dedicated servers that operate on single pieces of hardware. Our
              entire infrastructure is built to be reliable, secure, and
              scalable.
            </p>
          </div>
          <div
            className="lg:w-6/12 px-3 w-full"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="flex flex-wrap -mx-3 flex-row pt-5 lg:pt-0">
              <div className="sm:w-4/12 w-1/2 px-3 flex items-center justify-center">
                <img src={panelimg} alt="panelimg" className="" />
              </div>
              <div className="sm:w-4/12 w-1/2 px-3 flex items-center justify-center">
                <img src={securedimg} alt="img" className="" />
              </div>
              <div className="sm:w-4/12 w-1/2 px-3 flex items-center justify-center">
                <img src={speedimg} alt="speedimg" className="" />
              </div>
              <div className="sm:w-4/12 w-1/2 px-3 pt-5 sm:pt-[59px] flex items-center justify-center">
                <img src={soft} alt="softimg" className="" />
              </div>
              <div className="sm:w-4/12 w-1/2 px-3 pt-5 sm:pt-[55px] flex items-center justify-center">
                <img src={wordpressimg} alt="wordpressimg" className="" />
              </div>
              <div className="sm:w-4/12 w-1/2 px-3 pt-5 sm:pt-[45px] flex items-center justify-center">
                <img src={cloudfare} alt="cloudfare" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hoisting;
