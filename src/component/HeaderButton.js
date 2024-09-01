const HeaderButton = (props) => {
  const {text} = props;
  return (
    <button className=" text-center font-normal text-sm text-gray-500">
      {text}
    </button>
  );
};
export default HeaderButton;
