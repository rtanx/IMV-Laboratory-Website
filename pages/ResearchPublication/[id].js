import { useRouter } from "next/router";
import { usePublicationById } from "../../hooks/usePublication";
import Loading from "../../components/Loading";
import Header from "../../components/Header";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import Head from "next/head";

const PublicationPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: publication, isLoading, isError, error } = usePublicationById(id);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <Head>
        <title>{publication.project_name}</title>
      </Head>
      <div className="max-w-screen-xl mx-auto">
        <Header />
        <div className="flex items-center mt-6 mb-12">
          <button onClick={() => router.back()} className="ml-4 md:ml-0 mr-4 p-2 rounded-lg focus:outline-none">
            <ArrowNarrowLeftIcon className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold">Research & Publication</h1>
        </div>
        <div className="px-4 pt-8 pb-12 w-full">
          {/* <div className="flex-none w-[405px] h-[269px] rounded-lg m-4">
          <img src={publication?.image_url} className="rounded-lg" alt={publication?.project_name} />
        </div> */}
          <h1 className="text-xl font-bold text-center p-2">{publication?.project_name}</h1>
          <h2 className="text-base text-left font-bold">Abstract:</h2>
          <p className="text-justify">{publication?.description}</p>
          <h2 className="text-base text-left font-bold">Year</h2>
          <p>{publication?.year}</p>
          <div className="py-5">
            <a
              href={`${publication?.document_url}`}
              target="_blank"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Publication
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicationPage;
