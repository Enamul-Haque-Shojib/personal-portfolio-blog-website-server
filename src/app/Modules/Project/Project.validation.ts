import { string, z } from 'zod';


  
const createProjectValidationSchema = z.object({
  body: z.object({
    projectName: z.string().min(1, 'Project name is required'),
    projectImgUrl: z.string({message: 'project image required'}),
  description: z.string().min(1, 'Description is required'),
  technologies: z.array(string()).min(1, 'At least one technology is required'),
  }),
});
const updateProjectValidationSchema = z.object({
  body: z.object({
    projectName: z.string().optional(),
    projectImgUrl: z.string().optional(),
  description: z.string().optional(),
  technologies: z.array(string()).optional(),
  }),
});

export const ProjectValidationSchema = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};
