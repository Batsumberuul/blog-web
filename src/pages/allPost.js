import useSWR from "swr";
import BlogCard from "../component/BlogCard";
import AllPostCategory from "../component/AllPostCategory";
import moment from "moment";

const AllPostCategoryDatas = [
  "Design",
  "Travel",
  "Fashion",
  "Technology",
  "Branding",
];

const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Allpost = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  return (
    <div>
      <div className="flex flex-col gap-4 pb-6">
        <h1 className="font-bold text-2xl text-gray-800">All Blog Post</h1>

        <div className="flex justify-between">
          <div className="flex gap-5 ">
            <p className="font-bold text-xs text-amber-600">All</p>
            {AllPostCategoryDatas.map((AllPostCategoryData) => {
              return <AllPostCategory text={AllPostCategoryData} />;
            })}
          </div>

          <p className="font-bold text-xs text-gray-800"> View All</p>
        </div>
      </div>

      <div className="grid grid-cols-3 justify-between gap-4">
        {data.map((blog, index) => {
          if (index < 9) {
            return (
              <BlogCard
                key={blog.id}
                image={blog.cover_image}
                buttonText={blog.type_of}
                title={blog.title}
                date={blog.published_at}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
export default Allpost;
