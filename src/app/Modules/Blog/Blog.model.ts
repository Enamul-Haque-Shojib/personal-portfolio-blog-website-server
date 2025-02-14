import { model, Schema } from 'mongoose';
import { BlogStaticModel, TBlog } from './Blog.interface';

const blogSchema = new Schema<TBlog, BlogStaticModel>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    blogImgUrl: {
      type: String,
      required: true,
    },
    content: {
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

blogSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

blogSchema.statics.isBlogExistsById = async function (id: string) {
  return await BlogModel.findById(id);
};

export const BlogModel = model<TBlog, BlogStaticModel>('Blog', blogSchema);
