import { Document, Schema, model, Model } from 'mongoose';

import { ICreditCard, creditCardSchema } from './credit-card.model';

export interface ITransaction {
  client: string;
  clientName: string;
  totalToPay: number;
  creditCard: ICreditCard;
}

export interface ITransactionDocument extends Document {
  client: string;
  clientName: string;
  totalToPay: number;
  creditCard: ICreditCard;
  createdAt: string;
  updatedAt: string;
}

export type TypeTransactionModel = Model<ITransactionDocument>;

export const transactionSchema: Schema<ITransaction> = new Schema<ITransaction>(
  {
    client: {
      type: String,
      required: true,
    },
    clientName: {
      type: String,
      required: true,
    },
    totalToPay: {
      type: String,
      required: true,
    },
    creditCard: creditCardSchema,
    exp_date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

export const TransactionModel = model<ITransactionDocument, TypeTransactionModel>(
  'Transaction',
  transactionSchema,
  'transactions'
);
