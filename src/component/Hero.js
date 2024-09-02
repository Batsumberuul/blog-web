import Herosection from "./Herosection";
import BackIcon from "./icons2/BackIcon";
import ForwardIcon from "./icons2/ForwardIcon";

import useSWR from "swr";

const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Hero = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }
  return (
    <div className="flex flex-col gap-2 pb-8">
      <Herosection
        image={data[0].cover_image}
        title={data[0].title}
        date={data[0].published_at}
      />
      <div className="flex gap-2 justify-end">
        <BackIcon />
        <ForwardIcon />
      </div>
    </div>
  );
};

export default Hero;
