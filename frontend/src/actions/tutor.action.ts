"use server"

import { tutorService } from "@/services/tutor.service";
import { userService } from "@/services/user.service";
import { Tutoravailability, TutorProfile } from "@/types/tutorProfile.type";

export const getOwnProfile = async () => {
  const { data } = await userService.getCurrentUser();
  return data;
};



export const createTutorProfiles = async (data: TutorProfile) => {
  const res = await tutorService.createTutorProfile(data);
  
  console.log("Action Result:", res); 
  
  return res; 
};


export const getTutorProfilesById = async (id: string) => {
  const res = await tutorService.getTutorProfileById(id);
  
  console.log("Action Result:", res); 
  
  return res; 
};



export const createTutoravailability = async (data: Tutoravailability) => {
  const res = await tutorService.createTutoravailAbility(data);
  
  console.log("Action Result:", res); 
  
  return res; 
};

export const getTutorProfile = async () => {
  const res = await tutorService.getTutorProfile();
  
  console.log("getTutorProfile Result:", res); 
  
  return res; 
};


