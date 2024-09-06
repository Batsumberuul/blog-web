import Button from "./Button";

const Trending = (props) => {
  const { coverImage, title } = props;
  return (
    <div
      className="bg-gray-500"
      style={{
        background: `rgba(60, 60, 60, 40)`,
      }}
    >
      <div
        className=" w-[293px] h-[320px] rounded-md border-2 flex justify-center items-end carousel-items"
        style={{
          // background: `rgba(60, 60, 60, 1), url(${coverImage})`,
          backgroundImage: `url(${coverImage})`,

          backgroundSize: "500px 300px",
        }}
      >
        <div className="flex flex-col gap-4 w-[220px] h-[120px]">
          <Button buttonText="Technology" />
          <p className="text-[#FFFFFF] font-semibold text-2xl text-start overflow-hidden">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Trending;
