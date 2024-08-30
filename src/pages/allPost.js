import useSWR from "swr";
import BlogCard from "../component/BlogCard";
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
  console.log(data);
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((blog) => {
        return (
          <BlogCard
            key={blog.id}
            image={blog.cover_image}
            title={blog.title}
            date={blog.published_at}
          />
        );
      })}
    </div>
  );
};
export default Allpost;
