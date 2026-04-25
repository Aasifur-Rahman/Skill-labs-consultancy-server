import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AuthService } from "./auth.service";
import { StatusCodes } from "http-status-codes";


const registerUser = catchAsync(async (req: Request, res: Response) => {
  const user = await AuthService.registerUser(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "User registered successfully",
    data: user,
  });
});


const logInUser = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const result = await AuthService.logInUser(email, password);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User logged in successfully",
    data: result,
  })

});

export const AuthController = {
  registerUser,
  logInUser,
};

