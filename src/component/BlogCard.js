const BlogCard = (props) => {
  const {image, title, date} = props;
  return (
    <div className="w-[] h-[476px] flex flex-col justify-center items-center gap-4 border-2 border-solid p-4 rounded-xl border-gray-200">
      <div className="flex flex-1">
        <img
          className="border-2 rounded-xl w-[360px] h-[240px]"
          src={image}
        />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <h2 className=" text-gray-950 font-semibold text-2xl text-start">
          {title}
        </h2>

        <p className="text-gray-600 font-normal text-base text-start">{date}</p>
      </div>
    </div>
  );
};
export default BlogCard;
