import express, { Router } from "express"
import { TutorProfileController } from "./tutorProfile.controller"
import auth, { UserRole } from "../../middlewares/auth"

const router = express.Router()

router.post("/", auth(UserRole.Admin), TutorProfileController.createTutorProfile)
router.get("/",  TutorProfileController.getAllTutorProfile)
router.get("/:id", TutorProfileController.getTutorProfileById)

router.put("/:id", auth(UserRole.Tutor, UserRole.Admin), TutorProfileController.updateTutorAvailability)



export const tutorProfileRouter: Router = router