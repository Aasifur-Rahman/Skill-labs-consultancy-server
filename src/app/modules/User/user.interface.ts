export type TUser = {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
};