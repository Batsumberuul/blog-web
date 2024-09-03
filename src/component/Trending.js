import Button from "./Button";

const Trending = (props) => {
  const { coverImage, title } = props;
  return (
    <div
      className="w-[293px] h-[320px] rounded-md border-2 bg-gray-900 flex justify-center items-end"
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundSize: "500px 300px",
        opacity: "40%",
      }}
    >
      <div className="flex flex-col gap-4 w-[220px] h-[120px] opacity-1">
        <Button buttonText="Technology" />
        <p className="text-[#FFFFFF] font-semibold text-2xl text-start ">
          {title}
        </p>
      </div>
    </div>
  );
};
export default Trending;
