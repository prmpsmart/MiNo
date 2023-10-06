"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpensesCategoryModel = exports.ExpensesCategoryStructure = void 0;
const config_1 = require("./config");
exports.ExpensesCategoryStructure = {
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
exports.ExpensesCategoryModel = (0, config_1.createSchema)(exports.ExpensesCategoryStructure);
