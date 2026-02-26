import { Route } from "@/types";

export const adminRoutes: Route[] = [
    {
      title: "User Management -> Admin",

      items: [

        {
          title: "Category Table",
          url: "/admin-dashboard/categories/categorytable",
        },

        // {
        //   title: "Assign Category Table",
        //   url: "/admin-dashboard/assign-category/assign-categorytable",
        // },

        // tutor:
        {
          title: "Add Tutor Profile",
          url: "/tutor-dashboard/profile-data-add",
        },
        {
          title: "Availability",
          // url: "/tutor-dashboard/tutoravailability",
          url: "/admin-dashboard/alltutoravailabilityTable",
          
          
        },
        {
          title: "Review",
          url: "/admin-dashboard/allreview",
        },

        // student:
            {
          title: "Session Details",
          url: "/student-dashboard/booking-session",
        },

      ],
    },
   
  ]