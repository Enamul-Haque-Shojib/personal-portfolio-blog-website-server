import { model, Schema } from 'mongoose';
import { SkillStaticModel, TSkill } from './Skill.interface';

const skillSchema = new Schema<TSkill, SkillStaticModel>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    skillImgUrl: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
skillSchema.statics.isSkillExistsById = async function (id: string) {
  return await SkillModel.findById(id);
};

export const SkillModel = model<TSkill, SkillStaticModel>('Skill', skillSchema);
