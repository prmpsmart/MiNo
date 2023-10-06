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
exports.filterIncomesByYearInDescendingOrder = exports.filterIncomesByYearInAscendingOrder = exports.filterIncomesByMonthInDescendingOrder = exports.filterIncomesByMonthInAscendingOrder = exports.filterIncomesByWeekInDescendingOrder = exports.filterIncomesByWeekInAscendingOrder = exports.filterIncomesByDateInDescendingOrder = exports.filterIncomesByDateInAscendingOrder = exports.filterIncomesByCategoryInDescendingOrder = exports.filterIncomesByCategoryInAscendingOrder = void 0;
const date_compare_1 = require("../utils/date_compare");
const sort_incomes_1 = require("./sort_incomes");
function filterIncomesByCategoryInAscendingOrder(email = "", account_id = "", category) {
    return __awaiter(this, void 0, void 0, function* () {
        const incomes = yield (0, sort_incomes_1.getIncomes)(email, account_id);
        if (incomes != null) {
            const filtered = incomes.filter((income) => income.category === category);
            return (0, sort_incomes_1.sortInAscendingOrder)(filtered);
        }
    });
}
exports.filterIncomesByCategoryInAscendingOrder = filterIncomesByCategoryInAscendingOrder;
function filterIncomesByCategoryInDescendingOrder(email = "", account_id = "", category) {
    return __awaiter(this, void 0, void 0, function* () {
        const incomes = yield (0, sort_incomes_1.getIncomes)(email, account_id);
        if (incomes != null) {
            const filtered = incomes.filter((income) => income.category == category);
            return (0, sort_incomes_1.sortInDescendingOrder)(filtered);
        }
    });
}
exports.filterIncomesByCategoryInDescendingOrder = filterIncomesByCategoryInDescendingOrder;
function filterIncomesByDateInAscendingOrder(email = "", account_id = "", day) {
    return __awaiter(this, void 0, void 0, function* () {
        const incomes = yield (0, sort_incomes_1.getIncomes)(email, account_id);
        if (incomes != null) {
            const filtered = incomes.filter((income) => (0, date_compare_1.dateInDay)(day, income.timestamp));
            return (0, sort_incomes_1.sortInDescendingOrder)(filtered);
        }
    });
}
exports.filterIncomesByDateInAscendingOrder = filterIncomesByDateInAscendingOrder;
function filterIncomesByDateInDescendingOrder(email = "", account_id = "", day) {
    return __awaiter(this, void 0, void 0, function* () {
        const incomes = yield (0, sort_incomes_1.getIncomes)(email, account_id);
        if (incomes != null) {
            const filtered = incomes.filter((income) => (0, date_compare_1.dateInDay)(day, income.timestamp));
            return (0, sort_incomes_1.sortInDescendingOrder)(filtered);
        }
    });
}
exports.filterIncomesByDateInDescendingOrder = filterIncomesByDateInDescendingOrder;
function filterIncomesByWeekInAscendingOrder(email = "", account_id = "", week) {
    return __awaiter(this, void 0, void 0, function* () {
        const incomes = yield (0, sort_incomes_1.getIncomes)(email, account_id);
        if (incomes != null) {
            const filtered = incomes.filter((income) => (0, date_compare_1.dateInWeek)(week, income.timestamp));
            return (0, sort_incomes_1.sortInDescendingOrder)(filtered);
        }
    });
}
exports.filterIncomesByWeekInAscendingOrder = filterIncomesByWeekInAscendingOrder;
function filterIncomesByWeekInDescendingOrder(email = "", account_id = "", week) {
    return __awaiter(this, void 0, void 0, function* () {
        const incomes = yield (0, sort_incomes_1.getIncomes)(email, account_id);
        if (incomes != null) {
            const filtered = incomes.filter((income) => (0, date_compare_1.dateInWeek)(week, income.timestamp));
            return (0, sort_incomes_1.sortInDescendingOrder)(filtered);
        }
    });
}
exports.filterIncomesByWeekInDescendingOrder = filterIncomesByWeekInDescendingOrder;
function filterIncomesByMonthInAscendingOrder(email = "", account_id = "", month) {
    return __awaiter(this, void 0, void 0, function* () {
        const incomes = yield (0, sort_incomes_1.getIncomes)(email, account_id);
        if (incomes != null) {
            const filtered = incomes.filter((income) => (0, date_compare_1.dateInMonth)(month, income.timestamp));
            return (0, sort_incomes_1.sortInDescendingOrder)(filtered);
        }
    });
}
exports.filterIncomesByMonthInAscendingOrder = filterIncomesByMonthInAscendingOrder;
function filterIncomesByMonthInDescendingOrder(email = "", account_id = "", month) {
    return __awaiter(this, void 0, void 0, function* () {
        const incomes = yield (0, sort_incomes_1.getIncomes)(email, account_id);
        if (incomes != null) {
            const filtered = incomes.filter((income) => (0, date_compare_1.dateInMonth)(month, income.timestamp));
            return (0, sort_incomes_1.sortInDescendingOrder)(filtered);
        }
    });
}
exports.filterIncomesByMonthInDescendingOrder = filterIncomesByMonthInDescendingOrder;
function filterIncomesByYearInAscendingOrder(email = "", account_id = "", year) {
    return __awaiter(this, void 0, void 0, function* () {
        const incomes = yield (0, sort_incomes_1.getIncomes)(email, account_id);
        if (incomes != null) {
            const filtered = incomes.filter((income) => (0, date_compare_1.dateInYear)(year, income.timestamp));
            return (0, sort_incomes_1.sortInDescendingOrder)(filtered);
        }
    });
}
exports.filterIncomesByYearInAscendingOrder = filterIncomesByYearInAscendingOrder;
function filterIncomesByYearInDescendingOrder(email = "", account_id = "", year) {
    return __awaiter(this, void 0, void 0, function* () {
        const incomes = yield (0, sort_incomes_1.getIncomes)(email, account_id);
        if (incomes != null) {
            const filtered = incomes.filter((income) => (0, date_compare_1.dateInYear)(year, income.timestamp));
            return (0, sort_incomes_1.sortInDescendingOrder)(filtered);
        }
    });
}
exports.filterIncomesByYearInDescendingOrder = filterIncomesByYearInDescendingOrder;
