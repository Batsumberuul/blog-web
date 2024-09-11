import { createContext } from "react";
import useSWR from "swr";

export const DataContext = createContext();
const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const DataContextProvider = ({ children }) => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
