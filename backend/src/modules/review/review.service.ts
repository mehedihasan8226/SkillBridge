import { prisma } from "../../lib/prisma";

const createReview = async (payload: any) => {
    const { bookingId, tutorId, rating, comment, userId } = payload;

    // Validate rating
    if (rating < 1 || rating > 5) {
        throw new Error("Rating must be between 1 and 5");
    }

    // if booking exists and belongs to student
    const booking = await prisma.booking.findFirst({
        where: { userId: userId },
    });

    if (!booking) throw new Error("Booking not found");
    if (booking.userId !== userId) throw new Error("Student did not attend this booking");

    // for prevent double review 
    const existingReview = await prisma.review.findFirst({
        where: { bookingId, userId },
    });

    if (existingReview) throw new Error("Review already exists for this booking");

    const result = await prisma.review.create({
        data: {
            userId,
            tutorId,
            bookingId,
            rating,
            comment,
        },
    });

    return result;
};

const getAllReview = async () => {
    return prisma.review.findMany({
        include: {
            student: true,
            tutor: true,
            booking: true,
        },
    });
};

const getReviewById = async (id: string) => {
    return prisma.review.findUnique({
        where: { id },
        include: {
            student: true,
            tutor: true,
            booking: true,
        },
    });
};

export const ReviewService = {
    createReview,
    getAllReview,
    getReviewById,
};
