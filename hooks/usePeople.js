import { useQuery } from "react-query";
import { supabase } from "../utils/supabaseClient";

const sortByRoles = (people) => {
  const imvRolesOrder = [
    "Assistant Coordinator",
    "Assistant Deputy Coordinator",
    "Secretary",
    "Treasurer",
    "Project Manager Coordiantor",
    "Project Manager Member",
    "Creative Coordiantor",
    "Creative Member",
    "External Relation Coordiantor",
    "External Relation Member",
    "Logistic Coordiantor",
    "Logistic Member",
  ];

  let sortedData = [];
  imvRolesOrder.map((role) => {
    const dataPerRole = people.filter((d) => d.role === role && d.photo_url !== null);
    console.log("dataPerRole:", dataPerRole);
    sortedData = [...sortedData, ...dataPerRole];
  });

  return sortedData;
};

const getPeople = async () => {
  const { data, error } = await supabase.from("people").select();
  if (error) throw new Error(error.message);
  // console.log(data)
  // const sortedData = sortByRoles(data);
  // console.log(sortedData);

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
