export  enum Role {
  USER = "USER",
  ADMIN = "ADMIN"
}



export type IUser = {
  name: string;
  email: string;
  password: string;
  role: "USER" | "ADMIN";
  phone?: string;
};



