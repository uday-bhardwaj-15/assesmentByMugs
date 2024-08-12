import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <div className="text-center flex items-center justify-center">
      {" "}
      <div
        className={`absolute top-[315.5rem] left-[-7.312rem] w-[120.313rem] h-[34.5rem] text-left text-[1.313rem] text-gray-200 font-nav-bar-text-21 ${className}`}
      >
        <div className="absolute top-[0rem] left-[0rem] bg-whitesmoke-100 w-full h-[34.5rem]" />
        <div className="absolute top-[29.25rem] left-[0.25rem] bg-dimgray w-full h-[5.25rem]" />
        <div className="absolute top-[6.813rem] left-[51.25rem] w-[17.438rem] h-[4.188rem] text-[3rem] font-montserrat">
          <div className="absolute top-[5.97%] left-[31.18%]">
            <b>M</b>
            <span className="text-dimgray">{`umair `}</span>
          </div>
          <img
            className="relative w-[4.188rem] h-[4.188rem]"
            alt=""
            src="/subtract.svg"
          />
        </div>
        <div className="absolute top-[15.063rem] left-[34.75rem] flex flex-row items-start justify-start gap-[0.75rem] text-black">
          <div className="flex flex-row items-start justify-start py-[0.625rem] px-[0.875rem]">
            <div className="relative tracking-[0.03em]">Home</div>
          </div>
          <div className="flex flex-row items-start justify-start py-[0.625rem] px-[0.875rem]">
            <div className="relative tracking-[0.03em]">About Me</div>
          </div>
          <div className="flex flex-row items-start justify-start py-[0.625rem] px-[0.875rem]">
            <div className="relative tracking-[0.03em]">Services</div>
          </div>
          <div className="flex flex-row items-start justify-start py-[0.625rem] px-[0.875rem]">
            <div className="relative tracking-[0.03em]">Projects</div>
          </div>
          <div className="flex flex-row items-start justify-start py-[0.625rem] px-[0.875rem]">
            <div className="relative tracking-[0.03em]">Testimonials</div>
          </div>
          <div className="flex flex-row items-start justify-start py-[0.625rem] px-[0.875rem]">
            <div className="relative tracking-[0.03em]">Contact</div>
          </div>
        </div>
        <div className="absolute top-[23.344rem] left-[53.563rem] w-[12.813rem] h-[2.031rem]">
          <img
            className="absolute top-[0rem] left-[10.781rem] w-[2.031rem] h-[2.031rem] overflow-hidden"
            alt=""
            src="/linkedin--negative.svg"
          />
          <img
            className="absolute top-[0rem] left-[7.188rem] w-[2.031rem] h-[2.031rem] overflow-hidden"
            alt=""
            src="/instagram--negative.svg"
          />
          <img
            className="absolute top-[0rem] left-[3.594rem] w-[2.031rem] h-[2.031rem] overflow-hidden"
            alt=""
            src="/twitter--negative.svg"
          />
          <img
            className="absolute top-[0rem] left-[0rem] w-[2.031rem] h-[2.031rem] overflow-hidden"
            alt=""
            src="/facebook--negative.svg"
          />
        </div>
        <div className="absolute top-[30.875rem] left-[46.25rem] tracking-[0.03em] text-white">
          <span>{`© 2023 `}</span>
          <b className="text-darkorange-100">{`Mumair `}</b>
          <span>All Rights Reserved , Inc.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
