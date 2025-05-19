import AppError from '../../errors/AppError';
import { TProject } from './Project.interface';
import { ProjectModel } from './Project.model';

const createProjectIntoDB = async (payload: TProject) => {
  const newProject = await ProjectModel.create(payload);
  return newProject;
};

const updateSingleProjectIntoDB = async (
  id: string,
  payload: Partial<TProject>,
) => {
  if ((await ProjectModel.isProjectExistsById(id)) == null) {
    throw new AppError(400, 'Project Does not exists');
  }

  const result = await ProjectModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteSingleProjectIntoDB = async (id: string) => {
  const deleteProject = await ProjectModel.findByIdAndDelete(id);
  if (!deleteProject) {
    throw new AppError(400, 'Project does not exist or something is wrong');
  }
};

const getAllProjectsIntoDB = async () => {
  const result = await ProjectModel.find();
  return result;
};

const getSingleProjectIntoDB = async (id: string) => {
  const result = await ProjectModel.find({ _id: id });
  return result;
};

const selectOrRemoveFeatureProjectsIntoDB = async (id:string, payload: {isSelected:boolean}) => {
  
  const result = await ProjectModel.findByIdAndUpdate(id, payload);
  return result;
};
// const removeFeatureProjectsIntoDB = async (id:string, payload: {isSelected:boolean}) => {
//   const result = await ProjectModel.findByIdAndUpdate(id, payload);
//   return result;
// };

const getFeatureProjectsIntoDB = async () => {
  const result = await ProjectModel.find({ isSelected: true });
  return result;
};

export const ProjectServices = {
  createProjectIntoDB,
  updateSingleProjectIntoDB,
  deleteSingleProjectIntoDB,
  getAllProjectsIntoDB,
  getSingleProjectIntoDB,
  getFeatureProjectsIntoDB,
  selectOrRemoveFeatureProjectsIntoDB
};
