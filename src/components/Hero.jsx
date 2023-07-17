import React from "react";
import Navbar from "./Navbar";
import { AiOutlineSearch } from "react-icons/ai";
function Hero() {
  return (
    <div>
      <div className="bg-hero-image bg-no-repeat bg-cover bg-center brightness-100">
        <Navbar />
        <section className="text-gray-600 body-font ">
          <div className="container mx-auto flex px-5 w-11/12 lg:w-3/4 py-24 md:flex-row flex-col md:flex-wrap lg:flex-nowrap justify-center items-center">
            <div className="lg:flex-grow md:w-full md:text-center lg:pr-24 md:pr-16 flex flex-col md:items-start mb-16 md:mb-0 items-center ">
              <p className="text-center md:text-left title-font text-white text-[36px] md:text-[52px] leading-[60px] md:leading-[70px] mb-4 font-bold font-inter ">
                The Most Affordable <br /> Place To Stay In The <br /> San
                Francisco Bay Area
                <br className="hidden lg:inline-block" />
              </p>
            </div>
            <div className="lg:max-w-lg md:w-3/4 w-full flex flex-col justify-center">
              <div className="lg:max-w-lg flex justify-center">
                <img
                  className="object-cover object-center rounded"
                  alt="hero-map"
                  src="/assets/map.png"
                />
              </div>
              <div className="bg-white w-11/12 3xl:w-4/5 py-[15px] rounded-lg flex flex-col sm:flex-row mx-auto justify-center">
                <div className="justify-center border inline-flex py-[15px] px-[20px] rounded-l-md ml-0 ">
                  <label
                    htmlFor="All Type"
                    className="text-[10px] md:text-[14px] leading-[28px] font-medium tracking-[0.2px]"
                  >
                    All Type
                  </label>
                  <select name="All Type" id="All Type" className=""></select>
                </div>
                <div className="justify-center border inline-flex py-[15px] px-[20px]">
                  <label
                    htmlFor="All Type"
                    className="text-[10px] md:text-[14px] leading-[28px] font-medium tracking-[0.2px]"
                  >
                    Neighbourhood
                  </label>
                  <select
                    name="All Type"
                    id="All Type"
                    className="ml-2 md:ml-[22px]"
                  ></select>
                </div>
                <div className=" border flex px-2 py-2 md:px-0 md:py-0 justify-end md:justify-center items-center w-full md:w-[70px] rounded-r-md bg-[#23A6F0] md:bg-[#23A6F0] ">
                  <button>
                    <AiOutlineSearch className="text-3xl text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
