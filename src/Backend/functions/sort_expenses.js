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
exports.sortExpenseByCategoriesInDescendingOrder = exports.sortExpenseByCategoriesInAscendingOrder = exports.sortExpenseInDescendingOrder = exports.sortExpenseInAscendingOrder = exports.getExpenses = void 0;
const expense_1 = require("../schemas/expense");
const account_management_1 = require("./account_management");
const sort_incomes_1 = require("./sort_incomes");
function getExpenses(email = "", account_id = "") {
    return __awaiter(this, void 0, void 0, function* () {
        const account = yield (0, account_management_1.getAccountByIDorEmail)(email, account_id);
        if (account != null) {
            const expenses = yield expense_1.ExpenseModel.find({ account_id: account.id });
            return expenses;
        }
        else {
            console.log(`Account with email: "${email}" or account_id: "${account_id}" doesn't exist`);
        }
    });
}
exports.getExpenses = getExpenses;
function sortExpenseInAscendingOrder(email = "", account_id = "") {
    return __awaiter(this, void 0, void 0, function* () {
        const expenses = yield getExpenses(email, account_id);
        if (expenses != null) {
            return (0, sort_incomes_1.sortInAscendingOrder)(expenses);
        }
    });
}
exports.sortExpenseInAscendingOrder = sortExpenseInAscendingOrder;
function sortExpenseInDescendingOrder(email = "", account_id = "") {
    return __awaiter(this, void 0, void 0, function* () {
        const expenses = yield getExpenses(email, account_id);
        if (expenses != null) {
            return (0, sort_incomes_1.sortInDescendingOrder)(expenses);
        }
    });
}
exports.sortExpenseInDescendingOrder = sortExpenseInDescendingOrder;
function sortExpenseByCategoriesInAscendingOrder(email = "", account_id = "") {
    return __awaiter(this, void 0, void 0, function* () {
        const expenses = yield getExpenses(email, account_id);
        if (expenses != null) {
            return (0, sort_incomes_1.sortInAscendingOrder)(expenses.slice().sort((a, b) => a.category.localeCompare(b.category)));
        }
    });
}
exports.sortExpenseByCategoriesInAscendingOrder = sortExpenseByCategoriesInAscendingOrder;
function sortExpenseByCategoriesInDescendingOrder(email = "", account_id = "") {
    return __awaiter(this, void 0, void 0, function* () {
        const expenses = yield getExpenses(email, account_id);
        if (expenses != null) {
            return (0, sort_incomes_1.sortInDescendingOrder)(expenses.slice().sort((a, b) => a.category.localeCompare(b.category)));
        }
    });
}
exports.sortExpenseByCategoriesInDescendingOrder = sortExpenseByCategoriesInDescendingOrder;
