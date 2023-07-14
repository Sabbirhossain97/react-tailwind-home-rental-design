import React from "react";
import Navbar from "./Navbar";
import { AiOutlineSearch } from "react-icons/ai";
function Hero() {
  return (
    <div>
      <div className="bg-hero-image bg-no-repeat bg-cover bg-center brightness-90">
        <Navbar />
        <section className="text-gray-600 body-font ">
          <div className="container mx-auto flex px-5 w-3/4 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <p className="title-font text-white text-[52px] leading-[70px] mb-4 font-bold font-inter">
                The Most Affordable <br /> Place To Stay In The <br /> San
                Francisco Bay Area
                <br className="hidden lg:inline-block" />
              </p>
            </div>
            <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex flex-col justify-center">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="/assets/map.png"
              />
              <div className="border bg-white py-[15px] px-[20px] w-11/12 ml-5 rounded-lg flex flex-col md:flex-row">
                <div className="border inline-flex py-[15px] px-[25px] rounded-l-md ml-[10px]">
                  <label
                    htmlFor="All Type"
                    className="text-[14px] leading-[28px] font-medium tracking-[0.2px]"
                  >
                    All Type
                  </label>
                  <select name="All Type" id="All Type" className=""></select>
                </div>
                <div className="border inline-flex py-[15px] px-[25px]">
                  <label
                    htmlFor="All Type"
                    className="text-[14px] leading-[28px] font-medium tracking-[0.2px]"
                  >
                    Neighbourhood
                  </label>
                  <select
                    name="All Type"
                    id="All Type"
                    className="ml-[22px]"
                  ></select>
                </div>
                <div className="border flex justify-center items-center w-[70px] rounded-r-md bg-[#23A6F0]">
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
