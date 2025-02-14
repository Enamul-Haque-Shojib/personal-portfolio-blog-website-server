import AppError from '../../errors/AppError';
import { TContactInfo } from './ContactInfo.interface';
import { ContactInfoModel } from './ContactInfo.model';

const createContactInfoIntoDB = async (payload: TContactInfo) => {
  const newProject = await ContactInfoModel.create(payload);
  return newProject;
};
const deleteSingleContactInfoIntoDB = async (id: string) => {
  const deleteContactInfo = await ContactInfoModel.findByIdAndDelete(id);
  if (!deleteContactInfo) {
    throw new AppError(400, 'Could not be deleted ');
  }
};
const getAllContactInfoIntoDB = async () => {
  const getContactInfo = await ContactInfoModel.find();
  return getContactInfo;
};

export const ContactInfoServices = {
  createContactInfoIntoDB,
  deleteSingleContactInfoIntoDB,
  getAllContactInfoIntoDB,
};
