// studentService


"use server"

import { studentService } from "@/services/student.service";
import { Review } from "@/types";


export const createBookins = async (id : string ) => {
  const res = await studentService.createBooking(id);
  
  console.log("createBookins Result:", res); 
  
  return res; 
};

export const createReviews = async (reviewData : Review ) => {
  const res = await studentService.createReview(reviewData);
  
  console.log("createBookins Result:", res); 
  
  return res; 
};