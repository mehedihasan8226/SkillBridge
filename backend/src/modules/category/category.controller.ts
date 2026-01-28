import { NextFunction, Request, Response } from "express";
import { CategoryService } from "./category.service";

const createCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Category name is required"
      });
    }

    const result = await CategoryService.createCategory(name);

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: result
    });
  } catch (error: any) {
      next(error)
  }
};

const getAllCategories = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CategoryService.getAllCategories();

    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error: any) {
      next(error)
  }
};

export const CategoryController = {
  createCategory,
  getAllCategories
};
