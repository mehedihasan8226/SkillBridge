import express from "express";
import auth, { UserRole } from "../../middlewares/auth";
import { TutorAvailabilityController } from "./tutorAvailability.controller";

const router = express.Router();

// Tutor can manage their own availability
router.post("/", auth(UserRole.Tutor), TutorAvailabilityController.createTutorAvailability);
router.get("/", auth(UserRole.Tutor), TutorAvailabilityController.getTutorAvailabilities);
router.put("/:id", auth(UserRole.Tutor), TutorAvailabilityController.updateTutorAvailability);
router.delete("/:id", auth(UserRole.Tutor), TutorAvailabilityController.deleteTutorAvailability);

export default router;
