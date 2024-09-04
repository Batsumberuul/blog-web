import useSWR from "swr";

import BlogCard from "./BlogCard";
import { useState } from "react";

import { articlesAPI } from "../pages/allPost";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const BlogListingcomponent = () => {
  if (blog.tag_list[0] === "devchallenge") {
    return (
      <BlogCard
        image={blog.cover_image}
        buttonText={blog.tag_list[0]}
        title={blog.title}
        date={blog.published_at}
      />
    );
  }
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

  return (
    <div className="grid grid-cols-3 justify-between gap-4">
      {posts.map((blog) => {
        if (blog.tag_list[0] === "devchallenge") {
          return (
            <BlogCard
              image={blog.cover_image}
              buttonText={blog.tag_list[0]}
              title={blog.title}
              date={blog.published_at}
            />
          );
        }
      })}
    </div>
  );
};
export default BlogListingcomponent;
