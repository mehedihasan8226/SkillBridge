"use server";

import { BlogData, blogService } from "@/services/blog.service";
import { tutorService } from "@/services/tutor.service";
import { userService } from "@/services/user.service";
import { TutorProfile } from "@/types/tutorProfile.type";
import { updateTag } from "next/cache";

export const getBlogs = async () => {
  return await blogService.getBlogPosts();
};


export const createBlogPost = async (data: BlogData) => {
  const res = await blogService.createBlogPost(data);
  updateTag("blogPosts");
  return res;
};


// export const getOwnProfile = async () => {
//   const { data } = await userService.getCurrentUser();
//   return { props: { user: data } };
// };
