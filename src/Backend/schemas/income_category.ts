import { Space } from "nobox-client";
import { createSchema } from "./config";

interface IncomesCategory {
  account_id: string;
  categories: string;
}

export const categoryStructure = {
  account_id: {
    description: "ID of the account having this categories",
    required: true,
    type: String,
  },
  categories: {
    description: "categories list joined by <>",
    type: String,
    required: true,
  },
};

export const IncomesCategoryStructure: Space<IncomesCategory> = {
  space: "IncomesCategories",
  description: "A Record Space for IncomesCategories",
  structure: categoryStructure,
};

export const IncomesCategoryModel = createSchema<IncomesCategory>(
  IncomesCategoryStructure
);
