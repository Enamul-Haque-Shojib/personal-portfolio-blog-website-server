import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SkillValidationSchema } from './Skill.validation';
import { SkillControllers } from './Skill.controller';





const router = express.Router();

router.post(
  '/create-skill',

  validateRequest(SkillValidationSchema.createSkillValidationSchema),
  SkillControllers.createSkill,
);
router.patch(
  '/update-skill/:id',

  validateRequest(SkillValidationSchema.updateSkillValidationSchema),
  SkillControllers.updateSingleSkill,
);
router.delete('/delete-skill/:id', SkillControllers.deleteSingleSkill);

router.get('/get-single-skill/:id', SkillControllers.getSingleSkills);
router.get('/', SkillControllers.getAllSkills);

export const SkillRoutes = router;
