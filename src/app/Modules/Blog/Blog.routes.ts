import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogValidationSchema } from './Blog.validation';
import { BlogControllers } from './Blog.controllers';

const router = express.Router();

router.post(
  '/create-blog',

  validateRequest(BlogValidationSchema.createBlogValidationSchema),
  BlogControllers.createBlog,
);
router.patch(
  '/update-blog/:id',

  validateRequest(BlogValidationSchema.updateBlogValidationSchema),
  BlogControllers.updateSingleBlog,
);
router.delete('/delete-blog/:id', BlogControllers.deleteSingleBlog);
router.get('/', BlogControllers.getAllBlogs);
router.get('/get-single-blog/:id', BlogControllers.getSingleBlog);

export const BlogRoutes = router;
