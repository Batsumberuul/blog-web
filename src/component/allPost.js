import BlogCard from "./BlogCard";

import { useState, useContext, use } from "react";
import Link from "next/link";
import { DataContext } from "./DataContext";
import AllPostCategory from "./AllPostCategory";

const Allpost = () => {
  const data = useContext(DataContext);
  const [postCount, setPostCount] = useState(9);
  const [name, setname] = useState(5);

  const tags = [];

  data.forEach(function (data) {
    data.tag_list.forEach(function (tag_list) {
      if (!tags.includes(tag_list, false)) {
        tags.push(tag_list);
      }
    });
  });
  const postsCategory = [...tags].slice(0, name);

  const showname = () => {
    setname((prev) => prev + 5);
  };

  const loadMorePosts = () => {
    if (postCount < 30) {
      setPostCount((prev) => prev + 9);
    }
  };

  const [selectedTag, setSelectedTag] = useState("");

  const filteredBlogs = data.filter((blog) => {
    if (selectedTag === "") {
      return true;
    }
    return blog.tag_list.includes(selectedTag);
  });

  const slicedBlogs = filteredBlogs.slice(0, postCount);

  const handleSelectTag = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <div className="pt-16">
      <div className="flex flex-col gap-4 pb-6">
        <h1 className="font-bold text-2xl text-gray-800">All Blog Post</h1>
        <div className="flex justify-between">
          <div className="flex gap-5 w-[800px] flex-wrap">
            <p className="font-bold text-xs text-amber-600">All</p>
            {postsCategory.map((tag, index) => {
              return (
                <div
                  onClick={() => handleSelectTag(tag)}
                  className="cursor-pointer"
                >
                  <AllPostCategory key={index} categoryName={tag} />
                </div>
              );
            })}
          </div>
          <p className="font-bold text-xs text-gray-800 " onClick={showname}>
            {" "}
            View All
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 justify-between gap-4 sm:grid-cols-1">
        {slicedBlogs.map((blog) => {
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
