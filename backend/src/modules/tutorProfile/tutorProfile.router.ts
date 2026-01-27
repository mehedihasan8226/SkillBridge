import express, { Router } from "express"
import { TutorProfileController } from "./tutorProfile.controller"

const router = express.Router()

router.post("/", TutorProfileController.createTutorProfile)
router.get("/", TutorProfileController.getAllTutorProfile)
router.get("/:id", TutorProfileController.getTutorProfileById)

router.put("/:id", TutorProfileController.updateTutorAvailability)



export const tutorProfileRouter: Router = router