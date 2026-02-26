

import { env } from "@/env";
import { Review } from "@/types";
import { cookies } from "next/headers";

const API_URL = env.API_URL;


export const adminService = {

 
  createCategories: async (categoriesData: { name: string }) => {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();

    const res = await fetch(`${API_URL}/api/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cookie": cookieHeader,
      },
      body: JSON.stringify(categoriesData),
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


createAssignCategories: async (data: { tutorId: string; categoryIds: string[] }) => {
    try {
      const cookieStore = await cookies();
      const cookieHeader = cookieStore.toString();

      // Note: Endpoint matches your new router setup
      const res = await fetch(`${API_URL}/api/tutor-categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cookie": cookieHeader,
        },
        body: JSON.stringify(data), 
      });

      if (!res.ok) {
        const errorText = await res.text();
        let errorJson;
        try {
          errorJson = JSON.parse(errorText);
        } catch (e) {
          errorJson = { message: errorText };
        }

        return { 
          data: errorJson, 
          error: { message: errorJson.message || `Backend error: ${res.status}` }, 
          status: res.status 
        };
      }

      const result = await res.json();
      return { data: result, error: null };

    } catch (err) {
      console.error("Fetch Exception:", err);
      return { data: null, error: { message: "Something Went Wrong" } };
    }
  },



  getCategories: async (tutorId?: string) => {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();


    const url = tutorId ? `${API_URL}/tutorprofiles/${tutorId}` : `${API_URL}/api/categories`;

    const res = await fetch(url, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
        "Cookie": cookieHeader,
      },

    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Backend Error Response:", errorText);
      return { data: null, error: { message: `Backend error: ${res.status}` }, status: res.status };
    }

    const result = await res.json();
    console.log("Backend Success Data:", result);

    return { data: result, error: null };

  } catch (err) {
    console.error("Fetch Exception:", err);
    return { data: null, error: { message: "Something Went Wrong" } };
  }
},


  getAssignCategories: async () => {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();


    const url = `${API_URL}/api/tutor-categories`;

    const res = await fetch(url, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
        "Cookie": cookieHeader,
      },

    });
    // console.log("getAssignCategories server: ",res);
    

    if (!res.ok) {
      const errorText = await res.text();
      let errorJson = JSON.parse(errorText);
      console.error("Backend Error Response:", errorText);
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




getAllReview: async () => {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();

  
    const url = `${API_URL}/review`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cookie": cookieHeader,
      },

    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Backend Error Response:", errorText);
      return { data: null, error: { message: `Backend error: ${res.status}` }, status: res.status };
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