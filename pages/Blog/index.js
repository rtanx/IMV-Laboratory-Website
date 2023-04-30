import Header from "../../components/Header";
import Head from "next/head";
import MainSection from "../../components/Blog/MainSection";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Head>
        <title>Research & Publication</title>
      </Head>
      <Header />
      <div className="flex">
        <MainSection />
      </div>
    </div>
  );
}
