import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './Auth.services';

const authRegister = catchAsync(async (req, res) => {
  const authData = await AuthServices.authRegisterIntoDB(

    req.body,
  );

  const tokenData = await AuthServices.createJwtToken({
    email: authData.email,
  });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Auth registration successfully',
    data: { tokenData },
  });
});

const authLogin = catchAsync(async (req, res) => {
  const authData = await AuthServices.authLoginIntoDB(
    req.body,
  );

 

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Auth login successfully',
    data: authData,
  });
});

const updateAuth = catchAsync(async (req, res) => {

  const result = await AuthServices.updateAuthIntoDB(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Auth updated successfully',
    data: result,
  });
});

const getAllAuths = catchAsync(async (req, res) => {
  const result = await AuthServices.getAllAuthsFromDB(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Auths retrieved successfully',
    data: result,
  });
});


const deleteSingleAuth = catchAsync(async (req, res) => {
  const result = await AuthServices.deleteAuthFromDB(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Auth deleted successfully',
    data: result,
  });
});




export const AuthControllers = {
  authRegister,
  authLogin,
  updateAuth,
  getAllAuths,
  deleteSingleAuth,

};
