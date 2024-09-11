import useSWR from "swr";

import { useRouter } from "next/router";

import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Page = () => {
  const router = useRouter();
  const blogId = router.query.blogId;
  const url = `https://dev.to/api/articles/${blogId}`;

  const { data: blogDetial = {}, isLoading } = useSWR(url, fetcher);

  if (isLoading) return <div>isLoading</div>;

  const body_html = blogDetial?.body_html;
  const body_markdown = blogDetial?.body_markdown;

  return (
    <div className="container mx-auto">
      <div className="prose flex flex-col pl-24">
        <Markdown rehypePlugins={[rehypeHighlight]}>{body_markdown}</Markdown>
      </div>
    </div>
  );
};
export default Page;
