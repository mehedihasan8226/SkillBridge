import express from "express";
import { TutorCategoryController } from "./tutorCategory.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/tutors/:tutorId/categories", auth(UserRole.Admin),
  TutorCategoryController.assignCategories
);


router.delete(
  "/tutors/:tutorId/categories/:categoryId",
  auth(UserRole.Admin),
  TutorCategoryController.removeCategory
);

export const TutorCategoryRoutes = router;
