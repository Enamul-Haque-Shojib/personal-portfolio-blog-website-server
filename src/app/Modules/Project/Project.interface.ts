/* eslint-disable no-unused-vars */
import { Model } from "mongoose";

export type TProject = {
  projectName: string;
  projectImgUrl: string;
  description: string;
  technologies: string[];
  email: string;
  github:string;
  live: string;
};

export interface ProjectStaticModel extends Model<TProject> {
  isProjectExistsById(id: string): Promise<TProject>;
}
