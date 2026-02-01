import express, { Router } from "express"
import { BookingController } from "./booking.controller"
import auth, { UserRole } from "../../middlewares/auth"

const router = express.Router()

router.post("/:availabilityId", auth(UserRole.Student, UserRole.Admin, UserRole.Tutor), BookingController.createBooking)
router.get("/", BookingController.getAllBooking)
router.get("/:id", BookingController.getBookingById)



export const bookingRouter: Router = router