
import { NextFunction, Request, Response } from "express";
import { TutorProfileService } from "./tutorProfile.service";
import { prisma } from "../../lib/prisma";


const createTutorProfile = async (req: Request, res: Response, next: NextFunction) =>{
    try {
        const user = req.user;
        req.body.userId = user?.id
        const result = await TutorProfileService.createTutorProfile(req.body)
        

        res.status(201).json(result)
        
    } catch (error) {

        console.log(error);
        
        next(error)
    }
}




const getAllTutorProfile = async (req: Request, res: Response, next: NextFunction)=>{
        try {
        
            const result = await TutorProfileService.getAllTutorProfile()
            res.status(200).json({
            success: true,
            data: result
                }
            )
            
        } catch (error) {

        next(error)
    }
        
}


const getTutorProfileById = async (req: Request, res: Response, next: NextFunction) => {
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

        next(error)
    }
}


const updateTutorAvailability = async (req: Request, res: Response, next: NextFunction) => {
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

        
        next(error)
    }
}

export const TutorProfileController = {
    createTutorProfile,
    getAllTutorProfile,
    updateTutorAvailability,
    getTutorProfileById

}



