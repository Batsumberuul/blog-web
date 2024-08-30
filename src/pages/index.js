import Image from "next/image";
import { Inter } from "next/font/google";
import Allpost from "./allPost";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <p>hello pinecone</p>
      <p>hello pinecone</p>
      <Allpost />
    </div>
  );
}
