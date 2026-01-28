import { Request, Response, NextFunction } from "express";
import { TutorAvailabilityService } from "./tutorAvailability.service";

const createTutorAvailability = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tutorId = req.user?.id;
        const result = await TutorAvailabilityService.createTutorAvailability({

            ...req.body,
            tutorId,
        });

        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

const getTutorAvailabilities = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tutorId = req.user?.id; 
        const result = await TutorAvailabilityService.getTutorAvailabilities(tutorId as string);

        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const updateTutorAvailability = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const result = await TutorAvailabilityService.updateTutorAvailability(id as string, req.body);

        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const deleteTutorAvailability = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const result = await TutorAvailabilityService.deleteTutorAvailability(id as string);

        res.status(200).json({ message: "Deleted successfully", result });
    } catch (error) {
        next(error);
    }
};

export const TutorAvailabilityController = {
    createTutorAvailability,
    getTutorAvailabilities,
    updateTutorAvailability,
    deleteTutorAvailability,
};
