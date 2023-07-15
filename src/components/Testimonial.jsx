import React from "react";

export default function Practice() {
  return (
    <div className="container w-3/4 my-24 mx-auto ">
      <section className=" mb-32 text-center md:text-left">
        <div className="block rounded-lg  ">
          <div className="flex flex-wrap items-center">
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
              <div className="px-6 py-16 md:px-12 bg-testimonial">
                <p className="font-inter text-[15px] text-center md:text-left md:text-[21px] not-italic font-normal leading-9">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  interdum nisl et nunc facilisis, a commodo eros mollis. Nunc
                  vel pellentesque est. Curabitur at odio sit amet libero
                  vulputate efficitur ac nec justo. Nulla vitae mauris quam.
                  Nulla quam massa, faucibus id pretium ac, mattis eu velit.
                  Donec sed risus a lacus fringilla finibus.
                </p>
                <div className="flex mt-[26px] justify-center md:justify-start">
                  <img src="assets/testimonial/profile.png" />
                  <div className="ml-[19px]">
                    <p className="text-[#F4511E] font-inter text-[18px] not-italic font-bold leading-7">
                      Harry Wilson
                    </p>
                    <p className="font-inter text-[16px] not-italic font-normal leading-[26px]">
                      Property Owner
                    </p>
                  </div>
                </div>
                <div className="inline-flex  mt-[45px] mb-[15px] gap-[12px] ml-2">
                  <img src="assets/testimonial/Ellipse1.png" />
                  <img src="assets/testimonial/Ellipse2.png" />
                  <img src="assets/testimonial/Ellipse3.png" />
                </div>
              </div>
            </div>
            <div className="relative right-0 top-0 w-full block shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
              <img
                src="assets/testimonial/cover.jpg"
                alt="error"
                className="w-full "
              />
              <div className="rounded-[73.6px] absolute top-[38%] left-[42%] p-[35px] bg-[#F4511E]">
                <img src="assets/testimonial/play-icon.png" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
