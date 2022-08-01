import { media } from "../../../mock/media.mock";

const FeatureOne = () => {
  const { features } = media;

  return (
    <div className="bg-grayBg py-10 sm:py-14 lg:py-20">
      <div className="max-w-128 mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
            <img
              src={features.videoChat}
              alt="video chat"
              className="sm:w-[400px] lg:w-[80%]"
            />
          </div>
          <div className="w-full lg:w-1/2 flex items-center pr-[15px]">
            <div className="lg:max-w-[420px] w-[100%] pt-4 sm:pt-8 lg:pt-0">
              <p className="text-[32px] md:text-[40px] text-dark mb-5 md:mb-[30px] pt-[10px] font-[Uregular] max-w-[600px] sm:mx-auto lg:mx-0 sm:text-center lg:text-left text-left leading-10">
                {" "}
                Meet your customers, with live video chat
              </p>
              <p className="text-defaultText text-[18px] lg:text-[16px] mb-[15px] md:mb-5 sm:max-w-[450px] lg:max-w-[380px] sm:text-center lg:text-left text-left sm:mx-auto lg:mx-0 leading-6">
                Proin faucibus nibh et sagittis a. Lacinia purus ac amet
                pellentesque aliquam enim.
              </p>
              <p className="text-defaultText text-base sm:mb-[10px] sm:max-w-[450px] lg:max-w-[380px] sm:text-center lg:text-left text-left sm:m-auto lg:m-0 leading-6">
                Get paychecks up to two days early. Get a $20 bonus when you
                receive qualifying direct deposits
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;
