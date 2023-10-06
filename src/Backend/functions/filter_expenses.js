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
exports.filterExpensesByYearInDescendingOrder = exports.filterExpensesByYearInAscendingOrder = exports.filterExpensesByMonthInDescendingOrder = exports.filterExpensesByMonthInAscendingOrder = exports.filterExpensesByWeekInDescendingOrder = exports.filterExpensesByWeekInAscendingOrder = exports.filterExpensesByDateInDescendingOrder = exports.filterExpensesByDateInAscendingOrder = exports.filterExpensesByCategoryInDescendingOrder = exports.filterExpensesByCategoryInAscendingOrder = void 0;
const date_compare_1 = require("../utils/date_compare");
const sort_expenses_1 = require("./sort_expenses");
const sort_incomes_1 = require("./sort_incomes");
function filterExpensesByCategoryInAscendingOrder(email = "", account_id = "", category) {
    return __awaiter(this, void 0, void 0, function* () {
        const expenses = yield (0, sort_expenses_1.getExpenses)(email, account_id);
        if (expenses != null) {
            const filtered = expenses.filter((expense) => expense.category === category);
            return (0, sort_incomes_1.sortInAscendingOrder)(filtered);
        }
    });
}
exports.filterExpensesByCategoryInAscendingOrder = filterExpensesByCategoryInAscendingOrder;
function filterExpensesByCategoryInDescendingOrder(email = "", account_id = "", category) {
    return __awaiter(this, void 0, void 0, function* () {
        const expenses = yield (0, sort_expenses_1.getExpenses)(email, account_id);
        if (expenses != null) {
            const filtered = expenses.filter((expense) => expense.category == category);
            return (0, sort_incomes_1.sortInDescendingOrder)(filtered);
        }
    });
}
exports.filterExpensesByCategoryInDescendingOrder = filterExpensesByCategoryInDescendingOrder;
function filterExpensesByDateInAscendingOrder(email = "", account_id = "", day) {
    return __awaiter(this, void 0, void 0, function* () {
        const expenses = yield (0, sort_expenses_1.getExpenses)(email, account_id);
        if (expenses != null) {
            const filtered = expenses.filter((expense) => (0, date_compare_1.dateInDay)(day, expense.timestamp));
            return (0, sort_incomes_1.sortInDescendingOrder)(filtered);
        }
    });
}
exports.filterExpensesByDateInAscendingOrder = filterExpensesByDateInAscendingOrder;
function filterExpensesByDateInDescendingOrder(email = "", account_id = "", day) {
    return __awaiter(this, void 0, void 0, function* () {
        const expenses = yield (0, sort_expenses_1.getExpenses)(email, account_id);
        if (expenses != null) {
            const filtered = expenses.filter((expense) => (0, date_compare_1.dateInDay)(day, expense.timestamp));
            return (0, sort_incomes_1.sortInDescendingOrder)(filtered);
        }
    });
}
exports.filterExpensesByDateInDescendingOrder = filterExpensesByDateInDescendingOrder;
function filterExpensesByWeekInAscendingOrder(email = "", account_id = "", week) {
    return __awaiter(this, void 0, void 0, function* () {
        const expenses = yield (0, sort_expenses_1.getExpenses)(email, account_id);
        if (expenses != null) {
            const filtered = expenses.filter((expense) => (0, date_compare_1.dateInWeek)(week, expense.timestamp));
            return (0, sort_incomes_1.sortInDescendingOrder)(filtered);
        }
    });
}
exports.filterExpensesByWeekInAscendingOrder = filterExpensesByWeekInAscendingOrder;
function filterExpensesByWeekInDescendingOrder(email = "", account_id = "", week) {
    return __awaiter(this, void 0, void 0, function* () {
        const expenses = yield (0, sort_expenses_1.getExpenses)(email, account_id);
        if (expenses != null) {
            const filtered = expenses.filter((expense) => (0, date_compare_1.dateInWeek)(week, expense.timestamp));
            return (0, sort_incomes_1.sortInDescendingOrder)(filtered);
        }
    });
}
exports.filterExpensesByWeekInDescendingOrder = filterExpensesByWeekInDescendingOrder;
function filterExpensesByMonthInAscendingOrder(email = "", account_id = "", month) {
    return __awaiter(this, void 0, void 0, function* () {
        const expenses = yield (0, sort_expenses_1.getExpenses)(email, account_id);
        if (expenses != null) {
            const filtered = expenses.filter((expense) => (0, date_compare_1.dateInMonth)(month, expense.timestamp));
            return (0, sort_incomes_1.sortInDescendingOrder)(filtered);
        }
    });
}
exports.filterExpensesByMonthInAscendingOrder = filterExpensesByMonthInAscendingOrder;
function filterExpensesByMonthInDescendingOrder(email = "", account_id = "", month) {
    return __awaiter(this, void 0, void 0, function* () {
        const expenses = yield (0, sort_expenses_1.getExpenses)(email, account_id);
        if (expenses != null) {
            const filtered = expenses.filter((expense) => (0, date_compare_1.dateInMonth)(month, expense.timestamp));
            return (0, sort_incomes_1.sortInDescendingOrder)(filtered);
        }
    });
}
exports.filterExpensesByMonthInDescendingOrder = filterExpensesByMonthInDescendingOrder;
function filterExpensesByYearInAscendingOrder(email = "", account_id = "", year) {
    return __awaiter(this, void 0, void 0, function* () {
        const expenses = yield (0, sort_expenses_1.getExpenses)(email, account_id);
        if (expenses != null) {
            const filtered = expenses.filter((expense) => (0, date_compare_1.dateInYear)(year, expense.timestamp));
            return (0, sort_incomes_1.sortInDescendingOrder)(filtered);
        }
    });
}
exports.filterExpensesByYearInAscendingOrder = filterExpensesByYearInAscendingOrder;
function filterExpensesByYearInDescendingOrder(email = "", account_id = "", year) {
    return __awaiter(this, void 0, void 0, function* () {
        const expenses = yield (0, sort_expenses_1.getExpenses)(email, account_id);
        if (expenses != null) {
            const filtered = expenses.filter((expense) => (0, date_compare_1.dateInYear)(year, expense.timestamp));
            return (0, sort_incomes_1.sortInDescendingOrder)(filtered);
        }
    });
}
exports.filterExpensesByYearInDescendingOrder = filterExpensesByYearInDescendingOrder;
