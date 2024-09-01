import Image from "next/image";
import {Inter} from "next/font/google";
import Allpost from "./allPost";
import Header from "../component/Header";
import Footer from "../component/Footer";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <div className="container mx-auto ">
      <Header />

      <Allpost />
    </div>
  );
}
