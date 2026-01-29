// types/user.ts
export type User = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
  role: "Tutor" | "Student" | "Admin";
  status: "ban" | "unban";
  createdAt: string;
  updatedAt: string;
};
