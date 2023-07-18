import { useQuery } from "react-query";
import { supabase } from "../utils/supabaseClient";

const getPublications = async () => {
  const { data, error } = await supabase.from("research_publication").select("*").order("id", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const usePublication = () => {
  return useQuery("research_publication", getPublications);
};

const getPublicationById = async (publicationId) => {
  const { data } = await supabase.from("research_publication").select().eq("id", Number(publicationId)).single();

  if (data === null) {
    throw new Error(`${publicationId} not found.`);
  }

  return data;
};

export const usePublicationById = (publicationId) => {
  return useQuery(["research_publication", publicationId], () => getPublicationById(publicationId));
};
