import HeaderText from "./HeaderText";
import SearchIcon from "./icons2/SearchIcon";
import HeaderButton from "./HeaderButton";
import Link from "next/link";
import { ThemeContext } from "./ThemeContext";
import { useState } from "react";

const Header = () => {
  return (
    <div className="flex justify-between py-8 container mx-auto">
      <div>
        <img className="w-[158px] h-[36px]" src="/Logo.png" />
      </div>
      <div className=" flex gap-10 justify-center  items-center">
        <Link href={"/"}>
          <HeaderText text="Home" />
        </Link>
        <Link href={"/blogPage"}>
          <HeaderText text="Blog" />
        </Link>

        <Link href={"/contactPage"}>
          <HeaderText text="Contact" />
        </Link>
      </div>

      <div className="flex items-center  w-[190px] h-[36px]  bg-gray-100 rounded-md border-red-600">
        {" "}
        <HeaderButton />
        <SearchIcon />
      </div>
    </div>
  );
};
export default Header;
