import express, { Router } from "express";
import auth, { UserRole } from "../../middlewares/auth";
import { TutorAvailabilityController } from "./tutorAvailability.controller";

const router = express.Router();

// Tutor can manage their own availability
router.post("/", auth(UserRole.Tutor, UserRole.Admin), TutorAvailabilityController.createTutorAvailability);
router.get("/", auth(UserRole.Tutor, UserRole.Admin), TutorAvailabilityController.getTutorAvailabilities);
router.get("/all-availability-tutor", auth(UserRole.Tutor, UserRole.Admin), TutorAvailabilityController.getAllTutorAvailabilities);
router.put("/:id", auth(UserRole.Tutor, UserRole.Admin), TutorAvailabilityController.updateTutorAvailability);
router.delete("/:id", auth(UserRole.Tutor, UserRole.Admin), TutorAvailabilityController.deleteTutorAvailability);

export const TutorAvailabilityRouter: Router = router
