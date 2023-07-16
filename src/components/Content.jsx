import React from "react";

export default function Content() {
  return (
    <div>
      <div className="w-3/4 mx-auto mt-[110px] ">
        <div className="flex flex-wrap">
          {/* left section */}
          <div className="flex w-11/12 mx-auto md:w-1/2 flex-wrap ">
            <div className="md:ml-[50px] relative">
              <div className="brightness-75">
                <img
                  src="/assets/content/content-image3.png"
                  alt="content-image1"
                />
              </div>
              <p className="absolute top-[30px] left-[36px] text-white text-center font-inter text-[24px] not-italic font-semibold leading-5">
                Flexible Leases
              </p>
            </div>
            <div className="md:ml-[20px] mt-[60px] relative">
              <div className="brightness-75">
                <img
                  src="/assets/content/content-image2.png"
                  alt="content-image2"
                />
              </div>
              <p className="absolute top-[30px]  text-white text-center font-inter text-[24px] not-italic font-semibold leading-7">
                7-Day Happiness Guaranteed
              </p>
            </div>
            <div className=" mt-12 ml-6 md:ml-[50px] md:mt-[20px] relative">
              <div className="brightness-75">
                <img
                  src="/assets/content/content-image4.png"
                  alt="content-image3"
                />
              </div>
              <p className="absolute top-[30px]  text-white text-center font-inter text-[24px] not-italic font-semibold leading-7">
                Monthly House Cleaning
              </p>
            </div>
            <div className="md:ml-[20px] mt-12 md:mt-[20px] relative">
              <div className="brightness-75">
                <img
                  src="/assets/content/content-image1.png"
                  alt="content-image4"
                />
              </div>
              <p className="absolute top-[30px]  text-white text-center font-inter text-[24px] not-italic font-semibold leading-7">
                Choose Your Own Roommate
              </p>
            </div>
          </div>
          {/* right section */}
          <div className=" mx-auto w-11/12 mt-10 md:mt-0 md:w-1/2 flex flex-col justify-center items-center  ">
            <div className="w-5/6 md:w-3/4 ">
              <p className="font-inter text-[30px] text-center md:text-left md:text-[40px] not-italic font-extrabold leading-[54px]">
                Flexibility and options <br />
                to suit your lifestyle.
              </p>
              <p className="mt-[16px] font-inter text-[15px] md:text-[18px] text-center md:text-left not-italic font-normal leading-[32px]">
                You need it? We got it. We make finding your next <br />
                home easy, comfortable, and simple. From our <br /> happiness
                guarantee to our selective roommate <br /> finder option. We
                provide you the flexibility that you <br />
                most desire.
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="transition mt-[40px] w-[150px] md:w-[200px] bg-[#F4511E] hover:bg-[#dd4415] rounded-xl py-[17px] md:py-[22px] px-[18px] md:px-[23px] font-inter text-[13px] md:text-[18px] not-italic font-semibold leading-5 text-center text-white">
                  Search Rooms
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
