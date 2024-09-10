const HeaderButton = (props) => {
  const {text} = props;
  return (
    <input
      className=" text-center font-normal text-sm text-gray-500  bg-gray-100 h-[36px] rounded-md "
      placeholder="Search"
    ></input>
  );
};
export default HeaderButton;
