import express, { Router } from "express"
import { AuthController } from "./auth.controller"


const router = express.Router()

router.get("/me/:id", AuthController.getAuthProfileById)

router.get("/", AuthController.getAuthUser)

router.put("/:id", AuthController.updateAuthUser)



export const authRouter: Router = router