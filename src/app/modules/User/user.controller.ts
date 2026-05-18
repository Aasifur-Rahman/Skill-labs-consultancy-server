import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { User } from "./user.model";
import { UserService } from "./user.service";


const getAllUsers = catchAsync(async (req, res) => {
  const users = await UserService.getAllUsers();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Users fetched successfully",
    data: users,
  });
});

const getUserById = catchAsync(async (req, res) => {
  const user = await User.findById(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User fetched successfully",
    data: user,
  });
});

const makeAdmin = catchAsync(async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, { role: "ADMIN" }, { new: true });
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: " made admin successfully",
    data: user,
  });
});
export const UserController = {
  getAllUsers,
  getUserById,
  makeAdmin,
};