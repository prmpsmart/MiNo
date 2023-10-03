import { Space } from "nobox-client";
import { createSchema } from "./config";

export interface Income {
  account_id: string;
  name: string;
  category: string;
  amount: number;
  description: string;
  timestamp: number;
}

export const IncomeStructure: Space<Income> = {
  space: "Incomes",
  description: "A Record Space for Incomes",
  structure: {
    account_id: {
      description: "ID of the account having this income",
      required: true,
      type: String,
      hashed: true,
    },
    name: {
      description: "Income's Name",
      required: true,
      type: String,
      hashed: true,
    },
    category: {
      description: "Category the Income falls into",
      type: String,
      required: true,
    },
    amount: {
      description: "Amount of the Income",
      required: true,
      type: String,
      hashed: true,
    },
    description: {
      description: "Further description of the Income",
      required: true,
      type: String,
      hashed: true,
    },
    timestamp: {
      description: "Timestamp of the date-time the Income was made",
      required: true,
      type: String,
      hashed: true,
    },
  },
};

export const IncomeModel = createSchema<Income>(IncomeStructure);
