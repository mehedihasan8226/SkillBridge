
import { Request, Response } from "express";
import { BookingService } from "./booking.service";

const createBooking = async (req: Request, res: Response) =>{
    try {
        // const user = req.user;
        // req.body.authorId = user?.id
        const result = await BookingService.createBooking(req.body)
    
        res.status(201).json(result)
        
    } catch (e) {
        res.status(400).json({
            error: "Booking creation failed!",
            details: e
        })
    }
}




const getAllBooking = async (req: Request, res: Response)=>{
        try {
        
            const result = await BookingService.getAllBooking()
            res.status(200).json(result)
            
        } catch (error) {
        res.status(400).json({
            error: "Booking get failed",
            details: error
        })
    }
        
}


const getBookingById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
      
        
        const result = await BookingService.getBookingById(id as string);

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Booking not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Booking fetched successfully",
            data: result
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to get Booking",
            details: error instanceof Error ? error.message : error
        });
    }
}



export const BookingController = {
    createBooking,
    getAllBooking,
    getBookingById

}



