import { env } from "@/env";
// import { cookies } from "next/headers";

// const AUTH_URL = process.env.AUTH_URL
const AUTH_URL = env.AUTH_URL
const API_URL = env.API_URL

export const userService = {

  
  //    getCurrentUser: async function (context?: { req: any }) {
  //   try {
  //     const headers: Record<string, string> = {
  //       "Content-Type": "application/json",
  //     };

  //     if (context?.req?.headers?.cookie) {
  //       headers["Cookie"] = context.req.headers.cookie;
  //     }

  //     const res = await fetch(`${API_URL}/user/me`, {
  //       headers,
  //       cache: "no-store", 
  //     });

  //     const data = await res.json();

  //     if (!data) {
  //       return { data: null, error: { message: "data is missing!" } };
  //     }

  //     return { data: data, error: null };
  //   } catch (error) {
  //     console.error(error);
  //     return { data: null, error: { message: "Something went wrong." } };
  //   }
  // },

    getSession : async function (context: any){
       const cookieHeader = context.req.headers.cookie || "";
        try {
            // const cookieStore = await cookies()
              
              const res = await fetch(`${AUTH_URL}/get-session`,{
                headers: {
                  // Cookie: cookieStore.toString(),
                   Cookie: cookieHeader 
                },
                cache: "no-store"
              })
            
              const session = await res.json()
              console.log(session);
              

              if(session === null){
                return {data: null, error: {message: "Session is missing!"}}
              }
            
           return {data: session, error: null}
            
        } catch (error) {
            console.error(error);
            return {data: null, error: {message: "Somethings went wrong."}}
            
        }
    }

}

