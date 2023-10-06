"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseModel = exports.ExpenseStructure = void 0;
const config_1 = require("./config");
exports.ExpenseStructure = {
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
exports.ExpenseModel = (0, config_1.createSchema)(exports.ExpenseStructure);
