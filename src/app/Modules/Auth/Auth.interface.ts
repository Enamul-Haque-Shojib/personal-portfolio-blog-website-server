/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { AuthRole } from './Auth.constant';





export type TAuth = {
  name?: string;
  image?: string;
  email: string;
  password: string;
  role: 'User';
};

export interface AuthStaticModel extends Model<TAuth> {
  isAuthExistById(id: string): Promise<TAuth>;
  isAuthExistByEmail(email: string): Promise<TAuth>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}

export type TAuthRole = keyof typeof AuthRole;
