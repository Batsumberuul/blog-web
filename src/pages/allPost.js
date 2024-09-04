import useSWR from "swr";
import BlogCard from "../component/BlogCard";
import AllPostCategory from "../component/AllPostCategory";
import { useState } from "react";

const allPostCategoryDatas = [
  "devchallenge",
  "career",
  "meta",
  "discuss",
  "weeklyretro",
];

export const articlesAPI = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Allpost = () => {
  const [postCount, setPostCount] = useState(9);
  const { data, error, isLoading } = useSWR(articlesAPI, fetcher);
  console.log(data);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  const posts = [...data].slice(0, postCount);

  const loadMorePosts = () => {
    if (postCount < 30) {
      setPostCount((prev) => prev + 9);
    }
  };

  return (
    <div className="pt-16">
      <div className="flex flex-col gap-4 pb-6 ">
        <h1 className="font-bold text-2xl text-gray-800">All Blog Post</h1>

        <div className="flex justify-between">
          <div className="flex gap-5 ">
            <button className="font-bold text-xs text-amber-600">All</button>
            {allPostCategoryDatas.map((AllPostCategoryData) => {
              return <AllPostCategory text={AllPostCategoryData} />;
            })}
          </div>

          <p className="font-bold text-xs text-gray-800"> View All</p>
        </div>
      </div>

      <div className="grid grid-cols-3 justify-between gap-4">
        {posts.map((blog) => {
          return (
            <BlogCard
              image={blog.cover_image}
              buttonText={blog.tag_list[0]}
              title={blog.title}
              date={blog.published_at}
            />
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
