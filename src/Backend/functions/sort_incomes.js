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
exports.sortIncomeByCategoriesInDescendingOrder = exports.sortIncomeByCategoriesInAscendingOrder = exports.sortIncomeInDescendingOrder = exports.sortIncomeInAscendingOrder = exports.sortInDescendingOrder = exports.sortInAscendingOrder = exports.getIncomes = void 0;
const income_1 = require("../schemas/income");
const account_management_1 = require("./account_management");
function getIncomes(email = "", account_id = "") {
    return __awaiter(this, void 0, void 0, function* () {
        const account = yield (0, account_management_1.getAccountByIDorEmail)(email, account_id);
        if (account != null) {
            const incomes = yield income_1.IncomeModel.find({ account_id: account.id });
            return incomes;
        }
        else {
            console.log(`Account with email: "${email}" or account_id: "${account_id}" doesn't exist`);
        }
    });
}
exports.getIncomes = getIncomes;
function sortInAscendingOrder(objs) {
    return objs.slice().sort((a, b) => a.timestamp - b.timestamp);
}
exports.sortInAscendingOrder = sortInAscendingOrder;
function sortInDescendingOrder(objs) {
    return objs.slice().sort((a, b) => b.timestamp - a.timestamp);
}
exports.sortInDescendingOrder = sortInDescendingOrder;
function sortIncomeInAscendingOrder(email = "", account_id = "") {
    return __awaiter(this, void 0, void 0, function* () {
        const incomes = yield getIncomes(email, account_id);
        if (incomes != null) {
            return sortInAscendingOrder(incomes);
        }
    });
}
exports.sortIncomeInAscendingOrder = sortIncomeInAscendingOrder;
function sortIncomeInDescendingOrder(email = "", account_id = "") {
    return __awaiter(this, void 0, void 0, function* () {
        const incomes = yield getIncomes(email, account_id);
        if (incomes != null) {
            return sortInDescendingOrder(incomes);
        }
    });
}
exports.sortIncomeInDescendingOrder = sortIncomeInDescendingOrder;
function sortIncomeByCategoriesInAscendingOrder(email = "", account_id = "") {
    return __awaiter(this, void 0, void 0, function* () {
        const incomes = yield getIncomes(email, account_id);
        if (incomes != null) {
            return sortInAscendingOrder(incomes.slice().sort((a, b) => a.category.localeCompare(b.category)));
        }
    });
}
exports.sortIncomeByCategoriesInAscendingOrder = sortIncomeByCategoriesInAscendingOrder;
function sortIncomeByCategoriesInDescendingOrder(email = "", account_id = "") {
    return __awaiter(this, void 0, void 0, function* () {
        const incomes = yield getIncomes(email, account_id);
        if (incomes != null) {
            return sortInDescendingOrder(incomes.slice().sort((a, b) => a.category.localeCompare(b.category)));
        }
    });
}
exports.sortIncomeByCategoriesInDescendingOrder = sortIncomeByCategoriesInDescendingOrder;
