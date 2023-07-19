import { useQuery } from "react-query";
import { supabase } from "../utils/supabaseClient";

const getPeople = async () => {
  const { data, error } = await supabase.from("people").select();
  if (error) throw new Error(error.message);

  return data;
};

export const usePeople = () => {
  return useQuery("people", getPeople);
};

const getPerson = async (userId) => {
  const { data, error } = await supabase.from("people").select().eq("uuid", userId).single();

  if (error) throw new Error(error.message);
  return data;
};

export const usePerson = (userId) => {
  return useQuery("people", () => getPerson(userId));
};
