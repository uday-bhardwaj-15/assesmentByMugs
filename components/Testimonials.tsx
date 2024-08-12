import type { NextPage } from "next";
import Slider from "react-slick";
import TestimonialsCard from "./TestimonialsCard";

export type TestimonialsType = {
  className?: string;
};

const Testimonials: NextPage<TestimonialsType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[231.25rem] left-[-50.312rem] w-[211.563rem] h-[45.813rem] text-justify text-[2rem] text-darkorange-100 font-nav-bar-text-21 ${className}`}
    >
      <div className="absolute top-[0rem] left-[77.938rem] w-[58.25rem] h-[13.375rem] text-center text-[1.313rem] text-black">
        <div className="absolute top-[7.063rem] left-[0rem] tracking-[0.03em] inline-block w-[58.25rem] h-[6.313rem]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </div>
        <div className="absolute top-[0rem] left-[calc(50%_-_223px)] text-[4.063rem] tracking-[0.03em] font-semibold">
          Testimonials
        </div>
      </div>
      <TestimonialsCard ellipse10="/ellipse-10@2x.png" />
      <TestimonialsCard
        propLeft="143.625rem"
        propOpacity="0.2"
        ellipse10="/ellipse-11@2x.png"
      />
      <div className="absolute top-[17.875rem] left-[0rem] w-[67.938rem] h-[21.5rem] opacity-[0.2]">
        <div className="absolute top-[0rem] left-[0rem] rounded-sm bg-whitesmoke-100 w-[67.938rem] h-[21.5rem]" />
        <div className="absolute top-[3.438rem] left-[3rem] rounded-[50%] bg-gainsboro w-[14.688rem] h-[14.688rem]" />
        <div className="absolute top-[3.438rem] left-[18.375rem] w-[44.75rem] h-[14.75rem]">
          <div className="absolute top-[1.563rem] left-[1.125rem] text-[1.313rem] tracking-[0.02em] text-darkslategray inline-block w-[43.625rem] h-[9.125rem]">
            Lorem ipsum dolor sit amet consectetur. In enim cursus odio
            accumsan. Id leo urna velit neque mattis id tellus arcu condimentum.
            Augue dictum dolor elementum convallis dignissim malesuada commodo
            ultrices.
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
      <div className="absolute top-[44.813rem] left-[99.313rem] w-[15.938rem] h-[1rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-gainsboro w-[3.563rem] h-[1rem]" />
        <div className="absolute top-[0rem] left-[4.125rem] rounded-lg bg-darkorange-100 w-[3.563rem] h-[1rem]" />
        <div className="absolute top-[0rem] left-[8.25rem] rounded-lg bg-gainsboro w-[3.563rem] h-[1rem]" />
        <div className="absolute top-[0rem] left-[12.375rem] rounded-lg bg-gainsboro w-[3.563rem] h-[1rem]" />
      </div>
    </div>
  );
};

export default Testimonials;
