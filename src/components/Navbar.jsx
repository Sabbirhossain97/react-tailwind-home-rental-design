import React, { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="">
      <nav className={`border-b w-10/12 md:w-3/4 mx-auto  `}>
        <div
          className={` max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4`}
        >
          <a
            href="#"
            className="cursor-pointer flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img src="/assets/logo1.png" alt="logo" />
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span className="sr-only">Open main menu</span>

            {openMenu ? (
              <svg
                className="w-5 h-5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            ) : (
              <svg
                className="text-white w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            )}
          </button>
          <div
            className={`${openMenu ? "hidden" : ""} w-full md:block md:w-auto`}
          >
            <ul
              className={` transition-all duration-300 ease-in space-y-4 md:space-y-0 flex flex-col rounded-lg md:flex-row md:space-x-12 md:mt-0 mt-6 lg:inline-flex md:ml-auto text-white font-dm-sans font-normal not-italic  items-center text-base 
                `}
            >
              {["Home", "Landlord", "Tenants", "Contact Us"].map(
                (item, key) => (
                  <li key={key}>
                    <a
                      href="#"
                      className="hover:text-[#F4511E]  transition cursor-pointer md:mr-[56px] text-[20px] md:text-[18px] "
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
