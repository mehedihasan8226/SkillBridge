import express from "express"
import cors from "cors"
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import { tutorProfileRouter } from "./modules/tutorProfile/tutorProfile.router";
import { authRouter } from "./modules/auth/auth.router";
import { bookingRouter } from "./modules/booking/booking.router";
import { studentRouter } from "./modules/student/student.router";
import { reviewRouter } from "./modules/review/review.router";

const app  = express()

 app.use(cors({
   origin: process.env.FRONTEND_URL,
   credentials: true
 }))

 app.all("/api/auth/*splat", toNodeHandler(auth)); 


 app.use(express.json());

  app.use("/tutorprofiles", tutorProfileRouter)
  app.use("/me", authRouter)
  app.use("/booking", bookingRouter)
  app.use("/student", studentRouter)
  app.use("/review", reviewRouter)








export default app