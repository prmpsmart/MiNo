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
exports.searchExpenses = exports.searchIncomes = void 0;
const sort_expenses_1 = require("./sort_expenses");
const sort_incomes_1 = require("./sort_incomes");
function searchIncomes(email = "", account_id = "", searchString) {
    return __awaiter(this, void 0, void 0, function* () {
        const incomes = yield (0, sort_incomes_1.getIncomes)(email, account_id);
        if (incomes != null) {
            incomes.filter((income) => income.name.includes(searchString) ||
                income.category.includes(searchString) ||
                income.description.includes(searchString) ||
                income.amount.toString().includes(searchString));
        }
    });
}
exports.searchIncomes = searchIncomes;
function searchExpenses(email = "", account_id = "", searchString) {
    return __awaiter(this, void 0, void 0, function* () {
        const expenses = yield (0, sort_expenses_1.getExpenses)(email, account_id);
        if (expenses != null) {
            expenses.filter((expense) => expense.name.includes(searchString) ||
                expense.category.includes(searchString) ||
                expense.description.includes(searchString) ||
                expense.amount.toString().includes(searchString));
        }
    });
}
exports.searchExpenses = searchExpenses;
