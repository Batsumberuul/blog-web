import HeaderText from "./HeaderText";
import SearchIcon from "./icons2/SearchIcon";
import HeaderButton from "./HeaderButton";
const headertexts = ["Home", "Blog", "Contact"];

const Header = () => {
  return (
    <div className="flex justify-between py-8">
      <div>
        <img
          className="w-[158px] h-[36px]"
          src="/Logo.png"
        />
      </div>
      <div className=" flex gap-10 justify-center  items-center">
        {headertexts.map((headertext, index) => {
          return (
            <HeaderText
              key={index}
              text={headertext}
            />
          );
        })}
      </div>
      <div className="w-[166px] h-[36px] flex gap-3 justify-between bg-gray-100 py-2 pr-2 pl-4 rounded-md">
        <HeaderButton text="Search" />
        <div className="flex justify-center items-center">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};
export default Header;
