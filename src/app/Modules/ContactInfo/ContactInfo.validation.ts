import { z } from 'zod';

const createContactInfoValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'name is required'),
    email: z.string().email('email is required'),
    message: z.string({ message: 'message is required' }),
  }),
});

export const ContactInfoValidationSchema = {
  createContactInfoValidationSchema,
};
