/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type TSkill = {
  title: string;
  skillImgUrl: string;
  email: string;
};

export interface SkillStaticModel extends Model<TSkill> {
  isSkillExistsById(id: string): Promise<TSkill>;
}
