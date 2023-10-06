"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomesCategoryModel = exports.IncomesCategoryStructure = void 0;
const config_1 = require("./config");
exports.IncomesCategoryStructure = {
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
exports.IncomesCategoryModel = (0, config_1.createSchema)(exports.IncomesCategoryStructure);
