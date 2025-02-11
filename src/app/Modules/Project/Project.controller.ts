import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProjectServices } from "./Project.service";



const createProject = catchAsync(async (req, res) => {
 
    const result = await ProjectServices.createProjectIntoDB(req.body);
  
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: 'Project created successfully',
  
      data: result
    });
  });



  const updateSingleProject = catchAsync(async (req, res) => {
    const { id } = req.params;
  
    const result = await ProjectServices.updateSingleProjectIntoDB(id, req.body);
  
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Project updated successfully',
      data: result,
    });
  });

  const deleteSingleProject = catchAsync(async (req, res) => {
    const { id } = req.params;
  
    await ProjectServices.deleteSingleProjectIntoDB(id);
  
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Project deleted successfully',
      data: null,
    });
  });

  const getAllProjects = catchAsync(async (req, res) => {
    const result = await ProjectServices.getAllProjectsIntoDB();
  
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: 'Projects are retrieved successfully',
      data: result,
    });
  });
  const getSingleProjects = catchAsync(async (req, res) => {
    const result = await ProjectServices.getSingleProjectIntoDB(req.params.id);
  
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: 'Single Project are retrieved successfully',
      data: result,
    });
  });


  export const ProjectControllers = {
    createProject,
    updateSingleProject,
    deleteSingleProject,
    getAllProjects,
    getSingleProjects
  }