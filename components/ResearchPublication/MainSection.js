import { useState } from "react";
import { useRouter } from "next/router";
import Loading from "../Loading";
import { CalendarIcon } from '@heroicons/react/solid';


const MainSection = ({ publications }) => {
  const [expandedPublicationId, setExpandedPublicationId] = useState(null);
  const router = useRouter();

  const handlePublicationClick = (publicationId) => {
    if (expandedPublicationId === publicationId) {
      setExpandedPublicationId(null);
    } else {
      setExpandedPublicationId(publicationId);
    }
  };

  const isPublicationExpanded = (publicationId) => publicationId === expandedPublicationId;

  const handleClick = (id) => {
    router.push(`/ResearchPublication/${id}`);
  }
  
  if (!publications) {
    return <Loading />;
  }

  return (
    // <div className="px-4 py-8 w-full">
    //   <h1 className="text-2xl text-center font-bold">Research & Publication</h1>

    //   {publications.map((publication) => (
    //     <div key={publication.id} className="flex flex-row rounded-lg mt-12 hover:bg-gray-200" onClick={() => handlePublicationClick(publication.id)}>
    //       <div className="m-4">
    //         <a
    //           href={`/ResearchPublication/${publication.id}`}
    //           onClick={(e) => {
    //             e.preventDefault();
    //             router.push(`/ResearchPublication/${publication.id}`);
    //           }}
    //           className="text-xl text-left font-bold"
    //         >
    //           {publication.project_name}
    //         </a>
    //         <p className="text-gray-500">{publication.year}</p>
    //         <p>
    //           {typeof publication.description === "string" ? publication.description.substring(0, 200) : ""}
    //           ...
    //         </p>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
    {
      publications.map(pub => (
        <div class="w-full p-8 mt-3 bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:bg-gray-200" onClick={handleClick}>
          <h2 class="text-2xl font-bold mb-2 text-gray-800">{pub.project_name}</h2>
          <p class="text-gray-700 my-5 truncate">{pub.description}</p>
          <div className="flex items-center mt-6 text-gray-500">
            <CalendarIcon className="mr-2 w-5 h-5 text-gray-400"/>
            <p>{pub.year}</p> 
          </div>
        </div>
      ))
    }
    </div>
  );
};

export default MainSection;
