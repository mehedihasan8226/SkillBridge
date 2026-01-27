import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
// import { Prisma } from "../generated/prisma/client";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
  secret: process.env.BETTER_AUTH_SECRET!,
  baseURL: process.env.BETTER_AUTH_URL!,
  
    trustedOrigins: [
      
      process.env.FRONTEND_URL! || "http://localhost:3000"
  ],
    emailAndPassword: { 
    enabled: true, 
  }, 

  // for role added:
   middleware: {
  async after(ctx: any) {
    if (ctx.path.endsWith("/sign-up/email")) {
      const role = ctx.input?.role; // <-- Better Auth parsed body

      if (role === "Tutor" || role === "Student") {
        await prisma.user.update({
          where: { id: ctx.body.user.id },
          data: { role },
        });
      }
    }
  },
},


});