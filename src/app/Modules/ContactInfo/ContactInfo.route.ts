import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ContactInfoValidationSchema } from './ContactInfo.validation';
import { ContactInfoControllers } from './ContactInfo.controllers';

const router = express.Router();

router.post(
  '/create-contactinfo',

  validateRequest(
    ContactInfoValidationSchema.createContactInfoValidationSchema,
  ),
  ContactInfoControllers.createContactInfo,
);

router.delete(
  '/delete-contactinfo/:id',
  ContactInfoControllers.deleteSingleContactInfo,
);

router.get('/', ContactInfoControllers.getAllContactInfo);

export const ContactInfoRoutes = router;
