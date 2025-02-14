import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ContactInfoServices } from './ContactInfo.services';

const createContactInfo = catchAsync(async (req, res) => {
  const result = await ContactInfoServices.createContactInfoIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'ContactInfo created successfully',

    data: result,
  });
});

const deleteSingleContactInfo = catchAsync(async (req, res) => {
  const { id } = req.params;

  await ContactInfoServices.deleteSingleContactInfoIntoDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'ContactInfo deleted successfully',
    data: null,
  });
});

const getAllContactInfo = catchAsync(async (req, res) => {
  const result = await ContactInfoServices.getAllContactInfoIntoDB();

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'ContactInfos are retrieved successfully',
    data: result,
  });
});

export const ContactInfoControllers = {
  createContactInfo,
  deleteSingleContactInfo,
  getAllContactInfo,
};
