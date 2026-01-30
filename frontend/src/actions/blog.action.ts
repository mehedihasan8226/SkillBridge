"use server";

import { BlogData, blogService } from "@/services/blog.service";
import { tutorService } from "@/services/tutorService";
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

export const getOwnProfile = async () => {
  const { data } = await userService.getCurrentUser();
  return data;
};


// export const createTutorProfiles = async (data: TutorProfile) => {
//   const res = await tutorService.createTutorProfile(data);
//   console.log(res);
  
//   return res;
// };

export const createTutorProfiles = async (data: TutorProfile) => {
  const res = await tutorService.createTutorProfile(data);
  
  // LOOK AT YOUR VS CODE TERMINAL FOR THIS LOG:
  console.log("Action Result:", res); 
  
  return res; 
};