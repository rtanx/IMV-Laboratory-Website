import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../../components/Header";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import Image from "next/legacy/image";
import { HashtagIcon, BriefcaseIcon, BadgeCheckIcon } from "@heroicons/react/solid";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Loading from "../../../components/Loading";
import {useAlumniById } from "../../../hooks/useAlumni";

const details = () => {
  const router = useRouter();
  const { uid } = router.query;

  if (!router.isReady) return <Loading />;

  const { data: alum, isLoading } = useAlumniById(uid);

  if (isLoading) return <Loading />;

  return (
    <>
      <Head>
        <title>{alum.fullname}'s Profile | IMV Laboratory</title>
      </Head>
      <div className="max-w-screen-xl mx-auto">
        <Header />
        <div className="flex items-center mt-6 mb-12">
          <button onClick={() => router.back()} className="ml-4 md:ml-0 mr-4 p-2 rounded-lg focus:outline-none">
            <ArrowNarrowLeftIcon className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold">Profile</h1>
        </div>
        <div className="mx-auto mb-12 px-4 w-full max-w-4xl">
          <div className="flex">
            <div>
              <Image src={alum.photo_url} width={150} height={150} layout="fixed" objectFit="cover" alt="Profile Picture" className="rounded-xl" />
              <div className="flex flex-start mt-2">
                <a href={alum.linkedin} className={"mr-2 " + (alum.linkedin ? '' : 'pointer-events-none')}  target="_blank">
                  <FaLinkedin size={24} className={alum.linkedin ? 'text-blue-700' : 'text-gray-400'} />
                </a>
                <a href={`https://www.instagram.com/${alum.instagram}`} className={"mr-2 " + (alum.instagram ? '' : 'pointer-events-none')} target="_blank">
                  <FaInstagram size={24} className={alum.instagram ? 'text-pink-600' : 'text-gray-400'} />
                </a>
                {/* <a href={`https://github.com/${alum.github}`} target="_blank">
                  <FaGithub size={24} className="text-gray-900" />
                </a> */}
              </div>
            </div>
            <div className="ml-8 space-y-2">
              <div className="flex items-center font-bold mb-4">
                <h1 className="text-4xl">{alum.fullname}</h1>
                <span className="ml-2 px-2 py-1 self-center text-lg text-blue-500 rounded-lg bg-blue-100">{alum.assistant_code}</span>
              </div>
              {alum.current_job && (
                <div className="flex items-center text-gray-500">
                    <BriefcaseIcon className="mr-2 w-6 h-6" />
                    <p>{alum.current_company ? `${alum.current_job} at ${alum.current_company}` : alum.current_job}</p>
                </div>
              )}

              <div className="flex items-center text-gray-500">
                <BadgeCheckIcon className="mr-2 w-6 h-6" />
                <p>{alum.year}</p>
              </div>
              
            </div>
          </div>

          <div className="mt-8 p-8 rounded-xl bg-pink-100">
            <h1 className="mb-4 text-xl font-bold">Expertise</h1>
          </div>

          <div className="mt-8 p-8 rounded-xl bg-blue-100">
            <h1 className="mb-4 text-xl font-bold">Research & Publication</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default details;
