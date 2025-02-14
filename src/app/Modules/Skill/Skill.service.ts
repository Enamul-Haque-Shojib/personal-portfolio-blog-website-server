import AppError from '../../errors/AppError';

import { TSkill } from './Skill.interface';
import { SkillModel } from './Skill.model';

const createSkillIntoDB = async (payload: TSkill) => {
  const newProject = await SkillModel.create(payload);
  return newProject;
};

const updateSingleSkillIntoDB = async (
  id: string,
  payload: Partial<TSkill>,
) => {
  if ((await SkillModel.isSkillExistsById(id)) == null) {
    throw new AppError(400, 'Skill Does not exists');
  }

  const result = await SkillModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteSingleSkillIntoDB = async (id: string) => {
  const deleteProject = await SkillModel.findByIdAndDelete(id);
  if (!deleteProject) {
    throw new AppError(400, 'Skill does not exist or something is wrong');
  }
};

const getSingleSkillIntoDB = async (id: string) => {
  const result = await SkillModel.find({ _id: id });
  return result;
};
const getAllSkillsIntoDB = async () => {
  const result = await SkillModel.find();
  return result;
};

export const SkillServices = {
  createSkillIntoDB,
  updateSingleSkillIntoDB,
  deleteSingleSkillIntoDB,
  getAllSkillsIntoDB,
  getSingleSkillIntoDB,
};
