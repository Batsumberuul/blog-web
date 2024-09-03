import Button from "./Button";
import moment from "moment";

const HeroCarousel = (props) => {
  const { image, title, date } = props;
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={image} className="w-full" />
        <div className="absolute w-[598px] h-[252px] bottom-0 left-0 bg-[#FFFFFF] ml-2 mb-2 rounded-md flex flex-col justify-center px-6 gap-4">
          <Button buttonText="Technology" />
          <p className=" text-[#181A2A] font-semibold text-2xl text-start">
            {title}
          </p>
          <p className="text-[#97989F] font-normal text-base text-start">
            {moment(date).format("ll")}
          </p>
        </div>
      </div>

      {/* <div id="slide2" className="carousel-item relative w-full">
        <img src={image} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={image} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={image} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div> */}
    </div>
  );
};
export default HeroCarousel;
