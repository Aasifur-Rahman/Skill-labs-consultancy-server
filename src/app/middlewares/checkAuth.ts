import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { JwtPayload } from "jsonwebtoken";
import { envVars } from "../config/env";

import { verifyToken } from "../utils/jwt";
import { AppError } from "../errorHelpers/AppError";
import { User } from "../modules/User/user.model";


export const checkAuth =
  (...authRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const accessToken = req.headers.authorization;

      // ❌ No token
      if (!accessToken) {
        throw new AppError(httpStatus.FORBIDDEN, "No Token Received");
      }

      // ✅ Handle Bearer token
      const token = accessToken.startsWith("Bearer ")
        ? accessToken.split(" ")[1]
        : accessToken;

      if (!token) {
        throw new AppError(httpStatus.UNAUTHORIZED, "Invalid token");
      }

      // ✅ Verify token
      const verifiedToken = verifyToken(
        token,
        envVars.JWT_SECRET
      ) as JwtPayload & { email: string; role?: string };

      // ❌ Missing email in token
      if (!verifiedToken?.email) {
        throw new AppError(httpStatus.UNAUTHORIZED, "Invalid token payload");
      }

      // ✅ Check user existence
      const isUserExist = await User.findOne({
        email: verifiedToken.email,
      });

      if (!isUserExist) {
        throw new AppError(httpStatus.NOT_FOUND, "User does not exist");
      }

     
      req.user = verifiedToken;

      next();
    } catch (error) {
      console.log("jwt error:", error);
      next(error);
    }
  };