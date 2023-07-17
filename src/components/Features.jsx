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
        <div className=" mt-9 flex flex-wrap xl:flex-nowrap">
          <div className="">
            <img
              src="/assets/features/features-image.png"
              alt="features-side-image"
            />
          </div>

          <section className=" flex justify-center md:items-start 4xl:items-center bg-white ">
            <div className="py-8 px-4 mx-auto max-w-screen-xl 4xl:max-w-screen-4xl sm:py-16 lg:px-6">
              <div className=" space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 4xl:grid-cols-6 md:gap-12 md:space-y-0">
                {[
                  {
                    icon: "dollar",
                    text: "Pay as Little as possible!",
                  },
                  {
                    icon: "community",
                    text: "Enjoy wisdom of community!",
                  },
                  {
                    icon: "stack",
                    text: "Let's somebody else take care of Landlord!",
                  },
                  {
                    icon: "plant",
                    text: "Enjoy peaceful Environment!",
                  },
                  {
                    icon: "shield",
                    text: "Stay Safe! Save Money!",
                  },
                  {
                    icon: "eye",
                    text: "Pay for what you use!",
                  },
                ].map((item, key) => (
                  <div key={key} className="">
                    <div className="flex justify-center md:justify-start items-center mb-4  ">
                      <img
                        src={`assets/features/${item.icon}.png`}
                        className="shadow-features-icon p-4 rounded-[10px]"
                        alt="content-items"
                      />
                    </div>
                    <h3 className="w-full  whitespace-wrap inline-flex justify-center md:justify-start text-center md:text-left font-inter text-[15px] md:text-[20px] not-italic font-semibold leading-[35px] capitalize">
                      {item.text}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
