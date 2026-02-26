import { Route } from "@/types";

export const adminRoutes: Route[] = [
    {
      title: "User Management -> Admin",

      items: [
        // {
        //   title: "Category",
        //   url: "/admin-dashboard/categories",
        // },
        {
          title: "Category Table",
          url: "/admin-dashboard/categories/categorytable",
        },
        // {
        //   title: "Assign Category",
        //   url: "/admin-dashboard/assign-category",
        // },
        {
          title: "Assign Category Table",
          url: "/admin-dashboard/assign-category/assign-categorytable",
        },

        // tutor:
        {
          title: "Edit Profile",
          url: "/tutor-dashboard/profile-data-add",
        },
        {
          title: "Availability",
          url: "/tutor-dashboard/tutoravailability",
        },
        {
          title: "Review",
          url: "/tutor-dashboard/booking-review",
        },

        // student:
            {
          title: "Session Details",
          url: "/student-dashboard/booking-session",
        },

      ],
    },
   
  ]