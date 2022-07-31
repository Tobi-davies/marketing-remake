import { media } from "../../../mock/media.mock";

const FeatureThree = () => {
  const { features } = media;
  return (
    <div className="bg-grayBg py-10 md:py-16">
      <div className="max-w-[1130px] mx-auto px-5 lg:px-10 flex flex-col md:flex-col-reverse lg:flex-row gap-5 lg:gap-0">
        <div className="w-full flex justify-center lg:w-1/2">
          <div className="relative">
            <img
              src={features.orderBg}
              width="400px"
              // height="90%"
              alt="order background"
            />

            <div className="absolute top-[70px] left-[-20px]">
              <img
                src={features.circle1}
                // width="400px"
                // height="90%"
                alt="customer"
              />
            </div>
            <div className="absolute right-0 top-[190px]">
              <img
                src={features.circle2}
                // width="400px"
                // height="90%"
                alt="customer"
              />
            </div>
            <div className="absolute bottom-[-10px] left-[65px]">
              <img
                src={features.circle3}
                // width="400px"
                // height="90%"
                alt="customer"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end  pr-0 lg:pr-[15px]">
          <div className="lg:max-w-[419px] sm:text-center lg:text-start sm:w-[700px] lg:w-full">
            <p className="font-[Uregular] font-bold text-[32px] md:text-[40px] text-dark mb-5 leading-10">
              Get direct orders from your customers
            </p>
            <p className="text-[15px] mb-[60px] text-defaultText">
              {" "}
              Create custom landing pages with Rareblocks that converts more
              visitors than any website. With lots of unique blocks easily build
              a page. There are many variations of passages of available.
            </p>

            <div className="flex max-w-[400px] lg:max-w-[500px] mx-auto lg:mx-0">
              <div className="w-1/2 flex gap-4">
                <p className="text-[26px] font-bold text-dark">4.3K+</p>
                <p className="text-[13px] text-defaultText">
                  Website’s <br />
                  Powering
                </p>
              </div>
              <div className="w-1/2 flex gap-4">
                <p className="text-[26px] font-bold text-dark"> 7M+</p>
                <p className="text-[13px] text-defaultText">
                  Chats in <br /> Last 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureThree;
