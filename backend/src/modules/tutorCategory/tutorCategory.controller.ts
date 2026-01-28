import { NextFunction, Request, Response } from "express";
import { TutorCategoryService } from "./tutorCategory.service";

const assignCategories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { tutorId } = req.params;
    const { categoryIds } = req.body;

    if (!Array.isArray(categoryIds) || categoryIds.length === 0) {
      return res.status(400).json({
        success: false,
        message: "categoryIds must be a non-empty array"
      });
    }

    const result = await TutorCategoryService.assignCategoriesToTutor(
      tutorId as string,
      categoryIds
    );

    res.status(201).json({
      success: true,
      message: "Categories assigned successfully",
      data: result
    });
  } catch (error: any) {
    // res.status(500).json({
    //   success: false,
    //   message: error.message
    // });
    next(error)
  }
};

const removeCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { tutorId, categoryId } = req.params;

    await TutorCategoryService.removeCategoryFromTutor(tutorId as string, categoryId as string);

    res.status(200).json({
      success: true,
      message: "Category removed from tutor"
    });
  } catch (error: any) {

    next(error)
  }
};

export const TutorCategoryController = {
  assignCategories,
  removeCategory
};
