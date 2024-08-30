const BlogCard = (props) => {
  const { image, title, date } = props;
  return (
    <div className="w-[392px] h-[488px]">
      <img
        width={360}
        height={240}
        className="border-2 rounded-md border-none w-96 h-80"
        src={image}
      />
      <h2 className="w-80  ">{title}</h2>
      <p className="w-80">{date}</p>
    </div>
  );
};
export default BlogCard;
