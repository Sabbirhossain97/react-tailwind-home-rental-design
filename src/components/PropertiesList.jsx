import React from "react";
import Bed from "./svg/Bed";
import Shower from "./svg/Shower";
import Size from "./svg/Size";
export default function PropertiesList() {
  return (
    <div>
      <div className="w-full bg-[#F5F5F5] mt-[100px] pb-[81px]">
        <div className=" flex flex-wrap mx-auto justify-center sm:justify-between py-[61px] px-[50px] w-11/12 md:w-3/4 ">
          <div className="">
            <p className="text-gray-900 font-inter capitalize text-[26px] md:text-[36px] leading-[64px] not-italic font-extrabold">
              {" "}
              list of properties
            </p>
            <div className="flex justify-center md:justify-start">
              <hr className="bg-[#F4511E] h-[3px] w-[80px] flex justify-center " />
            </div>
          </div>
          <button className="mt-6 md:mt-0 shadow-properties-button rounded-[5px] px-[25px] py-[15px] md:px-[33px] md:py-[22px] bg-[#F4511E] text-center text-[16px] not-italic font-medium leading-normal text-white">
            View All Property
          </button>
        </div>
        {/* cards */}
        <div className=" w-full md:w-full lg:w-3/4 mx-auto px-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-y-[60px] gap-x-[100px] ">
          {["image1", "image2", "image3", "image4", "image5", "image6"].map(
            (item, key) => (
              <div
                key={key}
                className="max-w-sm bg-white  border-gray-200 rounded-[27px] shadow "
              >
                <img
                  className="w-full"
                  src={`/assets/properties/${item}.png`}
                  alt="properties-image"
                />
                <div className="p-4 relative ">
                  <h5 className=" mb-2 text-[18px] md:text-[23px] leading-normal tracking-[-0.642px] capitalize font-bold  text-black font-dm-sans">
                    2578 Folsom street, san francisco, CA, 94110
                  </h5>

                  <p className="mb-1  text-[#818181] text-[13px] md:text-[18px] leading-normal tracking-[-0.642px] capitalize font-dm-sans not-italic">
                    Private Room
                  </p>
                  <p className="mb-4 text-[#F4511E] text-[20px] md:text-[25px] font-bold leading-normal tracking-[-0.642px] capitalize font-dm-sans not-italic">
                    $1200/month
                  </p>
                </div>
                <div className="border-t-2 border-[#E4E4E4] flex justify-around ">
                  <div className="flex justify-center items-center border-r-2 w-1/3 h-[80px]">
                    <Bed />
                    <span className="ml-[10px] font-dm-sans text-[13px] md:text-[18px] not-italic font-bold leading-normal tracking-[-0.455px]">
                      4
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-1/3 border-r-2 ">
                    <Shower />
                    <span className="ml-[10px] font-dm-sans text-[13px] md:text-[18px] not-italic font-bold leading-normal tracking-[-0.455px]">
                      2
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-1/3 ">
                    <Size />
                    <span className="ml-[10px] font-dm-sans text-[13px] md:text-[18px] not-italic font-bold leading-normal tracking-[-0.455px]">
                      2
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
          {/* pagination */}
        </div>
        <div className="flex justify-center w-full mt-[84px]">
          <nav className="">
            <ul className="inline-flex -space-x-px text-base font-dm-sans text-[16px] font-bold leading-6 not-italic ">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center p-[18px] md:p-[25px] bg-[#F3F3F3] ml-0 leading-tight text-[#BDBDBD] border border-gray-300 rounded-l-lg  "
                >
                  First
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center p-[18px] md:p-[25px]  leading-tight text-[#F4511E] bg-white border border-gray-300 "
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center p-[18px] md:p-[25px]  leading-tight text-white bg-[#F4511E] border border-gray-300  "
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center p-[18px] md:p-[25px] leading-tight text-[#F4511E] bg-white border border-gray-300 "
                >
                  3
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center justify-center p-[18px] md:p-[25px] text-[#F4511E] leading-tight  bg-white border border-gray-300 rounded-r-lg "
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
