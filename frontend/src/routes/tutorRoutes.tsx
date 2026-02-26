import { Route } from "@/types";
import { url } from "inspector";
import { title } from "process";

export const tutorRoutes: Route[] = [
    {
      title: "Tutor Management",

      items: [
        {
          title: "Add Profile",
          url: "/tutor-dashboard/profile-data-add",
        },
        {
          title: "Availability",
          url: "/tutor-dashboard/tutoravailability/tutoravailabilityTable",
        },
        {
          title: "Booked Session",
          url: "/tutor-dashboard/booked-session",
        },
        {
          title: "Review",
          url: "/tutor-dashboard/booking-review",
        },


      ],
    },
    
  ]