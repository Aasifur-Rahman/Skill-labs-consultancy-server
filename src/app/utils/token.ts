import { JwtPayload } from 'jsonwebtoken';
import { generateToken } from './jwt';
import { envVars } from '../config/env';

export const useToken = (payload: JwtPayload) => {
    console.log(payload,"payload")
  const userData: JwtPayload = {
    _id: payload._id,
    name: payload.name,
    email: payload.email,
    role: payload.role,
  };
  console.log(userData,"userData")
  const accessToken = generateToken(
    userData as any,
    envVars.JWT_SECRET as string,
    envVars.JWT_EXPIRES_IN as string,
  );
  const refreshToken = generateToken(
    userData as any,
    envVars.JWT_SECRET as string,
    envVars.JWT_EXPIRES_IN as string,
  );

  return {
    accessToken,
    refreshToken: refreshToken,
  };
};