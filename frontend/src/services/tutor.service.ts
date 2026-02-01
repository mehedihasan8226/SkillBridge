// import { env } from "@/env";



// const API_URL = env.API_URL

// // No Dynamic and No {cache: no-store} : SSG --> Static page
// // {cache: no-store} : SSR --> Dynamic Page
// // next: {revalidate: 10} : ISR --> Mix between static and dynamic

// export const blogService = {
//     getBlogPosts: async function () {
//         try {
//             const res = await fetch(`${API_URL}/posts`,{next: {revalidate: 10}});
//             const data = await res.json();

//             return {data: data, error: null}
            
//         } catch (error) {
//             return {data: null, error: {message: "Something went wrong"}}
//         }
//     }
// }



import { env } from "@/env";
import { Tutoravailability, TutorProfile } from "@/types/tutorProfile.type";
import { cookies } from "next/headers";

const API_URL = env.API_URL;


interface ServiceOptions {
  cache?: RequestCache;
  revalidate?: number;
}

interface GetBlogsParams {
  isFeatured?: boolean;
  search?: string;
  page?: string;
  limit?: string;
}
export interface BlogData {
  title: string;
  content: string;
  tag?: string[];
}


export const tutorService = {

  getTutorPosts: async function (
    params?: GetBlogsParams,
    options?: ServiceOptions,
  ) {
    try {
      const url = new URL(`${API_URL}/tutorprofiles`);

      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            url.searchParams.append(key, value);
          }
        });
      }

      const config: RequestInit = {};

      if (options?.cache) {
        config.cache = options.cache;
      }

      if (options?.revalidate) {
        config.next = { revalidate: options.revalidate };
      }

      config.next = { ...config.next, tags: ["blogPosts"] };

      const res = await fetch(url.toString(), config);

      // const res = await fetch(url.toString(), {
      //   next: {
      //     tags: ["blogPosts"],
      //   },
      // });

      const data = await res.json();

      // This is an example
      //   if(data.success) {
      //     return
      //   }

      return { data: data, error: null };
    } catch (err) {
      return { data: null, error: { message: "Something Went Wrong" } };
    }
  },




  // tutor.service.ts
createTutorProfile: async (profileData: TutorProfile) => {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();

    const res = await fetch(`${API_URL}/tutorprofiles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cookie": cookieHeader,
      },
      body: JSON.stringify(profileData),
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

getTutorProfile: async (tutorId?: string) => {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();

    // If you have a tutorId, append it to the URL
    const url = tutorId ? `${API_URL}/tutorprofiles/${tutorId}` : `${API_URL}/tutorprofiles`;

    const res = await fetch(url, {
      method: "GET", // Changed from POST
      headers: {
        "Content-Type": "application/json",
        "Cookie": cookieHeader,
      },
      // GET requests cannot have a body
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


  getTutorProfileById: async function (id: string) {
    try {
      const res = await fetch(`${API_URL}/tutorprofiles/${id}`);

      const data = await res.json();

      return { data: data, error: null };
    } catch (err) {
      return { data: null, error: { message: "Something Went Wrong" } };
    }
  },


  createTutoravailAbility: async (tutoravailAbilityData: Tutoravailability) => {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();

    const res = await fetch(`${API_URL}/tutoravailability`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cookie": cookieHeader,
      },
      body: JSON.stringify(tutoravailAbilityData),
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



   createBlogPost: async (blogData: BlogData) => {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify(blogData),
      });

      const data = await res.json();

      if (data.error) {
        return {
          data: null,
          error: { message: "Error: Post not created." },
        };
      }

      return { data: data, error: null };
    } catch (err) {
      return { data: null, error: { message: "Something Went Wrong" } };
    }
  },



   getbookingbyuserid: async () => {
    try {
      const cookieStore = await cookies();
      const cookieHeader = cookieStore.toString();
  
  
      const url = `${API_URL}/booking/getbookingbyuserid`;
  
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
  


};