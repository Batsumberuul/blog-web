import moment from "moment";

const BlogCard = (props) => {
  const { image, title, date, buttonText } = props;
  return (
    <div className="w-[] h-[476px] flex flex-col gap-4 border-2 border-solid p-4 rounded-xl border-gray-100">
      <div className="flex flex-1 justify-center items-center">
        <img className="border-2 rounded-xl w-[360px] h-[240px]" src={image} />
      </div>
      <button className="bg-gray-100 font-normal text-base text-[#4B6BFB] py-1 px-2.5 rounded-md w-fit">
        {buttonText}
      </button>
      <div className="flex flex-col justify-between flex-1">
        <h2 className=" text-[#181A2A] font-semibold text-2xl text-start">
          {title}
        </h2>

        <p className="text-[#97989F] font-normal text-base text-start">
          {moment(date).format("ll")}
        </p>
      </div>
    </div>
  );
};
export default BlogCard;
