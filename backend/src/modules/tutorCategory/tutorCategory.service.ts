import { prisma } from "../../lib/prisma";


const assignCategoriesToTutor = async (
  tutorId: string,
  categoryIds: string[]
) => {
  const data = categoryIds.map((categoryId) => ({
    tutorId,
    categoryId
  }));

  await prisma.tutorCategory.createMany({
    data,
    skipDuplicates: true
  });

  return prisma.tutorCategory.findMany({
    where: { tutorId },
    include: {
      category: true
    }
  });
};

const removeCategoryFromTutor = async (
  tutorId: string,
  categoryId: string
) => {
  return prisma.tutorCategory.delete({
    where: {
      tutorId_categoryId: {
        tutorId,
        categoryId
      }
    }
  });
};

export const TutorCategoryService = {
  assignCategoriesToTutor,
  removeCategoryFromTutor
};
