// studentService


"use server"

import { studentService } from "@/services/student.service";


export const createBookins = async (id : string ) => {
  const res = await studentService.createBooking(id);
  
  console.log("createBookins Result:", res); 
  
  return res; 
};