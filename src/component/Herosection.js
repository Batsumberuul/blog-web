import Button from "./Button";
import moment from "moment";

const Herosection = (props) => {
  const { image, title, date } = props;
  return (
    <div>
      <div className="flex justify-center relative">
        <img className="w-fit h-[600px] rounded-md" src={image} />
        <div className="absolute w-[598px] h-[252px] bottom-0 left-0 bg-gray-50 ml-2 mb-2 rounded-md flex flex-col justify-center px-6 gap-4">
          <Button buttonText="Technology" />
          <p className=" text-gray-950 font-semibold text-2xl text-start">
            {title}
          </p>
          <p className="text-gray-600 font-normal text-base text-start">
            {moment(date).format("ll")}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Herosection;
