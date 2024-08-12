import type { NextPage } from "next";
import Btn from "./btn";

export type HeroType = {
  className?: string;
};

const Hero: NextPage<HeroType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[1400px] h-[617.2px] text-justify text-2xl text-black font-nav-bar-text-21 ${className}`}
    >
      <div className="absolute top-[97px] left-[0px] w-[714px] h-[292px] text-left text-81xl">
        <div className="absolute top-[0px] left-[7px] text-5xl tracking-[0.03em] font-semibold">{`Hi I am `}</div>
        <div className="absolute top-[42px] left-[4px] text-13xl tracking-[0.03em] font-semibold text-darkorange-100">{`Muhammad Umair `}</div>
        <b className="absolute top-[77px] left-[0px] tracking-[0.03em] leading-[120%]">{`UI & UX`}</b>
        <b className="absolute top-[172px] left-[230px] tracking-[0.03em] leading-[120%]">{`Designer `}</b>
      </div>
      <div className="absolute top-[417px] left-[7px] tracking-[0.03em] inline-block w-[698px] h-[101px]">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
        pharetra
      </div>
      <Btn />
      <img
        className="absolute top-[0px] left-[862px] w-[538px] h-[617.2px] object-cover"
        alt=""
        src="/group-2@2x.png"
      />
    </div>
  );
};

export default Hero;
