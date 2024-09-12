import { useState, useContext } from "react";
import { DataContext } from "./DataContext";

const AllPostCategorypages = () => {
  const data = useContext(DataContext);

  const [name, setname] = useState(5);

  const tags = [];

  data.forEach(function (data) {
    data.tag_list.forEach(function (tag_list) {
      if (!tags.includes(tag_list, false)) {
        tags.push(tag_list);
      }
    });
  });

  const posts = [...tags].slice(0, name);

  const showname = () => {
    setname((prev) => prev + 5);
  };

  return (
    <div className="flex flex-col gap-4 pb-6">
      <h1 className="font-bold text-2xl text-gray-800">All Blog Post</h1>
      <div className="flex justify-between">
        <div className="flex gap-5 w-[800px] flex-wrap">
          <p className="font-bold text-xs text-amber-600">All</p>
          {posts.map((tag, index) => {
            return (
              // <Link href={"/tagblog"}>
              <AllPostCategory key={index} categoryName={tag} />
              // </Link>
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
