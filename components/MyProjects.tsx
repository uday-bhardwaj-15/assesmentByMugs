import type { NextPage } from "next";
import Image from "next/image";
import GroupComponent from "./group-component";

export type MyProjectsType = {
  className?: string;
};

const MyProjects: NextPage<MyProjectsType> = ({ className = "" }) => {
  return (
    <>
      <div
        className={`absolute top-[158.813rem] left-[0rem] w-[88.938rem] h-[63.75rem] text-center text-[1.5rem] text-black font-nav-bar-text-21 ${className}`}
      >
        <div className="absolute top-[7.5rem] left-[15.563rem] text-[1.313rem] tracking-[0.03em] inline-block w-[57.563rem] h-[4.875rem]">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
          mauris est risus lectus. Phasellus consequat urna tellus
        </div>
        <div className="absolute top-[0rem] left-[31.875rem] text-[4.063rem] tracking-[0.03em] font-semibold text-gray-200 text-left">
          My Projects
        </div>
        <div className="absolute top-[16.063rem] left-[20.375rem] w-[47.938rem] h-[3.5rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-xl hover:bg-darkorange-100 animate-pulse bg-whitesmoke-100 border-dimgray border-[0.4px] border-solid flex flex-row items-start justify-start py-[0.625rem] px-[1.25rem]">
            <div className="relative tracking-[0.03em]  ">UI/UX</div>
          </div>

          <div className="absolute top-[0rem] left-[7.813rem] rounded-xl bg-whitesmoke-100 hover:bg-darkorange-100 animate-pulse border-dimgray border-[0.4px] border-solid flex flex-row items-start justify-start py-[0.625rem] px-[1.25rem] text-black">
            <div className="relative tracking-[0.03em]">Web Design</div>
          </div>
          <div className="absolute top-[0rem] left-[20.75rem] rounded-xl bg-whitesmoke-100 hover:bg-darkorange-100 animate-pulse border-dimgray border-[0.4px] border-solid flex flex-row items-start justify-start py-[0.625rem] px-[1.25rem]">
            <div className="relative tracking-[0.03em]">App Design</div>
          </div>
          <div className="absolute top-[0rem] left-[33.313rem] rounded-xl bg-whitesmoke-100 hover:bg-darkorange-100 animate-pulse border-dimgray border-[0.4px] border-solid flex flex-row items-start justify-start py-[0.625rem] px-[1.25rem]">
            <div className="relative tracking-[0.03em]">Graphic Design</div>
          </div>
        </div>
        <div className="absolute top-[16.063rem] left-[14.625rem] rounded-xl bg-whitesmoke-100 hover:bg-darkorange-100 animate-pulse border-dimgray border-[0.4px] border-solid flex flex-row items-start justify-start py-[0.625rem] px-[1.25rem]">
          <div className="relative tracking-[0.03em]">All</div>
        </div>
        <div className="absolute top-[26.188rem] left-[0rem] w-[27.813rem] h-[37.563rem] text-left text-[1.188rem] text-darkorange-100">
          <div className="absolute top-[0rem] left-[0rem] w-[27.813rem] h-[30.563rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-antiquewhite w-[27.813rem] h-[30.563rem]" />
            <img
              className="absolute top-[0rem] left-[9rem] w-[17.125rem] h-[30.563rem] object-cover"
              alt=""
              src="/web-designs@2x.png"
            />
            <img
              className="absolute top-[5.25rem] left-[2.438rem] w-[17.125rem] h-[25.313rem] object-cover"
              alt=""
              src="/web-designs1@2x.png"
            />
            <div className="absolute top-[0rem] left-[0rem] rounded-xl [background:linear-gradient(179.83deg,_rgba(255,_235,_219,_0),_#ffebdb,_#545454)] w-[27.813rem] h-[33.313rem] hidden" />
          </div>
          <div className="absolute top-[32.875rem] left-[0rem] tracking-[0.03em]">{`Web Design `}</div>
          <b className="absolute top-[35.313rem] left-[0rem] text-[1.5rem] tracking-[0.03em] text-black">{`AirCalling Landing Page Design `}</b>
        </div>
        <GroupComponent
          webDesigns="/web-designs2@2x.png"
          webDesigns1="/web-designs3@2x.png"
          businessLandingPageDesign="Business Landing Page Design "
        />
        <GroupComponent
          propLeft="61.125rem"
          webDesigns="/web-designs4@2x.png"
          webDesigns1="/web-designs5@2x.png"
          businessLandingPageDesign="Ecom Web Page Design "
        />
      </div>{" "}
    </>
  );
};

export default MyProjects;
