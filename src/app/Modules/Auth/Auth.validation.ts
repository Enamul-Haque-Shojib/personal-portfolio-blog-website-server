import { z } from 'zod';

const authRegisterValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Auth Name is required').optional(),
    email: z.string().email('Invalid email address'),
    password: z.string({message:'Password is required'}),
    image: z.string({ message: 'Auth Image is required' }).optional(),
  }),
});
const authLoginValidationSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email address'),
    password: z.string({message:'Password is required'}),
    
  }),
});

const updateAuthInfoValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    password: z.string().optional(),
    image: z.string().optional(),

  }),
});



export const authValidationSchema = {
  authRegisterValidationSchema,
  authLoginValidationSchema,
  updateAuthInfoValidationSchema,
};
