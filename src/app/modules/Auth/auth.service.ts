import { AppError } from "../../errorHelpers/AppError";
import { useToken } from "../../utils/token";
import { TUser } from "../User/user.interface";
import { User } from "../User/user.model";
import bcrypt from "bcrypt";


export const registerUser = async(user: TUser) => {
    console.log(user,"user")
    const isUserExist =await User.findOne({ email: user.email });
    if (isUserExist) {
        throw new AppError(500,"User already exist");
    }
    const result = await User.create(user);
    console.log(result,"result")
    const userData = {
        name: result.name,
        email: result.email,
        role: result.role,
        _id: result._id
    }
    const token =useToken(userData)
    return token;
}
const logInUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });

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

  const token = useToken(userData);

  return token;
};


export const AuthService = {
    registerUser,
    logInUser
}
