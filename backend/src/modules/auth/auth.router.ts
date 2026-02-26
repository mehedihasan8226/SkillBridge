import express, { Router } from "express"
import { AuthController } from "./auth.controller"
import auth, { UserRole } from "../../middlewares/auth"
import { admin } from "better-auth/plugins"



const router = express.Router()

router.get("/me", auth(UserRole.Admin,UserRole.Tutor, UserRole.Student), AuthController.getAuthProfileById)

router.get("/", AuthController.getAuthUser)

router.put("/:id", AuthController.updateAuthUser)



export const authRouter: Router = router