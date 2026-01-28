
import { NextFunction, Request, Response } from "express";
import { ReviewService } from "./review.service";



const createReview = async (req: Request, res: Response, next: NextFunction) =>{
    try {
        // const user = req.user;
        // req.body.authorId = user?.id
        const result = await ReviewService.createReview(req.body)
    
        res.status(201).json(result)
        
    } catch (error) {
       next(error)
    }
}




const getAllReview = async (req: Request, res: Response, next: NextFunction)=>{
        try {
        
            const result = await ReviewService.getAllReview()
            res.status(200).json(result)
            
        } catch (error) {
            next(error)
    }
        
}


const getReviewById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
      
        
        const result = await ReviewService.getReviewById(id as string);

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Review not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Review fetched successfully",
            data: result
        });

    } catch (error) {
        
        next(error)
    }
}



export const ReviewController = {
    createReview,
    getAllReview,
    getReviewById

}



