import { Space } from "nobox-client";
import { createSchema } from "./config";
import { categoryStructure } from "./income_category";

interface ExpensesCategory {
  account_id: string;
  categories: string;
}

export const ExpensesCategoryStructure: Space<ExpensesCategory> = {
  space: "ExpensesCategories",
  description: "A Record Space for ExpensesCategories",
  structure:categoryStructure
};

export const ExpensesCategoryModel = createSchema<ExpensesCategory>(
  ExpensesCategoryStructure
);
