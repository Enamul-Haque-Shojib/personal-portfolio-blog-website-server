import AppError from "../../errors/AppError";
import { AuthModel } from "../Auth/Auth.model";
import { TProject } from "./Project.interface";
import { ProjectModel } from "./Project.model";


const createProjectIntoDB = async (payload: TProject) => {
    const user = await AuthModel.findOne({ email: payload.email });

    if (!user) {
      throw new AppError(
        404,
        'User not found'
      );
    }

    const newProject = await ProjectModel.create(payload);
    return newProject;
 
};

const updateSingleProjectIntoDB = async (id: string, payload: Partial<TProject>) => {
    if ((await ProjectModel.isProjectExistsById(id)) == null) {
      throw new AppError(
        400,
        'Project Does not exists',
      );
    }
  
    const result = await ProjectModel.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    });
    return result;
  };


  const deleteSingleProjectIntoDB = async (id: string) => {
    const deleteProject = await ProjectModel.findByIdAndDelete(id);
    if(!deleteProject) {
        throw new AppError(400, 'Project does not exist or something is wrong')
    }
  };

  const getAllProjectsIntoDB = async () => {
    const result = await ProjectModel.find()
    return result;
  };
  const getSingleProjectIntoDB = async (id: string) => {
    const result = await ProjectModel.find({_id: id})
    return result;
  };

export const ProjectServices = {
    createProjectIntoDB,
    updateSingleProjectIntoDB,
    deleteSingleProjectIntoDB,
    getAllProjectsIntoDB,
    getSingleProjectIntoDB
}