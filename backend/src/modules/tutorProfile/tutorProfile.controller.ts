
import { Request, Response } from "express";
import { TutorProfileService } from "./tutorProfile.service";

const createTutorProfile = async (req: Request, res: Response) =>{
    try {
        // const user = req.user;
        // req.body.authorId = user?.id
        const result = await TutorProfileService.createTutorProfile(req.body)
    
        res.status(201).json(result)
        
    } catch (e) {
        res.status(400).json({
            error: "TutorProfile creation failed!",
            details: e
        })
    }
}




const getAllTutorProfile = async (req: Request, res: Response)=>{
        try {
        
            const result = await TutorProfileService.getAllTutorProfile()
            res.status(200).json(result)
            
        } catch (error) {
        res.status(400).json({
            error: "TutorProfile get failed",
            details: error
        })
    }
        
}


const getTutorProfileById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
      
        
        const result = await TutorProfileService.getTutorProfileById(id as string);

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Tutor Profile not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Tutor Profile fetched successfully",
            data: result
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to get Tutor Profile",
            details: error instanceof Error ? error.message : error
        });
    }
}


const updateTutorAvailability = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        
        const { availability } = req.body;

        const result = await TutorProfileService.updateTutorAvailability(id as string, availability);

        res.status(200).json({
            success: true,
            message: "Availability updated successfully",
            data: result
        });
        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "TutorProfile update failed",
            details: error instanceof Error ? error.message : error
        });
    }
}

export const TutorProfileController = {
    createTutorProfile,
    getAllTutorProfile,
    updateTutorAvailability,
    getTutorProfileById

}



