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
exports.addEexpenseCategory = exports.addIncomeCategory = exports.addExpense = exports.addIncome = void 0;
const expense_1 = require("../schemas/expense");
const expense_category_1 = require("../schemas/expense_category");
const income_1 = require("../schemas/income");
const income_category_1 = require("../schemas/income_category");
const constants_1 = require("../utils/constants");
const account_management_1 = require("./account_management");
function addIncome(account_id = "", email = "", name, category, amount, description, timestamp, id = "") {
    return __awaiter(this, void 0, void 0, function* () {
        const account = yield (0, account_management_1.getAccountByIDorEmail)(email, account_id);
        if (account != null) {
            const obj = {
                account_id: account_id,
                name: name,
                category: category,
                amount: amount,
                description: description,
                timestamp: timestamp,
            };
            if (id.length > 0) {
                yield income_1.IncomeModel.updateOneById(id, obj);
            }
            else {
                yield income_1.IncomeModel.insertOne(obj);
            }
        }
        else {
            console.log(`Account with email: "${email}" or account_id: "${account_id}" doesn't exist`);
        }
    });
}
exports.addIncome = addIncome;
function addExpense(account_id = "", email = "", name, category, amount, description, timestamp, id = "") {
    return __awaiter(this, void 0, void 0, function* () {
        const account = yield (0, account_management_1.getAccountByIDorEmail)(email, account_id);
        if (account != null) {
            const obj = {
                account_id: account_id,
                name: name,
                category: category,
                amount: amount,
                description: description,
                timestamp: timestamp,
            };
            if (id.length > 0) {
                yield expense_1.ExpenseModel.updateOneById(id, obj);
            }
            else {
                yield expense_1.ExpenseModel.insertOne(obj);
            }
        }
        else {
            console.log(`Account with email: "${email}" or account_id: "${account_id}" doesn't exist`);
        }
    });
}
exports.addExpense = addExpense;
function addToCategory(categories, category) {
    let categoriesList = categories.split(constants_1.splitter);
    let categoriesSet = new Set();
    categoriesList.forEach((cat) => categoriesSet.add(cat));
    categoriesSet.add(category.toLowerCase());
    return Array.from(categoriesSet).join(constants_1.splitter);
}
function addIncomeCategory(email = "", account_id = "", category) {
    return __awaiter(this, void 0, void 0, function* () {
        const account = yield (0, account_management_1.getAccountByIDorEmail)(email, account_id);
        if (account != null) {
            const incomesCategory = yield income_category_1.IncomesCategoryModel.findOne({
                account_id: account.id,
            });
            yield income_category_1.IncomesCategoryModel.updateOneById(incomesCategory.id, {
                categories: addToCategory(incomesCategory.categories, category),
            });
        }
        else {
            console.log(`Account with email: "${email}" or account_id: "${account_id}" doesn't exist`);
        }
    });
}
exports.addIncomeCategory = addIncomeCategory;
function addEexpenseCategory(email = "", account_id = "", category) {
    return __awaiter(this, void 0, void 0, function* () {
        const account = yield (0, account_management_1.getAccountByIDorEmail)(email, account_id);
        if (account != null) {
            const expensesCategory = yield expense_category_1.ExpensesCategoryModel.findOne({
                account_id: account.id,
            });
            yield expense_category_1.ExpensesCategoryModel.updateOneById(expensesCategory.id, {
                categories: addToCategory(expensesCategory.categories, category),
            });
        }
        else {
            console.log(`Account with email: "${email}" or account_id: "${account_id}" doesn't exist`);
        }
    });
}
exports.addEexpenseCategory = addEexpenseCategory;
