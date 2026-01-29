export const adminRoutes = [
    {
      title: "User Management",

      items: [
        {
          title: "Analitics",
          url: "/analitics",
        },

      ],
    },
   
  ]


  export  interface Route {
    title: string,
    items :{
        title: string,
        url: string
    }[]
  }