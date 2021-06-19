import { Document, Schema, model, Model } from 'mongoose';

export interface ICreditCard {
  cardNumber: string;
  cardHolderName: string;
  totalToPay: number;
  value: number;
  cvv: number;
  exp_date: string;
}

export interface ICreditCardDocument extends Document {
  cardNumber: string;
  cardHolderName: string;
  totalToPay: number;
  value: number;
  cvv: number;
  exp_date: string;
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
      type: Number,
      required: true,
    },
    totalToPay: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    exp_date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const CreditCardModel = model<ICreditCardDocument, TypeCreditCardModel>(
  'CreditCard',
  creditCardSchema,
  'creditCard'
);
