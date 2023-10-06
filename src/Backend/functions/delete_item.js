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
exports.deleteEexpenseCategory = exports.deleteIncomeCategory = exports.deleteExpense = exports.deleteIncome = void 0;
const expense_1 = require("../schemas/expense");
const expense_category_1 = require("../schemas/expense_category");
const income_1 = require("../schemas/income");
const income_category_1 = require("../schemas/income_category");
const constants_1 = require("../utils/constants");
const account_management_1 = require("./account_management");
function deleteIncome(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const income = yield income_1.IncomeModel.findOne({
            id: id,
        });
        if (income != null) {
            // todo delete income
            console.log(`Income with id: "${id}" deleted successfully`);
        }
        else {
            console.log(`Income with id: "${id}" doesn't exist`);
        }
    });
}
exports.deleteIncome = deleteIncome;
function deleteExpense(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const expense = yield expense_1.ExpenseModel.findOne({
            id: id,
        });
        if (expense != null) {
            // todo delete expense
            console.log(`Expense with id: "${id}" deleted successfully`);
        }
        else {
            console.log(`Expense with id: "${id}" doesn't exist`);
        }
    });
}
exports.deleteExpense = deleteExpense;
function deleteFromCategory(categories, category) {
    let categoriesList = categories.split(constants_1.splitter);
    let categoriesSet = new Set();
    categoriesList.forEach((cat) => categoriesSet.add(cat));
    categoriesSet.delete(category.toLowerCase());
    return Array.from(categoriesSet).join(constants_1.splitter);
}
function deleteIncomeCategory(email = "", account_id = "", category) {
    return __awaiter(this, void 0, void 0, function* () {
        const account = yield (0, account_management_1.getAccountByIDorEmail)(email, account_id);
        if (account != null) {
            const incomesCategory = yield income_category_1.IncomesCategoryModel.findOne({
                account_id: account.id,
            });
            yield income_category_1.IncomesCategoryModel.updateOneById(incomesCategory.id, {
                categories: deleteFromCategory(incomesCategory.categories, category),
            });
        }
        else {
            console.log(`Account with email: "${email}" or account_id: "${account_id}" doesn't exist`);
        }
    });
}
exports.deleteIncomeCategory = deleteIncomeCategory;
function deleteEexpenseCategory(email = "", account_id = "", category) {
    return __awaiter(this, void 0, void 0, function* () {
        const account = yield (0, account_management_1.getAccountByIDorEmail)(email, account_id);
        if (account != null) {
            const expensesCategory = yield expense_category_1.ExpensesCategoryModel.findOne({
                account_id: account.id,
            });
            yield expense_category_1.ExpensesCategoryModel.updateOneById(expensesCategory.id, {
                categories: deleteFromCategory(expensesCategory.categories, category),
            });
        }
        else {
            console.log(`Account with email: "${email}" or account_id: "${account_id}" doesn't exist`);
        }
    });
}
exports.deleteEexpenseCategory = deleteEexpenseCategory;
