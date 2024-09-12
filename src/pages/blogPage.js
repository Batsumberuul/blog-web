import BlogCard from "../component/BlogCard";
import useSWR from "swr";
import { useState, useContext } from "react";
import { DataContext } from "@/component/DataContext";
import BlogCardsUser from "@/component/BlogCardUser";

// export const articlesAPI = "https://dev.to/api/articles";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const BlogPage = (props) => {
  const { articles } = props;
  // const data = useContext(DataContext);

  const [postCount, setPostCount] = useState(9);
  // const { data, error, isLoading } = useSWR(articlesAPI, fetcher);

  // if (isLoading) {
  //   return <p>...loading</p>;
  // }

  // if (error) {
  //   return <p>...oh sorry error</p>;
  // }

  const posts = [...articles].slice(0, postCount);

  const loadMorePosts = () => {
    if (postCount < 30) {
      setPostCount((prev) => prev + 9);
    }
  };
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl text-gray-800 p-6">All Blog Post</h1>
      <div className="grid md:grid-cols-3 justify-between gap-4 sm:grid-cols-1">
        {posts.map((blog, index) => {
          return (
            <BlogCardsUser
              key={index}
              image={blog.cover_image}
              buttonText={blog.tag_list[length]}
              title={blog.title}
              profileImage={blog.user.profile_image}
              name={blog.user.username}
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
export default BlogPage;

export async function getServerSideProps() {
  try {
    const response = await fetch(`https://dev.to/api/articles`);
    const articles = await response.json();

    return {
      props: {
        articles,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
