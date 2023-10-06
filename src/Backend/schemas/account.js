"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountModel = exports.AccountStructure = void 0;
const config_1 = require("./config");
exports.AccountStructure = {
    space: "Accounts",
    description: "A Record Space for Accounts",
    structure: {
        name: {
            description: "Account's Name",
            required: true,
            type: String,
            hashed: true,
        },
        email: {
            description: "Account's Email",
            type: String,
            required: true,
        },
        password: {
            description: "Account's Password",
            required: true,
            type: String,
            hashed: true,
        },
    },
};
exports.AccountModel = (0, config_1.createSchema)(exports.AccountStructure);
