import React from "react";

export default function Navbar() {
  return (
    <div>
      <header className="text-gray-600 body-font  ">
        <div className="container mx-auto w-3/4 flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/assets/logo1.png" />
          </a>
          <nav className="mt-6 inline-flex  md:ml-auto text-white font-dm-sans font-normal text-[18px] not-italic flex-wrap items-center text-base">
            <a className="mr-[56px] ">Home</a>
            <a className="mr-[56px] ">Landlord</a>
            <a className="mr-[56px] ">Tenants</a>
            <a className="mr-5 ">Contact Us</a>
          </nav>
        </div>
      </header>
      <div className="w-full flex justify-center">
        <hr className="w-3/4 " />
      </div>
    </div>
  );
}
