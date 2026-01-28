import { NextFunction, Request, Response } from "express";
import { AuthService } from "./auth.service";






const getAuthUser = async (req: Request, res: Response, next: NextFunction)=>{
        try {
        
            const result = await AuthService.getAuthUser()
            res.status(200).json(result)
            
        } catch (error) {
            next(error)
    }
        
}


const getAuthProfileById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
      
        
        const result = await AuthService.getAuthProfileById(id as string);

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Profile not found",
            });
        }

        res.status(200).json({
            success: true,
            message: " Profile fetched successfully",
            data: result
        });

    } catch (error) {
        
        next(error)
    }
}



const updateAuthUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        
        const { status } = req.body;

        const result = await AuthService.updateAuthUser(id as string, status);

        res.status(200).json({
            success: true,
            message: "status updated successfully",
            data: result
        });
        
    } catch (error) {
        next(error)
    }
}


export const AuthController = {
    getAuthUser,
    getAuthProfileById,
    updateAuthUser

}