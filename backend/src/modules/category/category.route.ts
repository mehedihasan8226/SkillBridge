import express from "express";
import { CategoryController } from "./category.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router();

router.post("/", auth(UserRole.Admin), CategoryController.createCategory);
router.get("/", CategoryController.getAllCategories);

export const CategoryRoutes = router;
