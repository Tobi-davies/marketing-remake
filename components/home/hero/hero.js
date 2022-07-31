import ladyImage from "../../../assets/images/lady.svg";
import Image from "next/image";
import Button from "../../../shared/button/button";
// import HeroLady from "../../../animations/hero/hero";

const Hero = () => {
  return (
    <div className="mt-8">
      <div className="max-w-128 mx-auto px-10 flex flex-col lg:flex-row gap-7 lg:gap-0">
        <div className="w-full lg:w-5/12 border border-slate-300 pt-8 md:pt-16">
          {/* note this style */}

          <div className="w-full lg:max-w-[450px] border border-slate-300 sm:text-center lg:text-left ml-[-1rem] mt-[-1.5rem] xl:mt-0 xl:ml-0">
            <h1 className="text-dark font-[Uregular] font-bold text-[32px] md:text-[44px] leading-[44px] mb-5 md:mb-8">
              {" "}
              Start chatting with customers, anytime, anywhere with Apex
            </h1>
            <p className="text-[16px] w-full sm:max-w-[500px] lg:max-w-[370px] mb-8 sm:mx-auto lg:mx-0 text-defaultText">
              {" "}
              Great software that allows you to chat from any place at any time
              without any interruption.
            </p>

            <div className="flex sm:justify-center lg:justify-start">
              <Button className="bg-orange text-white px-3 py-2.5 rounded-md">
                Start Chatting Now
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row mt-10 lg:mt-[80px] justify-center lg:justify-start gap-2.5 sm:gap-0">
              <div className="flex gap-3.5 pr-3.5">
                {/* <img width="100px" src={} alt="customers" /> */}
                <div className="flex flex-col justify-around ">
                  <p className="font-bold text-dark text-[27px]">2,291</p>
                  <p className="text-defaultText text-sm">Happy Customers</p>
                </div>
              </div>

              <div className="bg-dark max-w-[50px] h-px sm:w-px sm:h-auto sm:my-3"></div>

              <div className="pl-[15px] flex flex-col justify-around ml-[-1rem] sm:ml-0 ">
                <p className="font-bold text-dark text-[27px] leading-1">
                  4.8/5
                </p>
                <div className="flex gap-2.5 items-start">
                  <div className="flex items-center">
                    <span>o</span>
                    <span>o</span>
                    <span>o</span>
                    <span>o</span>
                    <span>o</span>
                  </div>
                  <span className="text-defaultText text-sm">Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          // className="col-12 col-lg-7"
          // border="1px solid red"
          // position="relative"
          className="w-full lg:w-7/12 border border-slate-300"
        >
          {/* <img
            width="100%"
            src={ladyImage}
            alt="lady"
            // style={{
            //   position: "absolute",
            //   left: "-20px",
            // }}
          /> */}
          <Image
            src={ladyImage}
            // className={styles.imagecomonentcard}
            width="900px"
            height="930px"
          />
          {/* <HeroLady /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
