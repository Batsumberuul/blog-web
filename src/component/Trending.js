import Button from "./Button";
import { DataContext } from "./DataContext";
import { useState, useContext } from "react";

const Trending = (props) => {
  const data = useContext(DataContext);

  const { coverImage, title, buttonText } = props;
  return (
    <div
      className="bg-gray-500 rounded-md "
      style={{
        background: `rgba(60, 60, 60, 40)`,
      }}
    >
      <div
        className=" w-[293px] h-[320px] rounded-md  flex justify-center items-end carousel-items "
        style={{
          // background: `rgba(60, 60, 60, 1), url(${coverImage})`,
          backgroundImage: `url(${coverImage})`,

          backgroundSize: "500px 300px",
          opacity: "40%",
        }}
      >
        <div className="flex flex-col gap-4 w-[220px] h-[120px] ">
          <button className="bg-[#4B6BFB] font-normal text-base text-[#FFFFFF] py-1 px-2.5 rounded-md ">
            {buttonText}{" "}
          </button>

          <p className="text-[#FFFFFF] font-semibold text-2xl text-start overflow-hidden">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Trending;
