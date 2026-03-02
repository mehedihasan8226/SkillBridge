// import { AppSidebar } from "@/components/app-sidebar"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { Separator } from "@/components/ui/separator"
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar"
// import { Role } from "@/constants/role"
// import { userService } from "@/services/user.service"




// export default async function DashboardLayout({tutor, student, admin}: 
//   {
//     children: React.ReactNode,
//     student: React.ReactNode,
//     tutor: React.ReactNode,
//     admin: React.ReactNode,
//   }) {


//     const {data} = await userService.getSession()

//    const userInfo = data.user

//   return (

//     <SidebarProvider>
//       <AppSidebar user={userInfo} />
//       <SidebarInset>
//         <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
//           <SidebarTrigger className="-ml-1" />
          
//         </header>
//         <div className="flex flex-1 flex-col gap-4 p-4">
  

//           {
//   userInfo.role === Role.admin 
//     ? admin 
//     : userInfo.role === Role.tutor 
//       ? tutor 
//       : student
// }

//         </div>
//       </SidebarInset>
//     </SidebarProvider>
//   )
// }




/////////////////////////////////////////////////////////



import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Role } from "@/constants/role"
import { userService } from "@/services/user.service"
import { Children } from "react"





// export default async function DashboardLayout({tutor, student, admin}: 
  
//   {
//     children: React.ReactNode,
//     student: React.ReactNode,
//     tutor: React.ReactNode,
//     admin: React.ReactNode,
//   }) {

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


    const {data} = await userService.getSession()

   const userInfo = data.user

  return (

    <SidebarProvider>
      <AppSidebar user={userInfo} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
  

    {children}

      

        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

