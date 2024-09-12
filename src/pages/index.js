import Image from "next/image";

import Allpost from "../component/allPost";

import TrendingSection from "../component/TrendingSection";

import { DataContext } from "@/component/DataContext";

import { ThemeContext } from "@/component/ThemeContext";

import { useContext } from "react";
import Hero from "@/component/Hero";

export default function Home() {
  // const light = useContext(ThemeContext);
  const data = useContext(DataContext);
  console.log(data);

  return (
    <div className="container mx-auto">
      <Hero />

      <TrendingSection />
      <Allpost />
    </div>
  );
}
