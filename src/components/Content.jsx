import React from "react";

export default function Content() {
  return (
    <div>
      <div className="w-3/4 mx-auto mt-[110px] ">
        <div className="flex flex-wrap">
          {/* left section */}
          <div className="flex w-1/2 flex-wrap ">
            <div className="ml-[50px] relative">
              <div className="brightness-75">
                <img src="/assets/content/content-image3.png" />
              </div>
              <p className="absolute top-[30px] left-[36px] text-white text-center font-inter text-[24px] not-italic font-semibold leading-5">
                Flexible Leases
              </p>
            </div>
            <div className="ml-[20px] mt-[60px] relative">
              <div className="brightness-75">
                <img src="/assets/content/content-image2.png" />
              </div>
              <p className="absolute top-[30px]  text-white text-center font-inter text-[24px] not-italic font-semibold leading-7">
                7-Day Happiness Guaranteed
              </p>
            </div>
            <div className="ml-[50px] mt-[20px] relative">
              <div className="brightness-75">
                <img src="/assets/content/content-image4.png" />
              </div>
              <p className="absolute top-[30px]  text-white text-center font-inter text-[24px] not-italic font-semibold leading-7">
                Monthly House Cleaning
              </p>
            </div>
            <div className="ml-[20px] mt-[20px] relative">
              <div className="brightness-75">
                <img src="/assets/content/content-image1.png" />
              </div>
              <p className="absolute top-[30px]  text-white text-center font-inter text-[24px] not-italic font-semibold leading-7">
                Choose Your Own Roommate
              </p>
            </div>
          </div>
          {/* right section */}
          <div className="w-1/2 flex flex-col justify-center items-center  ">
            <div className="w-3/4 ">
              {" "}
              <p className="font-inter text-[40px] not-italic font-extrabold leading-[54px]">
                Flexibility and options <br />
                to suit your lifestyle.
              </p>
              <p className="mt-[16px] font-inter text-[18px] not-italic font-normal leading-[32px]">
                You need it? We got it. We make finding your next <br />
                home easy, comfortable, and simple. From our <br /> happiness
                guarantee to our selective roommate <br /> finder option. We
                provide you the flexibility that you <br />
                most desire.
              </p>
              <button className="mt-[40px] w-[200px] bg-[#F4511E] rounded-xl py-[22px] px-[28px] font-inter text-[18px] not-italic font-semibold leading-5 text-center text-white">
                Search Rooms
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
