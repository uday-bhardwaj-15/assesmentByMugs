import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupComponentType = {
  className?: string;
  webDesigns?: string;
  webDesigns1?: string;
  businessLandingPageDesign?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  webDesigns,
  webDesigns1,
  businessLandingPageDesign,
  propLeft,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={`absolute top-[419px] left-[489px] w-[445px] h-[601px] text-left text-lgi text-darkorange-100 font-nav-bar-text-21 ${className}`}
      style={groupDivStyle}
    >
      <div className="absolute top-[0px] left-[0px] rounded-xl bg-antiquewhite w-[445px] h-[489px] transition-transform duration-300 transform hover:scale-105" />
      <img
        className="absolute top-[0px] left-[144px] w-[273px] h-[489px] object-cover transition-transform duration-300 transform hover:scale-105"
        alt=""
        src={webDesigns}
      />
      <img
        className="absolute top-[77px] left-[39px] w-[273px] h-[412px] object-cover transition-transform duration-300 transform hover:scale-105"
        alt=""
        src={webDesigns1}
      />
      <div className="absolute top-[526px] left-[0px] tracking-[0.03em]">{`Web Design `}</div>
      <b className="absolute top-[565px] left-[0px] text-5xl tracking-[0.03em] text-gray-200 transition-transform duration-300 transform hover:scale-105">
        {businessLandingPageDesign}
      </b>
    </div>
  );
};

export default GroupComponent;
