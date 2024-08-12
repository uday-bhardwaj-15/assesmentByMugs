import type { NextPage } from "next";

export type ServicesType = {
  className?: string;
};

const Services: NextPage<ServicesType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[238px] left-[0px] w-[1413px] h-[346px] text-left text-13xl text-black font-nav-bar-text-21 ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] w-[330px] h-[346px] text-center">
        <div className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke-100 w-[330px] h-[346px]" />
        <div className="absolute top-[57px] left-[18px] w-[294px] h-[279px]">
          <div className="absolute top-[96px] left-[0px] tracking-[0.03em] font-semibold">
            UI/UX
          </div>
          <div className="absolute top-[159px] left-[4px] text-lgi tracking-[0.03em] text-left inline-block w-[290px] h-[120px]">
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum
          </div>
          <img
            className="absolute h-[25.09%] w-[23.81%] top-[0%] right-[76.19%] bottom-[74.91%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector.svg"
          />
          <img
            className="absolute h-[0.97%] w-[0.92%] top-[8.53%] right-[79.93%] bottom-[90.5%] left-[19.15%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector1.svg"
          />
          <img
            className="absolute h-[3.33%] w-[4.18%] top-[7.35%] right-[93.57%] bottom-[89.32%] left-[2.24%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector2.svg"
          />
          <img
            className="absolute h-[0.97%] w-[5.75%] top-[7.35%] right-[86.53%] bottom-[91.68%] left-[7.72%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector3.svg"
          />
          <img
            className="absolute h-[0.97%] w-[5.75%] top-[9.71%] right-[86.53%] bottom-[89.32%] left-[7.72%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector4.svg"
          />
          <img
            className="absolute h-[3.33%] w-[4.18%] top-[16.77%] right-[85.51%] bottom-[79.89%] left-[10.31%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector5.svg"
          />
          <img
            className="absolute h-[0.97%] w-[5.75%] top-[16.77%] right-[78.44%] bottom-[82.26%] left-[15.82%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector6.svg"
          />
          <img
            className="absolute h-[0.97%] w-[5.75%] top-[19.1%] right-[78.44%] bottom-[79.93%] left-[15.82%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector7.svg"
          />
        </div>
      </div>
      <div className="absolute top-[0px] left-[361px] rounded-sm bg-whitesmoke-100 w-[330px] h-[346px]" />
      <div className="absolute top-[153px] left-[379px] tracking-[0.03em] font-semibold">{`Web Design `}</div>
      <div className="absolute top-[216px] left-[383px] text-lgi tracking-[0.03em] inline-block w-[290px] h-[120px]">
        Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
        interdum
      </div>
      <div className="absolute top-[0px] left-[722px] rounded-sm bg-whitesmoke-100 w-[330px] h-[346px]" />
      <div className="absolute top-[153px] left-[740px] tracking-[0.03em] font-semibold">
        App Design
      </div>
      <div className="absolute top-[216px] left-[744px] text-lgi tracking-[0.03em] inline-block w-[290px] h-[120px]">
        Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
        interdum
      </div>
      <div className="absolute top-[0px] left-[1083px] rounded-sm bg-whitesmoke-100 w-[330px] h-[346px]" />
      <div className="absolute top-[153px] left-[1101px] tracking-[0.03em] font-semibold">{`Graphic Design `}</div>
      <div className="absolute top-[216px] left-[1105px] text-lgi tracking-[0.03em] inline-block w-[290px] h-[120px]">
        Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
        interdum
      </div>
      <img
        className="absolute top-[54px] left-[379px] w-[72px] h-[82px] overflow-hidden"
        alt=""
        src="/layer-1.svg"
      />
      <img
        className="absolute h-[23.84%] w-[3.33%] top-[14.74%] right-[44.02%] bottom-[61.42%] left-[52.65%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-18.svg"
      />
      <img
        className="absolute h-[20.23%] w-[5.8%] top-[16.47%] right-[16.28%] bottom-[63.29%] left-[77.92%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector8.svg"
      />
      <img
        className="absolute h-[2.95%] w-[0.69%] top-[18.44%] right-[20.01%] bottom-[78.61%] left-[79.31%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector9.svg"
      />
      <img
        className="absolute h-[2.95%] w-[0.69%] top-[18.44%] right-[20.93%] bottom-[78.61%] left-[78.39%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector10.svg"
      />
      <img
        className="absolute h-[2.95%] w-[0.69%] top-[18.44%] right-[19.08%] bottom-[78.61%] left-[80.23%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector11.svg"
      />
      <img
        className="absolute h-[0.98%] w-[0.23%] top-[26.97%] right-[19.07%] bottom-[72.05%] left-[80.71%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector12.svg"
      />
    </div>
  );
};

export default Services;
