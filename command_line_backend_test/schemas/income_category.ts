import { Space } from "nobox-client";
import { createSchema } from "./config";

interface IncomesCategory {
  account_id: string;
  categories: string;
}

export const IncomesCategoryStructure: Space<IncomesCategory> = {
  space: "IncomesCategories",
  description: "A Record Space for IncomesCategories",
  structure: {
    account_id: {
      description: "ID of the account having this Incomes",
      required: true,
      type: String,
      hashed: true,
    },
    categories: {
      description: "IncomesCategory's categories list joined by <>",
      type: String,
      required: true,
    },
  },
};

export const IncomesCategoryModel = createSchema<IncomesCategory>(
  IncomesCategoryStructure
);
