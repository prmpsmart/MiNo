import { Space } from "nobox-client";
import { createSchema } from "./config";
import { Transaction, structure } from "./income";

export const ExpenseStructure: Space<Transaction> = {
  space: "Expenses",
  description: "A Record Space for Expenses",
  structure: structure,
};

export const ExpenseModel = createSchema<Transaction>(ExpenseStructure);
