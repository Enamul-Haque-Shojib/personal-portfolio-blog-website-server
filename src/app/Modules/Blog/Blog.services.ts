


import AppError from '../../errors/AppError';
import { TBlog } from './Blog.interface';
import { BlogModel } from './Blog.model';


import QueryBuilder from '../../builder/QueryBuilder';
import { blogSearchableFields } from './Blog.constant';
import { AuthModel } from '../Auth/Auth.model';

const createBlogIntoDB = async (payload: TBlog) => {
    const user = await AuthModel.findOne({ email: payload.email });

    if (!user) {
      throw new AppError(
        404,
        'User not found'
      );
    }

    const newBlog = await BlogModel.create(payload);
    return newBlog;
 
};
const updateSingleBlogIntoDB = async (id: string, payload: Partial<TBlog>) => {
  if ((await BlogModel.isBlogExistsById(id)) == null) {
    throw new AppError(
      400,
      'Blog Does not exists',
    );
  }
 

  const result = await BlogModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};


const deleteSingleBlogIntoDB = async (id: string) => {
  if ((await BlogModel.isBlogExistsById(id)) == null) {
    throw new AppError(
      400,
   
      `Blog does not exist`,
    );
  }

 

  const deletedBlog = await BlogModel.findByIdAndDelete(id);

  if (!deletedBlog) {
    throw new AppError(400, 'Blog could not be deleted');
  }
  
};
const getAllBlogsIntoDB = async (query: Record<string, unknown>) => {
  const studentQuery = new QueryBuilder(
    BlogModel.find(),
    query,
  )
    .search(blogSearchableFields)
   
    .filter();

  const result = await studentQuery.modelQuery;
  return result;
};

const getSingleBlogIntoDB = async (id: string) => {
 const result = await BlogModel.find({_id: id})
  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogsIntoDB,
  updateSingleBlogIntoDB,
  deleteSingleBlogIntoDB,
  getSingleBlogIntoDB
};
