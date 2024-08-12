import type { NextPage } from "next";
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import Services from "../components/Services";
import MyProjects from "../components/MyProjects";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const LandingPage1: NextPage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center items-center w-full bg-white text-center text-2xl text-black font-nav-bar-text-21  ">
        <div className="relative w-full max-w-[1440px] mx-auto">
          <nav className="absolute top-[61px] left-0 w-full h-[67px]">
            <NavBar />
          </nav>

          <div className="absolute top-[248px] left-0 w-full h-[686.5px]">
            <div className="relative w-full h-[617.2px]">
              <Hero />
              <div className="absolute top-[78px] right-0 bg-darkorange-200 w-[374px] h-[83px]" />
            </div>
            <div className="absolute bottom-0 right-0 flex space-x-6 p-4">
              <img
                className="w-[32.5px] h-[32.5px] overflow-hidden"
                alt="LinkedIn"
                src="/linkedin--negative.svg"
              />
              <img
                className="w-[32.5px] h-[32.5px] overflow-hidden"
                alt="Instagram"
                src="/instagram--negative.svg"
              />
              <img
                className="w-[32.5px] h-[32.5px] overflow-hidden"
                alt="Twitter"
                src="/twitter--negative.svg"
              />
              <img
                className="w-[32.5px] h-[32.5px] overflow-hidden"
                alt="Facebook"
                src="/facebook--negative.svg"
              />
            </div>
          </div>

          <div className="absolute top-[1004px] left-0 w-full h-[675px] flex justify-center">
            <div className="relative w-full max-w-[1470px]">
              <AboutMe />
              <div className="absolute top-[111px] left-[153px] bg-darkorange-200 w-[374px] h-[83px]" />
            </div>
          </div>

          <div className="absolute top-[1818px] left-0 w-full h-[584px] flex justify-center">
            <div className="relative w-full max-w-[1413px]">
              <div className="absolute top-[0px] left-[239px] w-[932px] h-[214px]">
                <div className="absolute top-[113px] left-[0px] tracking-[0.03em] inline-block w-[932px] h-[101px]">
                  Lorem ipsum dolor sit amet consectetur. Tristique amet sed
                  massa nibh lectus netus in. Aliquet donec morbi convallis
                  pretium
                </div>
                <div className="absolute top-[0px] left-[calc(50%_-_146px)] text-46xl tracking-[0.03em] font-semibold">
                  Services
                </div>
              </div>
              <Services />
            </div>
          </div>

          {/* Centering MyProjects Component */}
          <div className="flex justify-center w-full my-12">
            <MyProjects />
          </div>

          <Testimonials />

          <div className="absolute top-[4572px] left-0 w-full h-[337px] flex justify-center">
            <div className="relative w-full max-w-[932px]">
              <div className="absolute top-[0px] left-0 w-full h-[214px]">
                <div className="absolute top-[113px] left-0 tracking-[0.03em] inline-block w-[932px] h-[101px]">
                  Lorem ipsum dolor sit amet consectetur. Tristique amet sed
                  massa nibh lectus netus in. Aliquet donec morbi convallis
                  pretium
                </div>
                <div className="absolute top-[0px] left-[calc(50%_-_362px)] text-46xl tracking-[0.03em] font-semibold">
                  Lets Design Together
                </div>
              </div>
              <div className="absolute top-[262px] left-0 w-full h-[75px] text-gray-100 flex">
                <input
                  className="rounded-sm bg-whitesmoke-100 border-darkgray border-[1px] border-solid box-border w-[627px] h-[75px] px-4"
                  placeholder="Enter Your Email"
                />
                <button className="rounded-sm bg-darkorange-100 w-[222px] h-[75px] ml-4 text-white text-5xl font-semibold">
                  Contact Me
                </button>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage1;
