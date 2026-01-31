



"use server"

import { userService } from "@/services/user.service";


export const getSession = async () => {
  const res = await userService.getSession();
  
  console.log("Action Result:", res); 
  
  return res; 
};

