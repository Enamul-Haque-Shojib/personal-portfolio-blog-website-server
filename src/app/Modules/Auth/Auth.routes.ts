import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { authValidationSchema } from './Auth.validation';
import { AuthControllers } from './Auth.controllers';


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

  validateRequest(authValidationSchema.updateAuthInfoValidationSchema),
  AuthControllers.updateAuth,
);
router.get(
  '/',

  AuthControllers.getAllAuths,
);

router.delete(
  '/delete-auth/:id',
  
  AuthControllers.deleteSingleAuth,
);



export const AuthRoutes = router;
