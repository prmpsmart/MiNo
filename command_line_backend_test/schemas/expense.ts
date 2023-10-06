import { Space } from "nobox-client";
import { createSchema } from "./config";

export interface Expense {
  account_id: string;
  name: string;
  category: string;
  amount: string;
  description: string;
  timestamp: number;
}

export const ExpenseStructure: Space<Expense> = {
  space: "Expenses",
  description: "A Record Space for Expenses",
  structure: {
    account_id: {
      description: "ID of the account having this Expense",
      required: true,
      type: String,
      hashed: true,
    },
    name: {
      description: "Expense's Name",
      required: true,
      type: String,
      hashed: true,
    },
    category: {
      description: "Category the Expense falls into",
      type: String,
      required: true,
    },
    amount: {
      description: "Amount of the Expense",
      required: true,
      type: String,
      hashed: true,
    },
    description: {
      description: "Further description of the Expense",
      required: true,
      type: String,
      hashed: true,
    },
    timestamp: {
      description: "Timestamp of the date-time the Expense was made",
      required: true,
      type: String,
      hashed: true,
    },
  },
};

export const ExpenseModel = createSchema<Expense>(ExpenseStructure);
