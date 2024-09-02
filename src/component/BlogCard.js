import moment from "moment";

const BlogCard = (props) => {
  const { image, title, date, buttonText } = props;
  return (
    <div className="w-[392px] h-[476px] flex flex-col gap-4 border-2 border-solid p-4 rounded-xl border-gray-100">
      <div className="flex flex-1 justify-center items-center">
        <img className="border-2 rounded-xl w-[360px] h-[240px]" src={image} />
      </div>
      <button className="bg-blue-50 font-normal text-base text-blue-600 py-1 px-2.5 rounded-md w-fit">
        {buttonText}
      </button>
      <div className="flex flex-col justify-between flex-1">
        <h2 className=" text-gray-950 font-semibold text-2xl text-start">
          {title}
        </h2>

        <p className="text-gray-600 font-normal text-base text-start">
          {moment(date).format("ll")}
        </p>
      </div>
    </div>
  );
};
export default BlogCard;
