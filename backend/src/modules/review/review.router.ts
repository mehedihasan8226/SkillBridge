import express, { Router } from "express"
import { ReviewController } from "./review.controller"
import auth, { UserRole } from "../../middlewares/auth"

const router = express.Router()

router.post("/",auth(UserRole.Student, UserRole.Tutor), ReviewController.createReview)
router.get("/", ReviewController.getAllReview)
router.get("/:id", ReviewController.getReviewById)



export const reviewRouter: Router = router