"use server";

import { BlogData, blogService } from "@/services/blog.service";
import { userService } from "@/services/user.service";
import { updateTag } from "next/cache";

export const getBlogs = async () => {
  return await blogService.getBlogPosts();
};


export const createBlogPost = async (data: BlogData) => {
  const res = await blogService.createBlogPost(data);
  updateTag("blogPosts");
  return res;
};


// export const getOwnProfile = async (context:any) => {
//   const { data } = await userService.getCurrentUser(context);
//   return { props: { user: data } };
// };
