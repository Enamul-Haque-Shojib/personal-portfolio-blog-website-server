import { z } from 'zod';

const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string({ message: 'title is required' }),
    blogImgUrl: z.string({ message: 'blog image is required' }),
    content: z.string({ message: 'content is required' }),
  }),
});
const updateBlogValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    blogImgUrl: z.string().optional(),
    content: z.string().optional(),
  }),
});

export const BlogValidationSchema = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};
