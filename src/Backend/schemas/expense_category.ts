import { Space } from "nobox-client";
import { createSchema } from "./config";

interface ExpensesCategory {
  account_id: string;
  categories: string;
}

export const ExpensesCategoryStructure: Space<ExpensesCategory> = {
  space: "ExpensesCategories",
  description: "A Record Space for ExpensesCategories",
  structure: {
    account_id: {
      description: "ID of the account having this Expenses",
      required: true,
      type: String,
      hashed: true,
    },
    categories: {
      description: "ExpensesCategory's categories list joined by <>",
      type: String,
      required: true,
    },
  },
};

export const ExpensesCategoryModel = createSchema<ExpensesCategory>(
  ExpensesCategoryStructure
);
