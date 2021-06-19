import { Document, Schema, model, Model } from 'mongoose';

export interface ITransaction {
  client: string;
  clientName: string;
  totalToPay: number;
  creditCard: string;
}

export interface ITransactionDocument extends Document {
  client: string;
  clientName: string;
  totalToPay: number;
  creditCard: string;
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
    creditCard: {
      type: String,
      required: true,
    },
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
