
import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";
import { Role } from "./constants/role";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  let isAuthenticated = false;
  let isAdmin = false;
  let isTutor = false;
  let isStudent = false;

  const { data } = await userService.getSession();

  if (data) {
    isAuthenticated = true;
    isAdmin = data.user.role === Role.admin;
    isTutor = data.user.role === Role.tutor;
    isStudent = data.user.role === Role.student;
  }

  // Not logged in
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Admin rules
  if (isAdmin && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }
  if (isAdmin && pathname.startsWith("/student-dashboard")) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }

//   if (isAdmin && pathname !== "/admin-dashboard") {
//   return NextResponse.redirect(new URL("/admin-dashboard", request.url));
// }

  // Tutor rules
  if (isTutor && pathname.startsWith("/admin-dashboard")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  if (isTutor && pathname.startsWith("/student-dashboard")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

//   if (isTutor && pathname !== "/dashboard") {
//   return NextResponse.redirect(new URL("/dashboard", request.url));
// }

  // Student rules
  if (isStudent && pathname.startsWith("/admin-dashboard")) {
    return NextResponse.redirect(new URL("/student-dashboard", request.url));
  }
  if (isStudent && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/student-dashboard", request.url));
  }

//   if (isStudent && pathname !== "/student-dashboard") {
//   return NextResponse.redirect(new URL("/student-dashboard", request.url));
// }

  return NextResponse.next();
}


export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/admin-dashboard",
    "/admin-dashboard/:path*",
    "/student-dashboard",
    "/student-dashboard/:path*",
  ],
};



// import { NextRequest, NextResponse } from "next/server";
// import { userService } from "./services/user.service";
// import { Role } from "./constants/role";

// export async function proxy(request: NextRequest) {
  
//   return NextResponse.next();
// }


// export const config = {
//   matcher: [
//     "/dashboard",
//     "/dashboard/:path*",
//     "/admin-dashboard",
//     "/admin-dashboard/:path*",
//     "/student-dashboard",
//     "/student-dashboard/:path*",
//   ],
// };

