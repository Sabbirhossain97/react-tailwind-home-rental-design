import React from "react";

export default function Features() {
  return (
    <div>
      <div className=" mx-auto w-3/4">
        <div className="mt-24">
          <p className="md:ml-12 font-inter text-center md:text-left capitalize text-[26px] md:text-[36px] leading-[64px] not-italic font-extrabold">
            minimum living cost takes care of everything
          </p>
          <div className="flex justify-center md:justify-start">
            <hr className="bg-[#F4511E] h-[3px] flex justify-center w-1/2 md:w-1/4 md:ml-12 " />
          </div>
        </div>
        <div className="mt-9 flex flex-wrap xl:flex-nowrap">
          <img
            src="/assets/features/features-image.png"
            alt="features-side-image"
          />
          <div className="gap-y-4 grid grid-cols-2 md:grid md:grid-cols-2 lg:grid-cols-3 ">
            {[
              {
                icon: "dollar",
                text: "Pay as Little as possible!",
                position: "justify-center",
                width: "w-2/5",
              },
              {
                icon: "community",
                text: "Enjoy wisdom of community!",
                position: "justify-center",
                width: "w-3/5",
              },
              {
                icon: "stack",
                text: "Let's somebody else take care of Landlord!",
                position: "justify-center",
                width: "w-3/4",
              },
              {
                icon: "plant",
                text: "Enjoy peaceful Environment!",
                position: "justify-start",
                width: "w-3/4",
              },
              {
                icon: "shield",
                text: "Stay Safe! Save Money!",
                position: "justify-start",
                width: "w-2/5",
              },
              {
                icon: "eye",
                text: "Pay for what you use!",
                position: "justify-start",
                width: "w-1/2",
              },
            ].map((item, key) => (
              <div
                className={` flex md:items-start items-center flex-col md:flex-col ${item.position}`}
                key={key}
              >
                <div className="">
                  <img
                    src={`assets/features/${item.icon}.png`}
                    className="shadow-features-icon p-4 rounded-[10px]"
                    alt="content-items"
                  />
                </div>
                <div className={`mt-[21px] w-10/12 md:${item.width}`}>
                  <p className=" whitespace-wrap inline-flex text-center md:text-left font-inter text-[15px] md:text-[20px] not-italic font-semibold leading-[35px] capitalize">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
