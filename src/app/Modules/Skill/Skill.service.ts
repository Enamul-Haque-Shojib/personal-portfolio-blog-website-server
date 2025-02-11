import AppError from "../../errors/AppError";
import { AuthModel } from "../Auth/Auth.model";
import { TSkill } from "./Skill.interface";
import { SkillModel } from "./Skill.model";



const createSkillIntoDB = async (payload: TSkill) => {
    const user = await AuthModel.findOne({ email: payload.authEmail });

    if (!user) {
      throw new AppError(
        404,
        'User not found'
      );
    }

    const newProject = await SkillModel.create(payload);
    return newProject;
 
};

const updateSingleSkillIntoDB = async (id: string, payload: Partial<TSkill>) => {
    if ((await SkillModel.isSkillExistsById(id)) == null) {
      throw new AppError(
        400,
        'Skill Does not exists',
      );
    }
  
    const result = await SkillModel.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    });
    return result;
  };


  const deleteSingleSkillIntoDB = async (id: string) => {
    const deleteProject = await SkillModel.findByIdAndDelete(id);
    if(!deleteProject) {
        throw new AppError(400, 'Skill does not exist or something is wrong')
    }
  };

  const getAllSkillsIntoDB = async () => {
    const result = await SkillModel.find()


    return result;
  };

export const SkillServices = {
    createSkillIntoDB,
    updateSingleSkillIntoDB,
    deleteSingleSkillIntoDB,
    getAllSkillsIntoDB
}