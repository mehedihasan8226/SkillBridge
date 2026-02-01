import express from "express";
import { TutorCategoryController } from "./tutorCategory.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/tutor-categories", auth(UserRole.Admin),
  TutorCategoryController.assignCategories
);

router.get(
  "/tutor-categories", auth(UserRole.Admin),
  TutorCategoryController.getAllAssignCategoryTutor
);


router.delete(
  "/tutors/:tutorId/categories/:categoryId",
  auth(UserRole.Admin),
  TutorCategoryController.removeCategory
);

export const TutorCategoryRoutes = router;
