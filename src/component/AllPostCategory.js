import useSWR from "swr";
// import { articlesAPI } from "./allPost";

import { useState, useContext } from "react";
import { DataContext } from "./DataContext";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const AllPostCategorypages = () => {
  const data = useContext(DataContext);
  const [name, setname] = useState(5);

  // const { data, error, isLoading } = useSWR(articlesAPI, fetcher);

  // if (isLoading) {
  //   return <p>...loading</p>;
  // }

  // if (error) {
  //   return <p>...oh sorry error</p>;
  // }

  const posts = [...data].slice(0, name);

  const showname = () => {
    setname((prev) => prev + 2);
  };

  return (
    <div className="flex flex-col gap-4 pb-6">
      <h1 className="font-bold text-2xl text-gray-800">All Blog Post</h1>
      <div className="flex justify-between">
        <div className="flex gap-5 w-[800px] flex-wrap">
          <p className="font-bold text-xs text-amber-600">All</p>
          {posts.map((blog, index) => {
            return (
              <AllPostCategory key={index} categoryName={blog.tag_list[0]} />
            );
          })}
        </div>
        <p className="font-bold text-xs text-gray-800 " onClick={showname}>
          {" "}
          View All
        </p>
      </div>
    </div>
  );
};
export default AllPostCategorypages;

const AllPostCategory = (props) => {
  const { categoryName } = props;
  return (
    <div className="flex gap-5 ">
      <p className="font-bold text-xs text-gray-800">{categoryName}</p>
    </div>
  );
};
