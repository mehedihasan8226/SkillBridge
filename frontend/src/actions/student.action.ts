// studentService


"use server"

import { studentService } from "@/services/student.service";
import { Review } from "@/types";


export const createBookins = async (id : string, tutorId: string ) => {
  const res = await studentService.createBooking(id, tutorId);
  
  console.log("createBookins Result:", res); 
  
  return res; 
};

export const createReviews = async (reviewData : Review ) => {
  const res = await studentService.createReview(reviewData);
  
  console.log("createBookins Result:", res); 
  
  return res; 
};


export const getbookingbyuserid = async () => {
  const res = await studentService.getbookingbyuserid();
  
  console.log("getbookingbyuserid Result:", res); 
  
  return res; 
};