import Button from "../../../shared/button/button";
import { media } from "../../../mock/media.mock";

const FeatureTwo = () => {
  const { features } = media;

  return (
    <div className="bg-white py-6">
      {/* <div>FeatureTwo</div> */}
      <div className="max-w-[1150px] mx-auto px-5 lg:px-10 flex flex-col-reverse md:flex-col lg:flex-row gap-5 lg:gap-0 ">
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
          <div className="sm:max-w-[600px] lg:max-w-[450px] sm:text-center lg:text-start md:pl-1 xl:pl-5">
            <p className="font-[Uregular] font-bold text-[29px] md:text-[40px] text-dark mb-5 md:mb-[30px] leading-9">
              {" "}
              Start selling directly inside conversations
            </p>
            <p className="text-[15px] mb-[30px] text-defaultText">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered all injected humour or randomised
              words which don't look even slightly believable.
            </p>
            <div className="flex justify-start sm:justify-center lg:justify-start">
              <Button className="bg-orange text-white px-3 py-2.5 rounded-md">
                Start Chatting Now
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center ">
          <div className="relative">
            <img
              src={features.box3}
              className="w-[250px] lg:w-[350px]"
              alt="box background"
              // width="350px"
            />
            <div className="absolute top-[55px] lg:top-[210px] left-[-60px] lg:left-[-125px]">
              <img
                src={features.box1}
                // className="w-[100px] lg:w-[280px]"
                className="w-[140px] lg:w-[260px]"
                // width="280px"
                alt="green background"
              />
            </div>
            <div className="absolute right-[-50px] lg:right-[-80px] top-[90px] lg:top-[125px]">
              <img
                src={features.box2}
                // className="w-[100px] lg:w-[180px]"
                className="w-[120px] lg:w-[180px]"
                // width="180px"
                alt="box background"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureTwo;
