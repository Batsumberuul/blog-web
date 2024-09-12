const AllPostCategory = (props) => {
  const { categoryName } = props;
  return (
    <div className="flex gap-5 ">
      <p className="font-bold text-xs text-gray-800">{categoryName}</p>
    </div>
  );
};
export default AllPostCategory;
