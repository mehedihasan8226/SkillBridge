import { Route } from "@/types";
import { url } from "inspector";
import { title } from "process";

export const userRoutes: Route[] = [
    {
      title: "Blog Management",

      items: [
        {
          title: "Create Blog",
          url: "/dashboard/create-blog",
        },
        {
          title: "History",
          url: "/dashboard/history",
        },

      ],
    },
    
  ]