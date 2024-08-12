import type { NextPage } from "next";

export type BtnType = {
  className?: string;
};

const Btn: NextPage<BtnType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[540px] left-[7px] w-[188px] h-[52px] text-justify text-2xl text-white font-nav-bar-text-21 ${className}`}
    >
      <button className="bg-darkorange-100 hover:bg-darkorange-200 text-white font-bold py-2 px-4 rounded-8xs  w-[188px] h-[52px] text-center text-2xl font-nav-bar-text-21 animate-pulse">
        Hire Me
      </button>
    </div>
  );
};

export default Btn;
