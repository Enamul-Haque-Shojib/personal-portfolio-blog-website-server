import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SkillServices } from "./Skill.service";



const createSkill = catchAsync(async (req, res) => {
 
    const result = await SkillServices.createSkillIntoDB(req.body);
  
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: 'Skill created successfully',
  
      data: result
    });
  });



  const updateSingleSkill = catchAsync(async (req, res) => {
    const { id } = req.params;
  
    const result = await SkillServices.updateSingleSkillIntoDB(id, req.body);
  
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Skill updated successfully',
      data: result,
    });
  });

  const deleteSingleSkill = catchAsync(async (req, res) => {
    const { id } = req.params;
  
    await SkillServices.deleteSingleSkillIntoDB(id);
  
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Skill deleted successfully',
      data: null,
    });
  });

  const getSingleSkills = catchAsync(async (req, res) => {
    const result = await SkillServices.getSingleSkillIntoDB(req.params.id);
  
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: 'single Skill is retrieved successfully',
      data: result,
    });
  });

  const getAllSkills = catchAsync(async (req, res) => {
    const result = await SkillServices.getAllSkillsIntoDB();
  
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: 'Skills are retrieved successfully',
      data: result,
    });
  });


  export const SkillControllers = {
    createSkill,
    updateSingleSkill,
    deleteSingleSkill,
    getAllSkills,
    getSingleSkills
  }