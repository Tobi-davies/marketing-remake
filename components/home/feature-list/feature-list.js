import { media } from "../../../mock/media.mock";

const FeatureList = () => {
  const { features } = media;
  return (
    <div className="max-w-128 mx-auto px-5 lg:px-10 pb-8 md:pb-20 pt-4 md:pt-6 border border-300-slate">
      <h2 className="text-center font-[Uregular] text-dark pb-[10px] text-[30px] md:text-[36px]">
        Features for a better experience
      </h2>
      <div className="flex flex-wrap">
        {/* First Feature */}
        <div className="w-full md:w-6/12 lg:w-4/12 mb-4 lg:mb-0 flex flex-col md:flex-row text-center md:text-left gap-3 p-3 items-center md:items-start">
          <div>
            <img
              width="100%"
              src={features.videoIcon}
              alt="video messaging icon"
            />
          </div>
          <div>
            <p className="text-dark text-[19px] font-[Uregular]">
              Video messaging
            </p>
            <p className="text-[15px] text-defaultText mt-3">
              This software is very easy for you to manage. You can use it as
              you wish.
            </p>
          </div>
        </div>

        {/* Second Feature */}
        <div className="w-full md:w-6/12 lg:w-4/12 mb-4 lg:mb-0 flex flex-col md:flex-row text-center md:text-left gap-3 p-3 items-center md:items-start">
          <div>
            <img
              width="100%"
              src={features.saveTimeIcon}
              alt="save time icon"
            />
          </div>
          <div>
            <p className="text-dark text-[19px] font-[Uregular]">
              Save your time
            </p>
            <p className="text-[15px] text-defaultText mt-3">
              This software is very easy for you to manage. You can use it as
              you wish.
            </p>
          </div>
        </div>

        {/* Third Feature */}
        <div className="w-full md:w-6/12 lg:w-4/12 md:mx-auto flex flex-col md:flex-row text-center md:text-left gap-3 p-3 items-center md:items-start">
          <div>
            <img
              width="100%"
              src={features.keefSafeIcon}
              alt="keep safe icon"
            />
          </div>
          <div>
            <p className="text-dark text-[19px] font-[Uregular]">
              Keep safe & private
            </p>
            <p className="text-[15px] text-defaultText mt-3">
              This software is very easy for you to manage. You can use it as
              you wish.
            </p>
          </div>
        </div>

        {/* <div>;,l;k</div>

        <div>;,l;k</div> */}
      </div>
    </div>
  );
};

export default FeatureList;
