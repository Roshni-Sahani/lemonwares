import React from "react";
import icon1 from "../assets/images/icon1.webp";
import icon2 from "../assets/images/icon2.webp";
import icon3 from "../assets/images/icon3.webp";
import icon4 from "../assets/images/icon4.webp";
const cards = [
  {
    img: icon1,
    heading: "99.9 % Uptime",
  },
  {
    img: icon2,
    heading: "Blazing Fast Web Hosting",
  },
  {
    img: icon3,
    heading: "Free SSL Certificates",
  },
  {
    img: icon4,
    heading: "24x7 Friendly Support",
  },
];

const Hoisting2map = () => {
  const list = cards.map((cards, index) => (
    <div
      key={index}
      className="lg:w-3/12 px-3 w-full md:w-1/3 sm:w-1/2 pt-9 lg:pt-0"
      data-aos="flip-up"
      data-aos-duration="1000"
    >
      <div className="flex justify-center">
        <div className="w-[100px] h-[100px] bg-[#B0000026] rounded-full flex justify-center items-center">
          <img src={cards.img} alt="icon1" />
        </div>
      </div>
      <p className="font-poppins font-bold text-xl whites pace-nowrap text-center pb-1 pt-3">
        {cards.heading}
      </p>
      <p className="text-center text-xs font-poppins md:max-w-[252px] mx-auto !leading-normal">
        We Keep Your Web build Online 24x7x365. Downtime not only costs you lost
        visitors but also damages your reputation and search engine rankings.
      </p>
    </div>
  ));
  return (
    <div className="lg:pt-28 py-5">
      <div className="max-w-[1284px] mx-auto px-3">
        <div className="flex flex-row flex-wrap -mx-3 justify-center">{list}</div>
      </div>
    </div>
  );
};

export default Hoisting2map;
