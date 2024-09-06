import FooterText from "./FooterText";
import FacebookIcon from "./icons2/FacebookIcon";
import TwitterIcon from "./icons2/TwitterIcon";
import InstagramIcon from "./icons2/InstagramIcon";
import LinkedinIcon from "./icons2/LinkedinIcon";
import FooterLogo from "./FooterLogo";

const Footer = () => {
  return (
    <div className="container mx-auto pt-16 ">
      <div className="flex md:flex-row md:gap-64 pb-8 sm:flex-col sm:gap-4 ">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col w-[280px] gap-3">
            <p className="text-[#181A2A] font-semibold text-lg">About</p>
            <p className="text-[#696A75] font-normal text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <FooterText text="Email : info@jstemplate.net" />
            <FooterText text="Phone : 880 123 456 789" />
          </div>
        </div>
        <div className="flex md:flex-col gap-2 sm:flex-row">
          <FooterText text="Home" />
          <FooterText text="Blog" />
          <FooterText text="Contact" />
        </div>
        <div className="flex gap-5">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <LinkedinIcon />
        </div>
      </div>
      <FooterLogo />
    </div>
  );
};
export default Footer;
