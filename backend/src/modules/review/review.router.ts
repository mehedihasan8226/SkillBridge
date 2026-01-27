import express, { Router } from "express"
import { ReviewController } from "./review.controller"

const router = express.Router()

router.post("/", ReviewController.createReview)
router.get("/", ReviewController.getAllReview)
router.get("/:id", ReviewController.getReviewById)



export const reviewRouter: Router = router