import Button from "./Button";

const Trending = (props) => {
  const { coverImage, title } = props;
  return (
    <div
      className=" w-[293px] h-[320px] rounded-md border-2 bg-gray-900 flex justify-center items-end carousel-items"
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundSize: "500px 300px",

        opacity: "0.7",
      }}
    >
      <div className="flex flex-col gap-4 w-[220px] h-[120px]">
        <Button buttonText="Technology" />
        <p className="text-[#FFFFFF] font-semibold text-2xl text-start ">
          {title}
        </p>
      </div>
    </div>
  );
};
export default Trending;
