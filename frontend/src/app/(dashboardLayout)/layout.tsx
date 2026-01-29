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
import { ArrowUpSquare } from "lucide-react"
import { userInfo } from "os"
import { use } from "react"

export default async function DashboardLayout({children,user, admin}: 
  {
    children: React.ReactNode,
    user: React.ReactNode,
    admin: React.ReactNode,
  }) {

    //   const userInfo = {
    //       role: "user"
    // }
    const {data} = await userService.getSession()

   const userInfo = data.user

  return (

    <SidebarProvider>
      <AppSidebar user={userInfo} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          {/* <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          /> */}
          {/* <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb> */}
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {/* {children} */}
          {userInfo.role== Role.admin ? admin: user}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
