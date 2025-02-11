import express from 'express';

import { AuthRoutes } from '../Modules/Auth/Auth.routes';
import { BlogRoutes } from '../Modules/Blog/Blog.routes';
import { ProjectRoutes } from '../Modules/Project/Project.route';
import { ContactInfoRoutes } from '../Modules/ContactInfo/ContactInfo.route';
import { SkillRoutes } from '../Modules/Skill/Skill.route';


const router = express.Router();

const moduleRoutes = [
  {
    path: '/auths',
    route: AuthRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/projects',
    route: ProjectRoutes,
  },
  {
    path: '/contactinfo',
    route: ContactInfoRoutes,
  },
  {
    path: '/skills',
    route: SkillRoutes,
  },
 
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
