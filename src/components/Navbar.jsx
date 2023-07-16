import React from "react";

export default function Navbar() {
  return (
    <div className="">
      <header className="text-gray-600 body-font  ">
        <div className="container mx-auto w-3/4 flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="#" className="cursor-pointer flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/assets/logo1.png" alt="logo" />
          </a>
          <nav className="mt-6 inline-flex md:ml-auto flex-col md:flex-row text-white font-dm-sans font-normal not-italic  items-center text-base">
            <a href="#" className="py-[20px] px-[20px] transition cursor-pointer md:mr-[56px] text-[20px] md:text-[18px] hover:text-[#F4511E]">
              Home
            </a>
            <a href="#" className="py-[20px] px-[20px] transition cursor-pointer md:mr-[56px] text-[20px] md:text-[18px] mt-2 md:mt-0 hover:text-[#F4511E]">
              Landlord
            </a>
            <a href="#" className="py-[20px] px-[20px] transition cursor-pointer md:mr-[56px] text-[20px] md:text-[18px] mt-2 md:mt-0  hover:text-[#F4511E]">
              Tenants
            </a>
            <a href="#" className="py-[20px] px-[20px] transition cursor-pointer md:mr-5 text-[20px] md:text-[18px] mt-2 md:mt-0  hover:text-[#F4511E]">
              Contact Us
            </a>
          </nav>
        </div>
      </header>
      <div className=" w-full flex justify-center">
        <hr className="w-1/2 md:w-3/4 " />
      </div>
    </div>
  );
}
