import { NextFunction, Request, Response } from "express";
import { ReviewService } from "./review.service";
import { prisma } from "../../lib/prisma";


// const createReview = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const user = req.user;

//         if (!user) throw new Error("User not authenticated");

//         const { rating, comment, tutorId } = req.body;
//         // const { rating, comment } = req.body;

//         // Fetch booking to get tutorId
//         const booking = await prisma.booking.findFirst({
//             where: { tutorId: tutorId},
//             // where: { userId: user.id },
//         });

//         if (!booking) throw new Error("Booking not found");
//         if (booking.userId !== user.id) throw new Error("You did not attend this booking");

//         const payload = {
//             userId: user.id,          
//             tutorId: booking.tutorId,    
//             bookingId: booking.id,       
//             rating,
//             comment,
//         };

//         const result = await ReviewService.createReview(payload);

//         res.status(201).json({
//             success: true,
//             message: "Review created successfully",
//             data: result,
//         });
//     } catch (error) {
//         next(error);
//     }
// };


const createReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user;
        if (!user) throw new Error("User not authenticated");

      
        const { rating, comment, bookingId } = req.body;

        const payload = {
            userId: user.id,          
            bookingId,       
            rating,
            comment,
        };

        const result = await ReviewService.createReview(payload);

        res.status(201).json({
            success: true,
            message: "Review created successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const getAllReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await ReviewService.getAllReview();
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        next(error);
    }
};

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
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

export const ReviewController = {
    createReview,
    getAllReview,
    getReviewById,
};
