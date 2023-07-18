import Head from "next/head";
import Header from "../../components/Header";
import MainSection from "../../components/Blog/MainSection";
import { useBlog } from "../../hooks/useBlog";

const Home = () => {
  const { data: blogPosts } = useBlog();

  return (
    <div className="max-w-screen-xl mx-auto">
      <Head>
        <title>Blog Post</title>
      </Head>
      <Header />
      <div className="flex">
        <MainSection blogPosts={blogPosts} />
      </div>
    </div>
  );
};

export default Home;
