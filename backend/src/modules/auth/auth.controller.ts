import { Request, Response } from "express";
import { AuthService } from "./auth.service";



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



export const AuthController = {
    getAuthProfileById

}