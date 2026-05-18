import { StatusCodes } from "http-status-codes";
import { envVars } from "../../config/env";
import { AppError } from "../../errorHelpers/AppError";
import { useToken } from "../../utils/token";
import { IUser } from "../User/user.interface";
import { User } from "../User/user.model";
import bcrypt from "bcrypt";

const registerUser = async (payload: Partial<IUser>) => {
  const { email, password, ...rest } = payload;

  if (!email || !password) {
    throw new AppError(StatusCodes.BAD_REQUEST, "Email and password required");
  }

  const isUserExist = await User.findOne({ email });

  if (isUserExist) {
    throw new AppError(StatusCodes.BAD_REQUEST, "User already exist");
  }

  // 🔐 HASH PASSWORD HERE
  const hashedPassword = await bcrypt.hash(
    password as string,
    envVars.BCRYPT_SALT_ROUND,
  );

  const user = await User.create({
    email,
    password: hashedPassword,
    ...rest,
  });

  return user;
};

const logInUser = async (email: string, password: string) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new AppError(404, "User not found");
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    throw new AppError(401, "Incorrect password");
  }

  const userData = {
    name: user.name,
    email: user.email,
    role: user.role,
    _id: user._id,
  };

  return useToken(userData);
};

export const AuthService = {
  registerUser,
  logInUser,
};
