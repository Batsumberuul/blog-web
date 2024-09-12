import HeroCarousel from "./HeroCarousel";
import { useState, useContext } from "react";
import { DataContext } from "./DataContext";
import Link from "next/link";

const Hero = () => {
  const data = useContext(DataContext);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => prev + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => prev - 1);
  };

  return (
    <div className="md:flex flex-col gap-2 pb-8 hidden">
      {data.map((blog, index) => {
        if (currentSlideIndex === index) {
          return (
            <Link href={`blog/${blog.id}`}>
              <HeroCarousel
                image={blog.cover_image}
                title={blog.title}
                date={blog.published_at}
              />
            </Link>
          );
        }
      })}
      <div className="flex justify-end gap-4">
        <p onClick={handlePrevSlide} className="btn btn-outline">
          ❮
        </p>
        <p onClick={handleNextSlide} className="btn btn-outline">
          ❯
        </p>
      </div>
    </div>
  );
};

export default Hero;
