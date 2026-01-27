import express, { Router } from "express"
import { BookingController } from "./booking.controller"

const router = express.Router()

router.post("/", BookingController.createBooking)
router.get("/", BookingController.getAllBooking)
router.get("/:id", BookingController.getBookingById)



export const bookingRouter: Router = router