const Button = (props) => {
  const {buttonText} = props;
  return (
    <button className="bg-[#4B6BFB] font-normal text-base text-[#FFFFFF] py-1 px-2.5 rounded-md w-fit">
      {buttonText}
    </button>
  );
};
export default Button;
