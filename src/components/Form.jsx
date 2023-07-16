import React from "react";
import DropDown from "../components/svg/Dropdown";
import Dropdown from "../components/svg/Dropdown";
export default function Form() {
  return (
    <div>
      <div className="mt-[110px] w-3/4 mx-auto">
        <div className="text-center">
          <p className="text-black font-inter text-[20px] md:text-[24px] font-medium leading-8 capitalize">
            Your property with us and be Confident that Your Room will be Filled
            Out!
          </p>
        </div>
        <div className="w-full shadow-form-wrapper rounded-[10px] bg-[#FFF] mx-auto mt-[37px]">
          <div className=" py-4">
            <p className="flex justify-center mt-10 text-[#F4511E] font-poppins text-center text-[18px] md:text-[28px] not-italic font-bold leading-8 tracking-[0.1px]">
              Add A New Property
            </p>
          </div>
          <form>
            <div className=" grid grid-cols-1 md:grid-cols-3 mt-[65px] w-4/5 mx-auto gap-x-[25px] gap-y-[25px]">
              <div className=" flex flex-col col-span-3 md:col-span-2 xl:col-span-1">
                <label
                  for="name"
                  className=" font-poppins text-[17px] not-italic font-semibold leading-6 tracking-[0.2px] "
                >
                  Name <span className="text-[#F4511E]">*</span>
                </label>
                <input
                  placeholder="Enter Name"
                  id="name"
                  className="indent-5  placeholder:font-inter placeholder:text-[14px] placeholder:font-normal placeholder:leading-7 placeholder:tracking-[0.2px] placeholder:text-[#737373] mt-[5px] rounded-md bg-[#F9F9F9] border py-[15px] border-[#E6E6E6]"
                />
              </div>
              <div className=" flex flex-col col-span-3 md:col-span-2 xl:col-span-1">
                <label
                  for="address"
                  className=" font-poppins text-[17px] not-italic font-semibold leading-6 tracking-[0.2px] "
                >
                  Address <span className="text-[#F4511E]">*</span>
                </label>
                <input
                  id="address"
                  placeholder="Enter Address"
                  className="indent-5 placeholder:font-inter placeholder:text-[14px] placeholder:font-normal placeholder:leading-7 placeholder:tracking-[0.2px] placeholder:text-[#737373] mt-[5px] rounded-md bg-[#F9F9F9] border py-[15px] border-[#E6E6E6]"
                />
              </div>
              <div className=" flex flex-col col-span-3 md:col-span-2 xl:col-span-1">
                <label
                  for="unit-number"
                  className=" font-poppins text-[17px] not-italic font-semibold leading-6 tracking-[0.2px] "
                >
                  Unit Number <span className="text-[#F4511E]">*</span>
                </label>
                <input
                  id="unit-number"
                  placeholder="Enter Unit"
                  className="indent-5 placeholder:font-inter placeholder:text-[14px] placeholder:font-normal placeholder:leading-7 placeholder:tracking-[0.2px] placeholder:text-[#737373] mt-[5px] rounded-md bg-[#F9F9F9] border py-[15px] border-[#E6E6E6]"
                />
              </div>
              <div className=" flex flex-col col-span-3 md:col-span-2 xl:col-span-1">
                <label
                  for="city"
                  className=" font-poppins text-[17px] not-italic font-semibold leading-6 tracking-[0.2px] "
                >
                  City <span className="text-[#F4511E]">*</span>
                </label>
                <div className=" mt-[5px] relative">
                  <input
                    id="city"
                    placeholder="Select City"
                    className="indent-5 w-full placeholder:font-inter placeholder:text-[14px] placeholder:font-normal placeholder:leading-7 placeholder:tracking-[0.2px] placeholder:text-[#737373] rounded-md bg-[#F9F9F9] border py-[15px] border-[#E6E6E6]"
                  />
                  {/* <Dropdown /> */}
                </div>
              </div>
              <div className=" flex flex-col col-span-3 md:col-span-2 xl:col-span-1">
                <label
                  for="state"
                  className=" font-poppins text-[17px] not-italic font-semibold leading-6 tracking-[0.2px] "
                >
                  State <span className="text-[#F4511E]">*</span>
                </label>
                <div className=" mt-[5px] relative">
                  <input
                    id="state"
                    placeholder="Select State"
                    className="w-full indent-5 placeholder:font-inter placeholder:text-[14px] placeholder:font-normal placeholder:leading-7 placeholder:tracking-[0.2px] placeholder:text-[#737373] rounded-md bg-[#F9F9F9] border py-[15px] border-[#E6E6E6]"
                  />
                  {/* <Dropdown /> */}
                </div>
              </div>
              <div className="flex flex-col col-span-3 md:col-span-2 xl:col-span-1">
                <label
                  for="room"
                  className=" font-poppins text-[17px] not-italic font-semibold leading-6 tracking-[0.2px] "
                >
                  Room Type <span className="text-[#F4511E]">*</span>
                </label>
                <div className="mt-[5px] relative">
                  <input
                    id="room"
                    placeholder="Select Room Type"
                    className="w-full indent-5 placeholder:font-inter placeholder:text-[14px] placeholder:font-normal placeholder:leading-7 placeholder:tracking-[0.2px] placeholder:text-[#737373] rounded-md bg-[#F9F9F9] border py-[15px] border-[#E6E6E6]"
                  />
                  {/* <Dropdown /> */}
                </div>
              </div>
              <div className="flex flex-col col-span-3 md:col-span-2 xl:col-span-1">
                <label
                  for="price"
                  className="font-poppins text-[17px] not-italic font-semibold leading-6 tracking-[0.2px] "
                >
                  Price <span className="text-[#F4511E]">*</span>
                </label>
                <input
                  id="price"
                  placeholder="Enter Price"
                  className="indent-5 placeholder:font-inter placeholder:text-[14px] placeholder:font-normal placeholder:leading-7 placeholder:tracking-[0.2px] placeholder:text-[#737373] mt-[5px] rounded-md bg-[#F9F9F9] border py-[15px] border-[#E6E6E6]"
                />
              </div>
              <div className="col-span-3 row-span-2 flex flex-col ">
                <label
                  for="description"
                  className="font-poppins text-[17px] not-italic font-semibold leading-6 tracking-[0.2px] "
                >
                  Description <span className="text-[#F4511E]">*</span>
                </label>
                <textarea
                  placeholder="Enter Description"
                  className="indent-5 h-full placeholder:py-5 placeholder:font-inter placeholder:text-[14px] placeholder:font-normal placeholder:leading-7 placeholder:tracking-[0.2px] placeholder:text-[#737373] mt-[5px] rounded-md bg-[#F9F9F9] border  border-[#E6E6E6]"
                />
              </div>
              <div class="col-span-3 md:col-span-full">
                <label
                  for="cover-photo"
                  className="font-poppins text-[17px] not-italic font-semibold leading-6 tracking-[0.2px]"
                >
                  Upload Photos
                </label>
                <div className="mt-2 flex justify-center rounded-lg border-2 border-dashed border-[#F4511E] px-6 py-5">
                  <div className="text-center">
                    <div className="mt-4 flex flex-col md:flex-row text-sm leading-6 ">
                      <span className="font-poppins text-[#000] text-[16px] font-semibold leading-normal">
                        Drag your images here, or
                      </span>
                      <label
                        for="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span className="font-poppins text-[16px] font-bold leading-normal text-[#F4511E]">
                          &nbsp;browse
                        </span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                    </div>
                    <p className="text-[rgba(0,0,0,0.50)] text-center font-poppins text-[12px] font-semibold not-italic leading-normal">
                      Supported: JPG, JPEG, PNG
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-[55px] mb-[55px]">
                  <button className="transition rounded-[9px] bg-[#F4511E] hover:bg-[#dd4415] px-[80px] md:px-[100px] lg:px-[158px] py-[21.79px] text-white font-inter text-[13px] md:text-[21px] font-medium not-italic leading-[25px] tracking-[0.182px]">
                    Add New Property
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
