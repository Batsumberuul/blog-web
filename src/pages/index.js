import Image from "next/image";
import { Inter } from "next/font/google";
import Allpost from "./allPost";
import Header from "../component/Header";
import Hero from "../component/Hero";
import TrendingSection from "../component/TrendingSection";
import Footer from "../component/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <Header />
        <Hero />
        <TrendingSection />
        <Allpost />
      </div>
      <div className="bg-[#F6F6F7]">
        <Footer />
      </div>
    </div>
  );
}
