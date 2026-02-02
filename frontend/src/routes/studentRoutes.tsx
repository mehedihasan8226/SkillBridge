import { Route } from "@/types";
import { url } from "inspector";
import { title } from "process";

export const studentRoutes: Route[] = [
    {
      title: "Student Management",

      items: [
        {
          title: "Session Details",
          url: "/student-dashboard/booking-session",
        },
        // {
        //   title: "History",
        //   url: "/dashboard/history",
        // },

      ],
    },
    
  ]