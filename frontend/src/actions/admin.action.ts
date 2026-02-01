
"use server"

import { adminService } from "@/services/admin.service";

export const createCategories = async (categoriesData : { name: string } ) => {
  const res = await adminService.createCategories(categoriesData);
  
  console.log("createBookins Result:", res); 
  
  return res; 
};

export const createAssignCategories = async ( assignCategories: { tutorId: string; categoryIds: string[] }) => {
  const res = await adminService.createAssignCategories(assignCategories);
  
  console.log("createBookins Result:", res); 
  
  return res; 
};

export const getCategories = async () => {
  const res = await adminService.getCategories();
  
  console.log("getCategories Result:", res); 
  
  return res; 
};

export const getAssignCategories = async () => {
  const res = await adminService.getAssignCategories();
  
  console.log("getAssignCategories Result:", res); 
  
  return res; 
};