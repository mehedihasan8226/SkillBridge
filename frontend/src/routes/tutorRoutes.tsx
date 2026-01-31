import { Route } from "@/types";
import { url } from "inspector";
import { title } from "process";

export const tutorRoutes: Route[] = [
    {
      title: "Tutor Management",

      items: [
        {
          title: "Edit Profile",
          url: "/tutor-dashboard/profile-data-add",
        },
        {
          title: "Availability",
          url: "/tutor-dashboard/tutoravailability",
        },
        {
          title: "History",
          url: "/tutor-dashboard/history",
        },

      ],
    },
    
  ]