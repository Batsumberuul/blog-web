import HeroCarousel from "./HeroCarousel";
import { useState, useContext } from "react";
import { DataContext } from "./DataContext";
import Link from "next/link";

const Hero = () => {
  const data = useContext(DataContext);

  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentBlogIndex((prev) => prev + 1);
  };

  const handlePrevSlide = () => {
    setCurrentBlogIndex((prev) => prev - 1);
  };

  const filteredBlogs = data.filter((blog) => {
    if (!blog.cover_image) {
      return false;
    }

    return true;
  });

  const currentBlog = filteredBlogs[currentBlogIndex];

  return (
    <div className="md:flex flex-col gap-2 pb-8 hidden">
      <Link href={`blog/${currentBlog.id}`}>
        <HeroCarousel
          image={currentBlog.cover_image}
          title={currentBlog.title}
          date={currentBlog.published_at}
        />
      </Link>

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
