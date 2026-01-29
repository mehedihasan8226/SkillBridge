import { Route } from "@/types";
import { url } from "inspector";
import { title } from "process";

export const tutorRoutes: Route[] = [
    {
      title: "Tutor Management",

      items: [
        {
          title: "Create Tutor",
          url: "/dashboard/create-tutor",
        },
        {
          title: "History",
          url: "/dashboard/history",
        },

      ],
    },
    
  ]