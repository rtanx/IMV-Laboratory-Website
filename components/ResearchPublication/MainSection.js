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
    <div class="container w-100 lg:w-4/5 mx-auto">
    {
      publications.map(pub => (
        <div class="mx-4 p-8 my-2 bg-white rounded-lg shadow-lg cursor-pointer hover:bg-gray-200" onClick={() => handleClick(pub.id)}>
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
