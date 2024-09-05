import useSWR from "swr";
import Header from "@/component/Header";

import Footer from "@/component/Footer";

import parse from "html-react-parser";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Page = () => {
  const router = useRouter();
  const blogId = router.query.blogId;
  const url = `https://dev.to/api/articles/${blogId}`;

  const { data: blogDetial = {}, isLoading } = useSWR(url, fetcher);

  if (isLoading) return <div>isLoading</div>;

  const body_html = blogDetial?.body_html;

  return (
    <div>
      <Header />
      <div className="p-4">{parse(body_html)}</div>
      <Footer />
    </div>
  );
};
export default Page;
