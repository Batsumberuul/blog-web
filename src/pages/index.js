import Image from "next/image";

import Allpost from "../component/allPost";

import TrendingSection from "../component/TrendingSection";

import { DataContext } from "@/component/DataContext";

import { ThemeContext } from "@/component/ThemeContext";

import { useContext } from "react";
import Hero from "@/component/Hero";

export default function Home(props) {
  // const light = useContext(ThemeContext);
  const { articles } = props;

  const data = useContext(DataContext);

  return (
    <div className="container mx-auto">
      <Hero />

      <TrendingSection />
      <Allpost />
    </div>
  );
}

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
