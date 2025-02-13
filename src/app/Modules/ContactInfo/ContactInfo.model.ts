import { model, Schema } from 'mongoose';
import { TContactInfo } from './ContactInfo.interface';




const contactInfoSchema = new Schema<TContactInfo>(
  {
   
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
   
    message: {
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
  },
);



export const ContactInfoModel = model<TContactInfo>('ContactInfo', contactInfoSchema);
