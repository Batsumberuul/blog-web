import FooterText from "./FooterText";

const FooterLogo = () => {
  return (
    <div className="flex justify-between">
      <div>
        <img
          className="w-[158px] h-[36px]"
          src="/Logo.png"
        />
        <FooterText text="© All Rights Reserved." />
      </div>
      <div className="flex gap-4 justify-items-center">
        <FooterText text="Terms of Use" />
        <p className="text-[#E8E8EA]">|</p>
        <FooterText text="Privacy Policy" />
        <p className="text-[#E8E8EA]">|</p>
        <FooterText text="Cookie Policy" />
      </div>
    </div>
  );
};
export default FooterLogo;
