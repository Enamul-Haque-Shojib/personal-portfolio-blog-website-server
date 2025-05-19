import { model, Schema } from 'mongoose';
import { ProjectStaticModel, TProject } from './Project.interface';

const projectSchema = new Schema<TProject, ProjectStaticModel>(
  {
    projectName: {
      type: String,
      required: true,
      unique: true,
    },
    projectImgUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    technologies: {
      type: [String],
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
    github: {
      type: String,
      required: true,
    },
    live: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

projectSchema.statics.isProjectExistsById = async function (id: string) {
  return await ProjectModel.findById(id);
};

export const ProjectModel = model<TProject, ProjectStaticModel>(
  'Project',
  projectSchema,
);
