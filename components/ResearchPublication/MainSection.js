import { useState } from "react";
import { useRouter } from "next/router";
import Loading from "../Loading";

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

  if (!publications) {
    return <Loading />;
  }

  return (
    <div className="px-4 py-8 w-full">
      <h1 className="text-2xl text-center font-bold">Research & Publication</h1>

      {publications.map((publication) => (
        <div key={publication.id} className="flex flex-row mt-12" onClick={() => handlePublicationClick(publication.id)}>
          {/* <div className="flex-none w-[405px] h-[269px] rounded-lg m-4">
            <img src={publication.image_url} className="rounded-lg" alt={publication.title} />
          </div> */}
          <div className="m-4">
            <a
              href={`/ResearchPublication/${publication.id}`}
              onClick={(e) => {
                e.preventDefault();
                router.push(`/ResearchPublication/${publication.id}`);
              }}
              className="text-xl text-left font-bold"
            >
              {publication.project_name}
            </a>
            <p className="text-blue-500">{publication.year}</p>
            <p>
              {typeof publication.description === "string" ? publication.description.substring(0, 200) : ""}
              ...
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainSection;
