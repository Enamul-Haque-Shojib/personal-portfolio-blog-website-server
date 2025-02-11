import AppError from '../../errors/AppError';
import { authSearchableField } from './Auth.constant';
import { TAuth } from './Auth.interface';
import { AuthModel } from './Auth.model';
import {
  createToken,
} from './Auth.utils';
import QueryBuilder from '../../builder/QueryBuilder';


import config from '../../config';

const authRegisterIntoDB = async (payload: TAuth) => {
  const auth = await AuthModel.isAuthExistByEmail(payload.email);

  if(auth){
    throw new AppError(400, "Auth already exists")
  }


  const authData = await AuthModel.create(payload);
  return authData;
};

const authLoginIntoDB = async (payload: TAuth) => {
  const auth = await AuthModel.isAuthExistByEmail(payload.email);

  if (!auth) {
    throw new AppError(400, "Auth does not exist")
  }
  if (!(await AuthModel.isPasswordMatched(payload?.password, auth?.password)))
    throw new AppError(403, 'Password does not matched');

  const jwtPayload = {
    email: auth.email,
    role: auth.role
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

const updateAuthIntoDB = async (id: string, payload: Partial<TAuth>) => {
  const updateAuthInfo = await AuthModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  if (!updateAuthInfo) {
    throw new AppError(400, 'Failed to update Auth');
  }
  return updateAuthInfo;
};
const getAllAuthsFromDB = async (query: Record<string, unknown>) => {
  const authQuery = new QueryBuilder(AuthModel.find(), query)
    .search(authSearchableField)
    .sortAndOrder()
    .paginate()
    .filter();
  const result = authQuery.modelQuery;

  return result;
};

const deleteAuthFromDB = async (id: string) => {
  const deleteAuthInfo = await AuthModel.findByIdAndDelete(id);
  return deleteAuthInfo;
};



const createJwtToken = async (payload: { email: string }) => {
  const { email } = payload;
  const auth = await AuthModel.isAuthExistByEmail(email);

  const jwtPayload = {
    email: auth.email,
    role: auth.role || '',
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {
    token: accessToken,
  };
};

export const AuthServices = {
  authRegisterIntoDB,
  authLoginIntoDB,
  updateAuthIntoDB,
  getAllAuthsFromDB,
  deleteAuthFromDB,
  createJwtToken,
};
