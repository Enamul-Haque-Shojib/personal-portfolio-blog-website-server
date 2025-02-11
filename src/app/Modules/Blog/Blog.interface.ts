/* eslint-disable no-unused-vars */
import { Model} from 'mongoose';

export type TBlog = {
  title: string;
  blogImgUrl: string;
  content: string;
  email: string;
};

export interface BlogStaticModel extends Model<TBlog> {
  isBlogExistsById(id: string): Promise<TBlog>;
  isBlogDeleted(id: string): Promise<boolean>;
}