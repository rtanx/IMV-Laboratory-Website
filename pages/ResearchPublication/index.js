import Head from "next/head";
import Header from "../../components/Header";
import MainSection from "../../components/ResearchPublication/MainSection";
import { usePublication } from "../../hooks/usePublication";

const Home = () => {
  const { data: publications } = usePublication();

  return (
    <div className="max-w-screen-xl mx-auto">
      <Head>
        <title>Research & Publication</title>
      </Head>
      <Header />
      <div className="flex">
        <MainSection publications={publications} />
      </div>
    </div>
  );
};

export default Home;
