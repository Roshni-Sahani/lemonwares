import React from "react";
import footlogo from "../assets/images/footlogo.webp";
const Footer = () => {
    const roshni = new Date();
    const year = roshni.getFullYear();
  return (
    <div className="bg-[#B00000] lg:pb-20 lg:pt-16 pb-5 pt-5">
      <div className="max-w-[1220px] px-3 mx-auto">
        <div className="flex flex-row flex-wrap -mx-3 lg:pb-[96px] pt-5">
          <div
            className="lg:w-4/12 px-3 w-full"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img src={footlogo} alt="footlogo" />
            <p className="text-[#E6E6E6] text-base font-inter leading-[200%] max-w-[296px] pt-4 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elem
            </p>
          </div>
          <div className="lg:w-8/12 px-3 pt-10 w-full">
            <div
              className="flex flex-row flex-wrap -mx-3"
              data-aos="zoom-in-up"
              data-aos-duration="1500"
            >
              <div className="md:w-3/12 w-1/2 px-3">
                <ul>
                  <li className="font-inter font-bold leading-[150%] text-base text-white pb-6">
                    Service
                  </li>
                  <li className="pb-6">
                    <a
                      href=""
                      className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                    >
                      Domain
                    </a>
                  </li>
                  <li className="pb-6">
                    <a
                      href=""
                      className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                    >
                      Shared Hosting
                    </a>
                  </li>
                  <li className="pb-6">
                    <a
                      href=""
                      className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                    >
                      Cloud Hosting
                    </a>
                  </li>
                  <li className="pb-6">
                    <a
                      href=""
                      className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                    >
                      Private Hosting
                    </a>
                  </li>
                </ul>
              </div>
              <div className="md:w-3/12 w-1/2 px-3">
                <ul>
                  <li className="font-inter font-bold leading-[150%] text-base text-white pb-6">
                    Hosting
                  </li>
                  <li className="pb-6">
                    <a
                      href=""
                      className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                    >
                      Cheap Hosting
                    </a>
                  </li>
                  <li className="pb-6">
                    <a
                      href=""
                      className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                    >
                      Hosting Wordpress
                    </a>
                  </li>
                  <li className="pb-6">
                    <a
                      href=""
                      className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                    >
                      Email Hosting
                    </a>
                  </li>
                  <li className="pb-6">
                    <a
                      href=""
                      className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                    >
                      Hosting Unlimited
                    </a>
                  </li>
                </ul>
              </div>
              <div className="md:w-3/12 w-1/2  px-3">
                <ul>
                  <li className="font-inter font-bold leading-[150%] text-base text-white pb-6">
                    Company
                  </li>
                  <li className="pb-6">
                    <a
                      href=""
                      className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                    >
                      About
                    </a>
                  </li>
                  <li className="pb-6">
                    <a
                      href=""
                      className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                    >
                      Career
                    </a>
                  </li>
                  <li className="pb-6">
                    <a
                      href=""
                      className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="md:w-3/12 w-1/2 px-3">
                <ul>
                  <li className="font-inter font-bold leading-[150%] text-base text-white pb-6">
                    Help
                  </li>
                  <li className="pb-6">
                    <a
                      href=""
                      className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                    >
                      FAQ
                    </a>
                  </li>
                  <li className="pb-6">
                    <a
                      href=""
                      className="font-inter font-normal leading-[150%] text-base text-[#E6E6E6] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#E6E6E6]"
                    >
                      Help support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className=" text-white font-Inter text-sm sm:text-base font-normal leading-[32px] ">
          Built by Jeremiah with &#129293; in Lagos. Copyright {year}
        </p>
      </div>
    </div>
  );
};

export default Footer;
