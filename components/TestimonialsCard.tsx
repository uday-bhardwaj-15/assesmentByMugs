import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TestimonialsCardType = {
  className?: string;
  ellipse10?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propOpacity?: CSSProperties["opacity"];
};

const TestimonialsCard: NextPage<TestimonialsCardType> = ({
  className = "",
  ellipse10,
  propLeft,
  propOpacity,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      opacity: propOpacity,
    };
  }, [propLeft, propOpacity]);

  return (
    <div
      className={`absolute top-[17.875rem] left-[71.813rem] w-[67.938rem] h-[21.5rem] text-justify text-[2rem] text-darkorange-100 font-nav-bar-text-21 ${className}`}
      style={groupDiv1Style}
    >
      <div className="absolute top-[0rem] left-[0rem] rounded-sm bg-whitesmoke-100 w-[67.938rem] h-[21.5rem]" />
      <img
        className="absolute top-[3.438rem] left-[3rem] rounded-[50%] w-[14.688rem] h-[14.688rem] object-cover"
        alt=""
        src={ellipse10}
      />
      <div className="absolute top-[3.438rem] left-[18.375rem] w-[44.75rem] h-[14.75rem]">
        <div className="absolute top-[1.563rem] left-[1.125rem] text-[1.313rem] tracking-[0.02em] text-darkslategray inline-block w-[43.625rem] h-[9.125rem]">
          Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan.
          Id leo urna velit neque mattis id tellus arcu condimentum. Augue
          dictum dolor elementum convallis dignissim malesuada commodo ultrices.
        </div>
        <b className="absolute top-[0rem] left-[0rem] tracking-[0.02em]">“</b>
        <b className="absolute top-[8.188rem] left-[29.25rem] tracking-[0.02em]">
          “
        </b>
        <div className="absolute top-[10.688rem] left-[1.125rem] text-[1.5rem] tracking-[0.02em] font-medium text-black">
          Name
        </div>
        <div className="absolute top-[12.938rem] left-[1.125rem] text-[1.188rem] tracking-[0.02em] text-black">
          CEO
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
