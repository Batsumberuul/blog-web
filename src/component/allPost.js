import BlogCard from "./BlogCard";

import AllPostCategorypages from "./AllPostCategory";
import { useState, useContext, use } from "react";
import Link from "next/link";
import { DataContext } from "./DataContext";

const Allpost = () => {
  const data = useContext(DataContext);
  const [postCount, setPostCount] = useState(9);

  const posts = [...data].slice(0, postCount);

  const loadMorePosts = () => {
    if (postCount < 30) {
      setPostCount((prev) => prev + 9);
    }
  };

  return (
    <div className="pt-16">
      <AllPostCategorypages />
      <div className="grid md:grid-cols-3 justify-between gap-4 sm:grid-cols-1">
        {posts.map((blog) => {
          return (
            <Link href={`blog/${blog.id}`}>
              <BlogCard
                image={blog.cover_image}
                buttonText={blog.tag_list[0]}
                title={blog.title}
                date={blog.published_at}
              />
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center m-4">
        {postCount < 30 && (
          <button
            onClick={loadMorePosts}
            className="btn btn-outline border-gray-200 text-[#696A75] font-medium text-base"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};
export default Allpost;
