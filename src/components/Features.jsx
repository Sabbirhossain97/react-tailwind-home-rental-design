import React from "react";

export default function Features() {
  return (
    <div>
      <div className=" mx-auto w-3/4">
        <div className="mt-24">
          <p className="md:ml-12 font-inter text-center md:text-left capitalize text-[26px] md:text-[36px] leading-[64px] not-italic font-extrabold">
            minimum living cost takes care of everything
          </p>
          <div >
            <hr className="bg-[#F4511E] h-[3px] md:w-1/4 md:ml-12 " />
          </div>
        </div>
        <div className="mt-9 flex flex-wrap xl:flex-nowrap">
          <img src="/assets/features-image.png" />
          <div className=" space-y-8 grid grid-cols-2 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:space-y-0">
            {[
              {
                icon: "dollar",
                text: "Pay as Little as possible!",
                position: "justify-center",
              },
              {
                icon: "community",
                text: "Enjoy wisdom of community!",
                position: "justify-center",
              },
              {
                icon: "stack",
                text: "Let's somebody else take care of Landlord!",
                position: "justify-center",
              },
              {
                icon: "plant",
                text: "Enjoy peaceful Environment!",
                position: "justify-start",
              },
              {
                icon: "shield",
                text: "Stay Safe! Save Money!",
                position: "justify-start",
              },
              {
                icon: "eye",
                text: "Pay for what you use!",
                position: "justify-start",
              },
            ].map((item, key) => (
              <div className={` flex flex-col ${item.position} `} key={key}>
                <div className="">
                  <img
                    src={`assets/${item.icon}.png`}
                    className="shadow-features-icon p-4 rounded-[10px]"
                  />
                </div>
                <div className="mt-[21px] w-5/6">
                  <p className=" whitespace-wrap inline-flex  font-inter text-[15px] md:text-[20px] not-italic font-semibold leading-[35px] capitalize">
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
