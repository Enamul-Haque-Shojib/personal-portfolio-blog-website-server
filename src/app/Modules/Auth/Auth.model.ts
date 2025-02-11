import { model, Schema } from 'mongoose';
import { TAuth, AuthStaticModel } from './Auth.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

const authSchema = new Schema<TAuth, AuthStaticModel>(
  {
    authName: {
      type: String,
      default: '',
    },
    authImgUrl: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
 
    role: {
      type: String,
      enum: {
        values: ['User'],
      },
      default: 'User'
    },
  },
  {
    timestamps: true,
  },
);


authSchema.statics.isAuthExistByEmail = async function (email: string) {
  return await AuthModel.findOne({ email });
};

authSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const auth = this; // doc

  auth.password = await bcrypt.hash(
    auth.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

authSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

authSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await AuthModel.findOne({ email }).select('+password');
};

authSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

export const AuthModel = model<TAuth, AuthStaticModel>('Auth', authSchema);

