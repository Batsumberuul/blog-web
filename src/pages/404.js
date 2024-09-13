import Button from "../component/Button";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex  gap-10 justify-center p-20">
      <div>
        <p className="font-normal text-7xl text-[#000000]">404</p>
      </div>
      <div className="h-[156px] border-l-2 border-[#e8e8ea]"></div>
      <div className="flex flex-col w-[392px] gap-5">
        <p className="font-semibold text-2xl text-[#000000]">Page Not Found</p>
        <p className="font-normal text-base text-[#696A75]">
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </p>
        <div className="h-40[px] w-[130px] rounded-md pt-2 pb-2 bg-[#4B6BFB]">
          <Link href={"/"}>
            <Button buttonText="Back To Home" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Custom404;
