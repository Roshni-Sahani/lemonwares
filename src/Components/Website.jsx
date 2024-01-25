import React from "react";
import jpnl from "../assets/images/jpnl.webp";
import korane from "../assets/images/Korane.webp";
import Nadine from "../assets/images/Nadine.webp";
import leevon from "../assets/images/LeeveOn.webp";
import jrang from "../assets/images/Jrango.webp";
import Crypto from "../assets/images/Crypto.webp";

const Website = () => {
  return (
    <div className="lg:py-[105px] py-5">
      <div className="max-w-[1194px] mx-auto px-3">
        <div className="flex flex-row flex-wrap">
          <div
            className="lg:w-6/12 px-3 w-full"
            data-aos="fade-down-right"
            data-aos-duration="1000"
          >
            <p className="font-inter sm:text-5xl text-4xl font-extrabold text-[#18191F] !leading-[64px] text-center lg:text-start mx-auto lg:mx-0">
              We serve over 100 Nigerian Websites
            </p>
            <p className="font-inter text-lg font-normal leading-[177.778%] text-[#18191F] max-w-[455px] text-center lg:text-start mx-auto lg:mx-0 pt-2">
              Connect LemonWares with your favourite tools that you use daily
              and keep things on track.
            </p>
          </div>
          <div className="lg:w-6/12 px-3 w-full" data-aos="fade-down-left"
          data-aos-duration="1000">
            <div className="flex flex-row flex-wrap">
              <div className="w-4/12 px-3">
                <img src={jpnl} alt="jpnl" />
              </div>
              <div className="w-4/12 px-3">
                <img src={korane} alt="jpnl" />
              </div>
              <div className="w-4/12 px-3">
                <img src={Nadine} alt="Nadine" />
              </div>
              <div className="w-4/12 px-3">
                <img src={leevon} alt="leevon" />
              </div>
              <div className="w-4/12 px-3">
                <img src={jrang} alt="jrang" />
              </div>
              <div className="w-4/12 px-3">
                <img src={Crypto} alt="crypto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
