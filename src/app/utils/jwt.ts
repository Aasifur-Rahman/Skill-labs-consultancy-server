import jwt, { JwtPayload } from 'jsonwebtoken';
import { envVars } from '../config/env';

interface TokenPayload {
  _id: string;
  email: string;
  role: string;
}

export const generateToken = (payload: TokenPayload, secret: string, expiresIn:string): string => {
  return jwt.sign(payload, secret, { expiresIn: expiresIn as string });
};

export const verifyToken = (
  token: string,
  secret: string,
) => {
  try {
    console.log(token,"token in verify", secret)
    const decoded = jwt.verify(token, secret);
    if (typeof decoded === 'string') {
      return null; 
    }
    return decoded;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
};