import Herosection from "./Herosection";

import HeroCarousel from "./HeroCarousel";
import {useState} from "react";
import Link from "next/link";

import useSWR from "swr";

const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Hero = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const {data, error, isLoading} = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

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
        <p
          onClick={handlePrevSlide}
          className="btn btn-outline"
        >
          ❮
        </p>
        <p
          onClick={handleNextSlide}
          className="btn btn-outline"
        >
          ❯
        </p>
      </div>
    </div>
  );
};

export default Hero;
