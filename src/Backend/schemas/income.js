"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeModel = exports.IncomeStructure = void 0;
const config_1 = require("./config");
exports.IncomeStructure = {
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
exports.IncomeModel = (0, config_1.createSchema)(exports.IncomeStructure);
