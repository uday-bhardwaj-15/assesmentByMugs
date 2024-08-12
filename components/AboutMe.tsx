import { useState } from "react";
import type { NextPage } from "next";

export type AboutMeType = {
  className?: string;
};

const AboutMe: NextPage<AboutMeType> = ({ className = "" }) => {
  const [uxBarWidth, setUxBarWidth] = useState(687);
  const [webDesignBarWidth, setWebDesignBarWidth] = useState(657);
  const [appDesignBarWidth, setAppDesignBarWidth] = useState(721);
  const [graphicDesignBarWidth, setGraphicDesignBarWidth] = useState(687);

  const handleDrag = (
    e: React.MouseEvent,
    setBarWidth: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const newWidth = e.clientX - e.currentTarget.getBoundingClientRect().left;
    if (newWidth >= 0 && newWidth <= 753) {
      // ensure the bar doesn't exceed the container width
      setBarWidth(newWidth);
    }
  };

  return (
    <div
      className={`absolute top-[0px] left-[0px]  text-left text-2xl text-black font-nav-bar-text-21 ${className}`}
    >
      <img
        className="absolute top-[0px] left-[0px] w-[681px] h-[675px] object-cover"
        alt=""
        src="/group-7@2x.png"
      />
      <div className="absolute top-[168px] left-[714px] tracking-[0.03em] inline-block w-[756px] h-[101px]">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
        pharetra
      </div>
      <div className="absolute top-[55px] left-[714px] text-46xl tracking-[0.03em] font-semibold">{`About Me `}</div>
      <div className="absolute top-[284px] left-[714px] w-[753px] h-[349px] text-5xl">
        <div className="absolute top-[0px] left-[0px] w-[753px] h-[76px]">
          <div className="absolute top-[0px] left-[0px] tracking-[0.03em] font-semibold">
            UX
          </div>
          <div className="absolute top-[44px] left-[0px] w-[753px] h-8">
            <div className="absolute top-[10px] left-[0px] rounded-md bg-whitesmoke-200 w-[753px] h-3" />
            <div
              className="absolute top-[10px] left-[0px] rounded-md bg-darkorange-100 h-3"
              style={{ width: uxBarWidth }}
            />
            <div
              className="absolute top-[0px] left-[669px] shadow-[0px_4px_7px_rgba(0,_0,_0,_0.2)] rounded-[50%] bg-whitesmoke-200 border-darkorange-100 border-[3px] border-solid box-border w-8 h-8 cursor-pointer"
              style={{ left: uxBarWidth - 8 }}
              onMouseDown={(e) => handleDrag(e, setUxBarWidth)}
            />
          </div>
        </div>
        <div className="absolute top-[91px] left-[0px] tracking-[0.03em] font-semibold">
          Website Design
        </div>
        <div className="absolute top-[145px] left-[0px] rounded-md bg-whitesmoke-200 w-[753px] h-3" />
        <div
          className="absolute top-[145px] left-[0px] rounded-md bg-darkorange-100 h-3"
          style={{ width: webDesignBarWidth }}
        />
        <div
          className="absolute top-[135px] shadow-[0px_4px_7px_rgba(0,_0,_0,_0.2)] rounded-[50%] bg-whitesmoke-200 border-darkorange-100 border-[3px] border-solid box-border w-8 h-8 cursor-pointer"
          style={{ left: webDesignBarWidth - 8 }}
          onMouseDown={(e) => handleDrag(e, setWebDesignBarWidth)}
        />
        <div className="absolute top-[182px] left-[0px] tracking-[0.03em] font-semibold">{`App Design `}</div>
        <div className="absolute top-[236px] left-[0px] rounded-md bg-whitesmoke-200 w-[753px] h-3" />
        <div
          className="absolute top-[236px] left-[0px] rounded-md bg-darkorange-100 h-3"
          style={{ width: appDesignBarWidth }}
        />
        <div
          className="absolute top-[226px] shadow-[0px_4px_7px_rgba(0,_0,_0,_0.2)] rounded-[50%] bg-whitesmoke-200 border-darkorange-100 border-[3px] border-solid box-border w-8 h-8 cursor-pointer"
          style={{ left: appDesignBarWidth - 8 }}
          onMouseDown={(e) => handleDrag(e, setAppDesignBarWidth)}
        />
        <div className="absolute top-[273px] left-[0px] tracking-[0.03em] font-semibold">{`Graphic Design `}</div>
        <div className="absolute top-[317px] left-[0px] w-[753px] h-8">
          <div className="absolute top-[10px] left-[0px] rounded-md bg-whitesmoke-200 w-[753px] h-3" />
          <div
            className="absolute top-[10px] left-[0px] rounded-md bg-darkorange-100 h-3"
            style={{ width: graphicDesignBarWidth }}
          />
          <div
            className="absolute top-[0px] shadow-[0px_4px_7px_rgba(0,_0,_0,_0.2)] rounded-[50%] bg-whitesmoke-200 border-darkorange-100 border-[3px] border-solid box-border w-8 h-8 cursor-pointer"
            style={{ left: graphicDesignBarWidth - 8 }}
            onMouseDown={(e) => handleDrag(e, setGraphicDesignBarWidth)}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
