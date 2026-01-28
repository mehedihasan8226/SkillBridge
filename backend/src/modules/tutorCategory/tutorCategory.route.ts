import express from "express";
import { TutorCategoryController } from "./tutorCategory.controller";

const router = express.Router();

router.post(
  "/tutors/:tutorId/categories",
  TutorCategoryController.assignCategories
);


router.delete(
  "/tutors/:tutorId/categories/:categoryId",
  TutorCategoryController.removeCategory
);

export const TutorCategoryRoutes = router;
