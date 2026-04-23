import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { UserService } from "./user.serivce";


const getUsers = catchAsync(async (req, res) => {
  const result = await UserService.getUsers();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Users fetched successfully",
    data: result,
  });
});

export const UserController = {
  getUsers,
};