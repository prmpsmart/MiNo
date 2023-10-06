"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountByIDorEmail = exports.deleteAccount = exports.passwordReset = exports.createAccount = exports.getAccount = void 0;
const account_1 = require("../schemas/account");
const expense_category_1 = require("../schemas/expense_category");
const income_category_1 = require("../schemas/income_category");
const constants_1 = require("../utils/constants");
class Status {
    constructor(msg, err) {
        this.message = "";
        this.isError = false;
        this.message = msg;
        this.isError = err;
    }
}
function getAccount(email) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('here');
        const account = yield account_1.AccountModel.findOne({ email: email });
        if (account != null) {
            return account;
        }
    });
}
exports.getAccount = getAccount;
function createAccount(name, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        let account = yield getAccount(email);
        if (account != null) {
            return new Status(`Account with email: "${email}" already exist`, true);
        }
        else {
            account = yield account_1.AccountModel.insertOne({
                name: name,
                email: email,
                password: password,
            });
            yield income_category_1.IncomesCategoryModel.insertOne({
                account_id: account.id,
                categories: constants_1.defaultIncomesCategories,
            });
            yield expense_category_1.ExpensesCategoryModel.insertOne({
                account_id: account.id,
                categories: constants_1.defaultExpensesCategories,
            });
            return new Status("Account created successfully", false);
        }
    });
}
exports.createAccount = createAccount;
function passwordReset(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const account = yield getAccount(email);
        if (account != null) {
            yield account_1.AccountModel.updateOneById(account.id, { password: password });
            console.log("Account password changed successfully");
        }
        else {
            console.log(`Account with email: "${email}" doesn't exist`);
        }
    });
}
exports.passwordReset = passwordReset;
function deleteAccount(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const account = yield getAccount(email);
        if (account != null) {
            //   todo, delete account
            console.log("Account deleted successfully");
        }
        else {
            console.log(`Account with email: "${email}" doesn't exist`);
        }
    });
}
exports.deleteAccount = deleteAccount;
function getAccountByIDorEmail(email, account_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield account_1.AccountModel.findOne({ email: email, id: account_id });
    });
}
exports.getAccountByIDorEmail = getAccountByIDorEmail;
