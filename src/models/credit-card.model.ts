import { Document, Schema, model, Model } from 'mongoose';

export interface ICreditCard {
  cardNumber: string;
  cardHolderName: string;
  value: number;
  cvv: number;
  expirationDate: string;
}

export interface ICreditCardDocument extends Document {
  cardNumber: string;
  cardHolderName: string;
  value: number;
  cvv: number;
  expirationDate: string;
  createdAt: string;
  updatedAt: string;
}

export type TypeCreditCardModel = Model<ICreditCardDocument>;

export const creditCardSchema: Schema<ICreditCard> = new Schema<ICreditCard>(
  {
    cardNumber: {
      type: String,
      required: true,
    },
    cardHolderName: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    expirationDate: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
    timestamps: false,
    versionKey: false,
  }
);

export const CreditCardModel = model<ICreditCardDocument, TypeCreditCardModel>(
  'CreditCard',
  creditCardSchema,
  'creditCard'
);
