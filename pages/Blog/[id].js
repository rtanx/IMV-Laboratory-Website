import { useRouter } from "next/router";
import { useBlogById } from "../../hooks/useBlog";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import Head from "next/head";

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: blogPost, isLoading, isError, error } = useBlogById(id);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p class="flex justify-center items-center">Error: {error.message}</p>;
  }

  return (
    <>
      <Head>
        <title>{blogPost.title}</title>
      </Head>
      <div className="max-w-screen-xl mx-auto">
        <Header />
        <div className="flex items-center mt-6 mb-12">
          <button onClick={() => router.back()} className="ml-4 md:ml-0 mr-4 p-2 rounded-lg focus:outline-none">
            <ArrowNarrowLeftIcon className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold">Blog</h1>
        </div>

        <div class="flex justify-center items-center">
          <div className="w-[740px] h-[460px] rounded-lg  flex justify-center items-center">
            <img src={blogPost?.image_url} className="rounded" alt={blogPost?.title} />
          </div>
        </div>

        <div className="px-4 pt-8 pb-12 w-full">
          <h1 className="text-xl font-bold text-center p-2">{blogPost?.title}</h1>
          <h2 className="text-base font-bold text-blue-500">Writer : {blogPost?.author?.fullname}</h2>
          <p className="text-justify">{blogPost.body}</p>
          <h2 className="text-base text-left font-bold">Slug</h2>
          <p className=" text-blue-500">{blogPost?.slug}</p>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
