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

      ],
    },
   
  ]