import { AppError } from "../../errorHelpers/AppError";
import { useToken } from "../../utils/token";
import { TUser } from "../User/user.interface";
import { User } from "../User/user.model";
import bcrypt from "bcrypt";



const registerUser = async (user: TUser) => {
  const isUserExist = await User.findOne({ email: user.email });

  if (isUserExist) {
    throw new AppError(409, "User already exist");
  }

  // 🔐 HASH PASSWORD HERE
  const hashedPassword = await bcrypt.hash(user.password, 10);

  const result = await User.create({
    ...user,
    password: hashedPassword,
  });

  const userData = {
    name: result.name,
    email: result.email,
    role: result.role,
    _id: result._id,
  };

  const token = useToken(userData);

  return token;
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
    logInUser
}
