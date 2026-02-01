

import { env } from "@/env";
import { Review } from "@/types";
import { cookies } from "next/headers";

const API_URL = env.API_URL;


export const studentService = {

 
  createBooking: async (id: string) => {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();

    const res = await fetch(`${API_URL}/booking/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cookie": cookieHeader,
      },
      body: JSON.stringify({}),
    });

 
    if (!res.ok) {
      const errorText = await res.text(); 
      console.log(res);
      const errorJson = JSON.parse(errorText);
      
      return { data: errorJson, error: { message: `Backend error: ${res.status}` }, status: res.status };
    }

  


    const result = await res.json();
    console.log("Backend Success Data:", result);

    return { data: result, error: null };

  } catch (err) {
    console.error("Fetch Exception:", err);
    return { data: null, error: { message: "Something Went Wrong" } };
  }
},


  createReview: async (reviewData: Review) => {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();

    const res = await fetch(`${API_URL}/review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cookie": cookieHeader,
      },
      body: JSON.stringify(reviewData),
    });

 
    if (!res.ok) {
      const errorText = await res.text(); 
      console.log(res);
      const errorJson = JSON.parse(errorText);
      
      return { data: errorJson, error: { message: `Backend error: ${res.status}` }, status: res.status };
    }

  


    const result = await res.json();
    console.log("Backend Success Data:", result);

    return { data: result, error: null };

  } catch (err) {
    console.error("Fetch Exception:", err);
    return { data: null, error: { message: "Something Went Wrong" } };
  }
},




};