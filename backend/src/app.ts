import express from "express"
import cors from "cors"
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import { tutorProfileRouter } from "./modules/tutorProfile/tutorProfile.router";
import { authRouter } from "./modules/auth/auth.router";
import { bookingRouter } from "./modules/booking/booking.router";
import { studentRouter } from "./modules/student/student.router";
import { reviewRouter } from "./modules/review/review.router";
import { CategoryRoutes } from "./modules/category/category.route";
import { TutorCategoryRoutes } from "./modules/tutorCategory/tutorCategory.route";
import errorHandler from "./middlewares/globalErrorHandler";
import { notFound } from "./middlewares/notFound";
import session from "express-session";
import { TutorAvailabilityRouter } from "./modules/tutorAvailability/tutorAvailability.router";


const app  = express()

 app.use(cors({
   origin: process.env.FRONTEND_URL,
   credentials: true
 }))

 app.all("/api/auth/*splat", toNodeHandler(auth)); 


 app.use(express.json());

  app.use("/tutorprofiles", tutorProfileRouter)
  app.use("/user", authRouter)
  app.use("/booking", bookingRouter)
  app.use("/student", studentRouter)
  app.use("/review", reviewRouter)

  app.use("/api/categories", CategoryRoutes);

  app.use("/api", TutorCategoryRoutes);
  app.use("/tutoravailability", TutorAvailabilityRouter);


  
app.use(session({
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false, 
    sameSite: "lax" 
  }
}));


 app.use(notFound)
 app.use(errorHandler)





export default app