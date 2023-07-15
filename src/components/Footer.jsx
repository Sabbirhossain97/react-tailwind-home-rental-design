import React from "react";
import Location from "./svg/Location";
import Phone from "./svg/Phone";
import Printer from "./svg/Printer";
export default function Footer() {
  return (
    <div>
      <div className="w-3/4 border-t-2 flex flex-col md:flex-row lg:flex-row border-[#F4511E] mx-auto mt-[210px]">
        <div className=" w-full md:w-2/5 justify-center lg:justify-start lg:w-1/2 flex  mt-[103px]">
          <p className="font-inter ml-0 lg:ml-[150px] text-[52px] not-italic font-bold leading-[70px] tracking-[-1px] capitalize">
            Logo
          </p>
        </div>
        <div className=" w-full lg:w-1/2 mt-[93px]">
          <div className="flex ">
            <Location />
            <span className="ml-[16px] font-inter text-[14px] not-italic font-normal leading-normal text-[#0A142F]">
              345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
            </span>
          </div>
          <div className="flex mt-[22px]">
            <div className="flex w-1/2">
              <Phone />
              <span className="ml-[16px] font-inter text-[14px] not-italic font-normal leading-normal text-[#0A142F]">
                (123) 456-7890
              </span>
            </div>
            <div className="flex  w-1/2">
              <Printer />
              <span className="ml-[16px] font-inter text-[14px] not-italic font-normal leading-normal text-[#0A142F]">
                (123) 456-7890
              </span>
            </div>
          </div>
          <div className=" flex flex-col lg:flex-row mt-[46px]">
            <div className=" lg:w-1/5 ">
              <p className="text-center  text-[14px] mt-1 not-italic font-normal leading-normal font-inter">
                Social Media
              </p>
            </div>
            <div className=" flex justify-around mt-4 md:mt-0 w-full md:w-3/4 lg:4/5 3xl:w-1/2 ml-0 ">
              <img src="assets/footer/facebook.png" />
              <img src="assets/footer/twitter.png" />
              <img src="assets/footer/linkedin.png" />
              <img src="assets/footer/youtube.png" />
              <img src="assets/footer/instagram.png" />
              <img src="assets/footer/googleplus.png" />
              <img src="assets/footer/pinterest.png" />
              <img src="assets/footer/rss.png" />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-4/6 md:w-/35 lg:w-3/4 mx-auto mt-[80px] mb-[100px]">
        <div className="font-inter flex flex-col lg:flex-row py-[24px] border-t border-gray-200 ">
          <div className="flex flex-col lg:flex-row items-center w-full lg:w-4/6 text-[14px]">
            <p className="">ABOUT US</p>
            <p className="mt-2 lg:mt-0 lg:ml-[39px]">CONTACT US</p>
            <p className="mt-2 lg:mt-0 lg:ml-[34px]">HELP</p>
            <p className="mt-2 lg:mt-0 lg:ml-[46px]">PRIVACY POLICY</p>
            <p className="mt-2 lg:mt-0 lg:ml-[29px]">DISCLAIMER</p>
          </div>
          <div className=" w-full lg:w-1/3 mt-4 lg:mt-0 flex  lg:justify-center ">
            <span className="text-[#0A142F] text-center lg:text-left font-inter text-[14px] not-italic font-medium leading-normal">
              Copyright © 2020 Minimumlivingcost. All rights reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
