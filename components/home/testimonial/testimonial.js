import { media } from "../../../mock/media.mock";

const Testimonial = () => {
  const { extra } = media;
  return (
    <div
      className="bg-orange py-10 md:py-12"
      style={{
        backgroundImage: `url(
                      ${extra.curlyShapes}
                    )`,
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "30% 60%",
      }}
    >
      {/* <h1 className="font-[Uregular] font-bold text-5xl">Testimonial</h1> */}
      <div className="max-w-128 mx-auto px-5 lg:px-10">
        <h2 className="text-center font-bold text-white mb-8 text-[29px] md:text-[36px] leading-10">
          {" "}
          Our blessed client <br /> said about us 😍
        </h2>

        <div className="flex flex-col md:flex-row gap-x-20 gap-y-5">
          <div className="w-full md:w-1/2">
            <div>
              <div className="bg-white px-6 xl:px-14  py-4 rounded-lg relative">
                <div className="absolute h-4 w-4 bg-white left-[50%] bottom-[-7px] origin-center rotate-45"></div>
                <p className="font-bold text-defaultOrange text-center text-[18px] mb-1">
                  {" "}
                  “Incredible Experience”
                </p>
                <p className="text-center text-sm text-defaultText leading-6">
                  {" "}
                  We had an incredible experience working with Mixland and were
                  impressed they made such a big difference in only three weeks.
                  Our team is so grateful for the wonderful improvements they
                  made and their ability to get familiar with the concept so
                  quickly.
                </p>
              </div>

              <div className="flex justify-center mt-4">
                <div className="flex items-center gap-3">
                  <img src={extra.clientOne} width="50" alt="wade warren" />
                  <div>
                    <p className="font-medium text-[15px] text-white">
                      Wade Warren
                    </p>
                    <p className="text-[13px] text-white">
                      {" "}
                      CEO, ABC Corporation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd testimonial */}
          <div className="w-full md:w-1/2">
            <div>
              <div className="bg-white px-6 xl:px-14 py-4 rounded-lg relative">
                <div className="absolute h-4 w-4 bg-white left-[50%] bottom-[-7px] origin-center rotate-45"></div>
                <p className="font-bold text-defaultOrange text-center text-[18px] mb-1">
                  “Dependable, Responsive, Professional”
                </p>
                <p className="text-center text-sm text-defaultText  leading-6">
                  Fermin Apps has collaborated with Mixland team for several
                  projects such as Photo Sharing Apps and Custom Social
                  Networking Apps. The experience has been pleasant,
                  professional and exceeding our expectations. The team is
                  always thinking beyond.
                </p>
              </div>

              <div className="flex justify-center mt-4">
                <div className="flex items-center gap-3">
                  <img src={extra.clientTwo} width="50" alt=" Esther Howard" />
                  <div>
                    <p className="font-medium text-[15px] text-white">
                      Esther Howard
                    </p>
                    <p className="text-[13px] text-white">
                      {" "}
                      CEO, ABC Corporation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
