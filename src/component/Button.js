const Button = (props) => {
  const { buttonText } = props;
  return (
    <button className="bg-indigo-600 font-normal text-base text-gray-100 py-1 px-2.5 rounded-md w-fit">
      {buttonText}
    </button>
  );
};
export default Button;
