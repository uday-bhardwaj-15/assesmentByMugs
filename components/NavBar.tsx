import type { NextPage } from "next";

export type NavBarType = {
  className?: string;
};

const NavBar: NextPage<NavBarType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[1420px] h-[67px] text-left text-2xl text-gray-200 font-nav-bar-text-21 ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] w-[279px] h-[67px] text-29xl font-montserrat">
        <div className="absolute top-[5.97%] left-[31.18%]">
          <b>M</b>
          <span className="text-dimgray">{`umair `}</span>
        </div>
        <img
          className="relative w-[67px] h-[67px]"
          alt=""
          src="/subtract.svg"
        />
      </div>
      <div className="absolute top-[7px] left-[401px] flex flex-row items-start justify-start gap-3 text-black">
        <div className="bg-white flex flex-row items-start justify-start py-2.5 px-3.5">
          <div className="relative tracking-[0.03em]">Home</div>
        </div>
        <div className="bg-white flex flex-row items-start justify-start py-2.5 px-3.5">
          <div className="relative tracking-[0.03em]">About Me</div>
        </div>
        <div className="bg-white flex flex-row items-start justify-start py-2.5 px-3.5">
          <div className="relative tracking-[0.03em]">Services</div>
        </div>
        <div className="bg-white flex flex-row items-start justify-start py-2.5 px-3.5">
          <div className="relative tracking-[0.03em]">Projects</div>
        </div>
        <div className="bg-white flex flex-row items-start justify-start py-2.5 px-3.5">
          <div className="relative tracking-[0.03em]">Testimonials</div>
        </div>
        <div className="bg-white flex flex-row items-start justify-start py-2.5 px-3.5">
          <div className="relative tracking-[0.03em]">Contact</div>
        </div>
      </div>
      <div className="absolute h-[77.61%] w-[13.24%] top-[10.45%] right-[0%] bottom-[11.94%] left-[86.76%] text-justify text-white">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs bg-darkorange-100" />
        <div className="absolute h-[32.69%] w-[80.85%] top-[32.69%] left-[9.57%] tracking-[0.03em] inline-block">
          Downlaod CV
        </div>
      </div>
    </div>
  );
};

export default NavBar;
