import express, { Router } from "express"
import { TutorProfileController } from "./tutorProfile.controller"
import auth, { UserRole } from "../../middlewares/auth"

const router = express.Router()

router.post("/", TutorProfileController.createTutorProfile)
router.get("/", auth(UserRole.Tutor, UserRole.Admin), TutorProfileController.getAllTutorProfile)
router.get("/:id", TutorProfileController.getTutorProfileById)

router.put("/:id", TutorProfileController.updateTutorAvailability)



export const tutorProfileRouter: Router = router