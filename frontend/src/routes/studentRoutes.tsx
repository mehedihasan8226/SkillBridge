import { Route } from "@/types";
import { url } from "inspector";
import { title } from "process";

export const studentRoutes: Route[] = [
    {
      title: "Student Management",

      items: [
        {
          title: "Create student",
          url: "/dashboard/create-student",
        },
        {
          title: "History",
          url: "/dashboard/history",
        },

      ],
    },
    
  ]