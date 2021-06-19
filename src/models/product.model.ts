import { Document, Schema, model, Model } from 'mongoose';

export interface IProduct {
  title: string;
  price: number;
  zipcode: string;
  seller: string;
  thumbnailHd: string;
  date: string;
}

export interface IProductDocument extends Document {
  title: string;
  price: number;
  zipcode: string;
  seller: string;
  thumbnailHd: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}

export type TypeProductModel = Model<IProductDocument>;

export const productSchema: Schema<IProduct> = new Schema<IProduct>(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
    seller: {
      type: String,
      required: true,
    },
    thumbnailHd: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ProductModel = model<IProductDocument, TypeProductModel>('Product', productSchema);
