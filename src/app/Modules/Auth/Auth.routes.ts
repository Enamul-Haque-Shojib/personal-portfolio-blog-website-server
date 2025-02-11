import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { authValidationSchema } from './Auth.validation';
import { AuthControllers } from './Auth.controllers';
// import auth from '../../middlewares/auth';
// import { AuthRole } from './Auth.constant';

const router = express.Router();


router.post(
  '/register',
  validateRequest(authValidationSchema.authRegisterValidationSchema),
  AuthControllers.authRegister,
);
router.post(
  '/login',
  validateRequest(authValidationSchema.authLoginValidationSchema),
  AuthControllers.authLogin,
);

router.patch(
  '/update-auth/:id',
  // auth(AuthRole.Admin, AuthRole.User),
  validateRequest(authValidationSchema.updateAuthInfoValidationSchema),
  AuthControllers.updateAuth,
);
router.get(
  '/',

  AuthControllers.getAllAuths,
);

router.delete(
  '/delete-auth/:id',
  // auth(AuthRole.Admin),
  AuthControllers.deleteSingleAuth,
);



export const AuthRoutes = router;
