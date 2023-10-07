import { Space } from "nobox-client";
import { createSchema } from "./config";

export interface Transaction {
  account_id: string;
  name: string;
  category: string;
  amount: string;
  description: string;
  timestamp: string;
}

export const structure = {
  account_id: {
    description: "ID of the account having this transaction",
    required: true,
    type: String,
    
  },
  name: {
    description: "Transaction's Name",
    required: true,
    type: String,
    
  },
  category: {
    description: "Category the Transaction falls into",
    type: String,
    required: true,
  },
  amount: {
    description: "Amount of the Transaction",
    required: true,
    type: String,
    
  },
  description: {
    description: "Further description of the Transaction",
    required: true,
    type: String,
    
  },
  timestamp: {
    description: "Timestamp of the date-time the Transaction was made",
    required: true,
    type: String,
    
  },
};

export const IncomeStructure: Space<Transaction> = {
  space: "Incomes",
  description: "A Record Space for Incomes",
  structure: structure,
};

export const IncomeModel = createSchema<Transaction>(IncomeStructure);
