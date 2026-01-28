import express, { Router } from "express"
import { StudentController } from "./student.controller"
import auth, { UserRole } from "../../middlewares/auth"

const router = express.Router()

router.post("/", auth(UserRole.Admin), StudentController.createStudent)
router.get("/", StudentController.getAllStudent)
router.get("/:id", StudentController.getStudentById)



export const studentRouter: Router = router