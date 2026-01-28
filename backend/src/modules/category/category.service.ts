
import { prisma } from "../../lib/prisma";

const createCategory = async (name: string) => {
  const category = await prisma.category.create({
    data: { name }
  });

  return category;
};

const getAllCategories = async () => {
  return prisma.category.findMany({
    orderBy: { name: "asc" }
  });
};

export const CategoryService = {
  createCategory,
  getAllCategories
};
