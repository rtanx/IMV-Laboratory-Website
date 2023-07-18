import { useState } from "react";
import { useRouter } from "next/router";
import Loading from "../Loading";

const MainSection = ({ blogPosts }) => {
  const [expandedPostId, setExpandedPostId] = useState(null);
  const router = useRouter();

  const handlePostClick = (postId) => {
    if (expandedPostId === postId) {
      setExpandedPostId(null);
    } else {
      setExpandedPostId(postId);
    }
  };

  const isPostExpanded = (postId) => postId === expandedPostId;

  if (!blogPosts) {
    return <Loading />;
  }

  return (
    <div className="px-4 py-8 w-full">
      <h1 className="text-2xl text-center font-bold">Blog Post</h1>

      {blogPosts.map((post) => (
        <div key={post.id} className="flex flex-row mt-12">
          <div className="flex-none w-[320px] h-[180px] rounded-lg m-4">
            <img src={post.image_url} className="rounded-lg" alt={post.title} />
          </div>
          <div className="m-4">
            <a
              href={`/Blog/${post.id}`}
              onClick={(e) => {
                e.preventDefault();
                router.push(`/Blog/${post.id}`);
              }}
              className="text-xl text-left font-bold"
            >
              {post.title}
            </a>
            <p className="text-blue-500">{post.slug}</p>
            <p>{typeof post.body === "string" ? post.body.substring(0, 500) : ""}...</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainSection;
