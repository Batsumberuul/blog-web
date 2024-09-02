import useSWR from "swr";
import Trending from "./Trending";

const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const TrendingSection = () => {
  const {data, error, isLoading} = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }
  return (
    <div className="flex justify-between gap-4">
      {data.map((card, index) => {
        if (index < 4) {
          return (
            <Trending
              coverImage={card.cover_image}
              title={card.title}
            />
          );
        }
      })}
    </div>
  );
};
export default TrendingSection;
