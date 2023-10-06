"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateInYear = exports.dateInMonth = exports.dateInWeek = exports.dateInDay = exports.compare = void 0;
function compare(from, date, to) {
    from.setUTCHours(0, 0, 0, 0);
    to.setUTCHours(23, 59, 59, 999);
    console.log(from, date, to);
    console.log(from.getTime(), date, to.getTime());
    return from.getTime() <= date && date <= to.getTime();
}
exports.compare = compare;
function dateInDay(day, date) {
    return compare(day, date, day);
}
exports.dateInDay = dateInDay;
function dateInWeek(week, date) {
    let startDate = week.getDate() - week.getDay();
    let from = new Date(week);
    from.setDate(startDate);
    let to = new Date(week);
    to.setDate(startDate + 6);
    return compare(from, date, to);
}
exports.dateInWeek = dateInWeek;
function dateInMonth(month, date) {
    let from = new Date(month);
    from.setDate(1);
    let to = new Date(month);
    to.setUTCMonth(month.getMonth() + 1, 0);
    return compare(from, date, to);
}
exports.dateInMonth = dateInMonth;
function dateInYear(year, date) {
    let from = new Date(year);
    from.setUTCMonth(0, 1);
    let to = new Date(year);
    to.setUTCMonth(11, 31);
    return compare(from, date, to);
}
exports.dateInYear = dateInYear;
