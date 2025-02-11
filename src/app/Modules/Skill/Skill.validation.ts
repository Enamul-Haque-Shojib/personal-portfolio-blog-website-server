import { z } from 'zod';


  
const createSkillValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, 'title is required'),
  skillImgUrl: z.string({message: 'skill image is required'}),
  }),
});
const updateSkillValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    skillImgUrl: z.string().optional(),
  }),
});

export const SkillValidationSchema = {
  createSkillValidationSchema,
  updateSkillValidationSchema,
};
