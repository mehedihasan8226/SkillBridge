import { Request, Response, NextFunction } from "express";
import { TutorAvailabilityService } from "./tutorAvailability.service";
import { prisma } from "../../lib/prisma";
import strict from "node:assert/strict";
import { string } from "better-auth";

const createTutorAvailability = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.user?.id;

        const result = await TutorAvailabilityService.createTutorAvailability({

            ...req.body,
            userId,
        });

        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};




const getAllTutorAvailabilities = async (req: Request, res: Response, next: NextFunction) => {
    try {
     
        const result = await TutorAvailabilityService.getAllTutorAvailabilities();

        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const getTutorAvailabilities = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.user?.id; 
        const result = await TutorAvailabilityService.getTutorAvailabilities(userId as string);

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
        const userId = req.user?.id;
        const result = await TutorAvailabilityService.deleteTutorAvailability(id as string, userId as string);

        res.status(200).json({ message: "Deleted successfully", result });
    } catch (error) {
        next(error);
    }
};

export const TutorAvailabilityController = {
    createTutorAvailability,
    getAllTutorAvailabilities,
    getTutorAvailabilities,
    updateTutorAvailability,
    deleteTutorAvailability,
};
