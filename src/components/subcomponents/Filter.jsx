import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
export default function Filter() {
  const [openCategory, setOpenCategory] = useState(false);
  return (
    <div className="space-y-2 rounded-md md:hidden flex flex-col items-center justify-center p-4 border w-11/12 mx-auto bg-white">
      <button
        className="w-11/12 border justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        type="button"
        onClick={() => setOpenCategory(!openCategory)}
      >
        All Type
        <svg
          class="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <button
        className="w-11/12 border justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        type="button"
        onClick={() => setOpenCategory(!openCategory)}
      >
        Neighbourhood
        <svg
          class="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div className="relative w-11/12 border rounded-lg py-2 focus:none">
        <input className="indent-10 w-11/12 " placeholder="Search..." />
        <GoSearch className="absolute top-3 left-3" />
      </div>
    </div>
  );
}
