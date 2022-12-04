import { BiTimeFive } from "react-icons/bi";
import { RiFirefoxLine } from "react-icons/ri";
import { FiMonitor } from "react-icons/fi";
import { Button } from "../components";

const Features = () => {
  return (
    <section
      className="flex md:flex-row flex-col sm:py-20 py-10 w-full h-full"
      id="features"
    >
      <div className="flex-1 flex justify-center items-start flex-col">
        <h2 className="font-poppins font-semibold md:text-[45px] sm:text-[40px] text-[35px] text-headline md:leading-[75px] sm:leading-[65px] leading-[55px] w-full">
          You do the business, <br className="sm:block hidden" /> I’ll handle
          the website.
        </h2>
        <p className="font-poppins font-normal text-paragraph sm:text-lg text-base sm:leading-[30px] leading-[25px] max-w-[470px] mt-5">
          If you need a frontend developer for your company, you are in the
          right place. Let's explore the planet together!
        </p>

        <Button
          link="https://www.linkedin.com/in/tolgahant/"
          title="Contact me"
          style="mt-10"
        />
      </div>

      <div className="flex-1 flex justify-center items-center gap-y-5 md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col">
        <div className="flex flex-row p-6 rounded-[20px] gap-x-2 feature-card">
          <div className="sm:w-[64px] sm:h-[64px] w-[54px] h-[54px] rounded-full flex justify-center items-center bg-dimGreen">
            <span className="w-[50%] h-[50%]">
              <BiTimeFive className="w-full h-full" />
            </span>
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white sm:text-lg text-base sm:leading-[23px] leading-[20px] mb-1">
              Fast & SEO Friendly
            </h4>
            <p className="font-poppins font-normal text-dimWhite sm:text-base text-sm sm:leading-[24px] leading-[20px]">
              I care that the websites I develop are as optimized, fast and SEO
              friendly as possible.
            </p>
          </div>
        </div>
        <div className="flex flex-row p-6 rounded-[20px] gap-x-2 feature-card">
          <div className="sm:w-[64px] sm:h-[64px] w-[54px] h-[54px] rounded-full flex justify-center items-center bg-dimGreen">
            <span className="w-[50%] h-[50%]">
              <RiFirefoxLine className="w-full h-full" />
            </span>
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white sm:text-lg text-base sm:leading-[23px] leading-[20px] mb-1">
              Cross-browser Compatible
            </h4>
            <p className="font-poppins font-normal text-dimWhite sm:text-base text-sm sm:leading-[24px] leading-[20px]">
              It's important for me that the websites I have developed can run
              smoothly to all browsers.
            </p>
          </div>
        </div>
        <div className="flex flex-row p-6 rounded-[20px] gap-x-2 feature-card">
          <div className="sm:w-[64px] sm:h-[64px] w-[54px] h-[54px] rounded-full flex justify-center items-center bg-dimGreen">
            <span className="w-[50%] h-[50%]">
              <FiMonitor className="w-full h-full" />
            </span>
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white sm:text-lg text-base sm:leading-[23px] leading-[20px] mb-1">
              Full Responsive
            </h4>
            <p className="font-poppins font-normal text-dimWhite sm:text-base text-sm sm:leading-[24px] leading-[20px]">
              The websites I developed are fully responsive. It works smoothly
              to any screen size.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
