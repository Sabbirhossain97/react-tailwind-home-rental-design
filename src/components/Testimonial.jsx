import React from "react";
import Quotation from "./svg/Quotation";
export default function Testimonial() {
  return (
    <div className="mx-auto  mt-[110px]">
      <div className="flex justify-center w-3/4  mx-auto ">
        <div className=" w-3/5 bg-testimonial-left relative">
          <div className=" ml-[129px] mt-[130px] ">
            <Quotation />
            <p className="font-inter text-[21px] not-italic font-normal leading-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam{" "}
              <br />
              interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
              <br />
              pellentesque est. Curabitur at odio sit amet libero vulputate
              <br />
              efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam
              <br /> massa, faucibus id pretium ac, mattis eu velit. Donec sed
              risus
              <br /> a lacus fringilla finibus.
            </p>
            <div className="flex mt-[26px]">
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
            <div className="inline-flex mt-[45px] gap-[12px] ml-2">
              <img src="assets/testimonial/Ellipse1.png" />
              <img src="assets/testimonial/Ellipse2.png" />
              <img src="assets/testimonial/Ellipse3.png" />
            </div>
          </div>
        </div>
        {/* image */}
        <div className="w-2/5 relative">
          <img src="assets/testimonial/cover.jpg" />
          <div className="rounded-[73.6px] absolute top-[250px] left-[272px] p-[35px] bg-[#F4511E]">
            <img src="assets/testimonial/play-icon.png" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
