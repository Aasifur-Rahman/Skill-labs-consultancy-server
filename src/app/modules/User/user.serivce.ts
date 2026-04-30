
import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: IUser) => {
  return await User.create(payload);
};

const getUsers = async () => {
  return await User.find().select("-password");
};

const getSingleUser = async (id: string) => {
  return await User.findById(id).select("-password");
};

export const UserService = {
  createUser,
  getUsers,
  getSingleUser,

}
