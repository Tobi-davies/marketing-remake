import { media } from "../../mock/media.mock";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";

const Footer = () => {
  const { shared } = media;
  return (
    <footer className="bg-grayBg">
      <div className="max-w-128 mx-auto px-5 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between py-5 gap-5 md:gap-0">
          <div>
            <img src={shared.logo} alt="apex logo" />
          </div>

          <ul className="flex gap-6 list-none">
            <li className="font-bold cursor-pointer text-dark">About</li>
            <li className="font-bold cursor-pointer text-dark">Features</li>
            <li className="font-bold cursor-pointer text-dark">Works</li>
            <li className="font-bold cursor-pointer text-dark">Support</li>
          </ul>

          <div className="flex items-center gap-6">
            {/* <Twitter cursor="pointer" /> */}
            <img src={shared.twitter} alt="twitter icon" />
            <img src={shared.facebook} alt="facebook icon" />
            <img src={shared.instagram} alt="instagram icon" />
            <img src={shared.github} alt="github icon" />
          </div>
        </div>

        {/* Section Divider */}
        <div className="bg-lightGray h-px"></div>

        <div className="flex flex-col md:flex-row items-center justify-between py-5 gap-5 md:gap-0 text-sm text-gray">
          <p>© Copyright 2022, All Rights Reserved</p>
          <div className="flex gap-7">
            <p className="cursor-pointer text-sm text-gray">Privacy Policy</p>
            <p className="cursor-pointer text-sm text-gray">
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
