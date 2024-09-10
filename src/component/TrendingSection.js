import useSWR from "swr";
import Trending from "./Trending";
import {articlesAPI} from "./allPost";
import {useState} from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const TrendingSection = () => {
  const {data, error, isLoading} = useSWR(articlesAPI, fetcher);
  const [posts, setPosts] = useState(0);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  // const trendingPosts = [...data].slice(0, posts);

  return (
    <div className="flex flex-col gap-4 ">
      <div>
        <p className="font-bold text-2xl text-gray-800"> Trending</p>
      </div>
      <div className="flex justify-between gap-4 carousel carousel-center border-box">
        {data.map((card) => {
          return (
            <div className="carousel-item">
              <Trending
                coverImage={card.cover_image}
                title={card.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TrendingSection;
