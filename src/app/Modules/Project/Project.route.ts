import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProjectValidationSchema } from './Project.validation';
import { ProjectControllers } from './Project.controller';

const router = express.Router();

router.post(
  '/create-project',

  validateRequest(ProjectValidationSchema.createProjectValidationSchema),
  ProjectControllers.createProject,
);
router.patch(
  '/update-project/:id',

  validateRequest(ProjectValidationSchema.updateProjectValidationSchema),
  ProjectControllers.updateSingleProject,
);
router.delete('/delete-project/:id', ProjectControllers.deleteSingleProject);

router.get('/', ProjectControllers.getAllProjects);
router.get('/get-single-project/:id', ProjectControllers.getSingleProjects);

export const ProjectRoutes = router;
