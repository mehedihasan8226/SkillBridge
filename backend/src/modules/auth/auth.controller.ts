import { Request, Response } from "express";
import { AuthService } from "./auth.service";






const getAuthUser = async (req: Request, res: Response)=>{
        try {
        
            const result = await AuthService.getAuthUser()
            res.status(200).json(result)
            
        } catch (error) {
        res.status(400).json({
            error: "TutorProfile get failed",
            details: error
        })
    }
        
}


const getAuthProfileById = async (req: Request, res: Response) => {
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
        res.status(400).json({
            success: false,
            message: "Failed to get  Profile",
            details: error instanceof Error ? error.message : error
        });
    }
}



const updateAuthUser = async (req: Request, res: Response) => {
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
        res.status(400).json({
            success: false,
            message: "User status update failed",
            details: error instanceof Error ? error.message : error
        });
    }
}


export const AuthController = {
    getAuthUser,
    getAuthProfileById,
    updateAuthUser

}