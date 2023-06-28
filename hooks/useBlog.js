import { useQuery } from "react-query";
import { supabase } from "../utils/supabaseClient";

const getBlog = async () => {
  const { data, error } = await supabase.from("blog_post").select("*").order("id", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  // Mengkonversi data body menjadi string
  const modifiedData = data.map((blog) => ({
    ...blog,
    body: JSON.stringify(blog.body),
  }));

  return modifiedData;
};

export const useBlog = () => {
  return useQuery("blog_post", getBlog);
};

const getBlogById = async (blogId) => {
  const { data, error } = await supabase
    .from("blog_post")
    .select(
      `
      *,
      author:author_id(fullname)
      `
    )
    .eq("id", Number(blogId))
    .single();

  if (error) {
    throw new Error(error.message);
  }

  // Mengkonversi data body menjadi string
  const modifiedData = {
    ...data,
    body: JSON.stringify(data.body),
  };

  return modifiedData;
};

export const useBlogById = (blogId) => {
  return useQuery(["blog_post", blogId], () => getBlogById(blogId));
};
