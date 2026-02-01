import express, { Router } from "express"
import { BookingController } from "./booking.controller"
import auth, { UserRole } from "../../middlewares/auth"

const router = express.Router()

router.get("/", BookingController.getAllBooking)
router.get("/getbookingbyuserid",auth(UserRole.Student, UserRole.Admin, UserRole.Tutor), BookingController.getBookingByUserId)
router.post("/:availabilityId", auth(UserRole.Student, UserRole.Admin, UserRole.Tutor), BookingController.createBooking)
router.get("/:id", BookingController.getBookingById)



export const bookingRouter: Router = router