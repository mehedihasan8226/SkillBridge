import express, { Router } from "express"
import { AuthController } from "./auth.controller"


const router = express.Router()

router.get("/:id", AuthController.getAuthProfileById)




export const authRouter: Router = router