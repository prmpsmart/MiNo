import {
  dateInDay,
  dateInMonth,
  dateInWeek,
  dateInYear,
} from "../utils/date_compare";
import { getExpenses } from "./sort_expenses";
import { sortInAscendingOrder, sortInDescendingOrder } from "./sort_incomes";

export async function filterExpensesByCategoryInAscendingOrder(
  email: string = "",
  account_id: string = "",
  category: string
) {
  const expenses = await getExpenses(email, account_id);
  if (expenses != null) {
    const filtered = expenses.filter(
      (expense) => expense.category === category
    );
    return sortInAscendingOrder(filtered);
  }
}
export async function filterExpensesByCategoryInDescendingOrder(
  email: string = "",
  account_id: string = "",
  category: string
) {
  const expenses = await getExpenses(email, account_id);
  if (expenses != null) {
    const filtered = expenses.filter((expense) => expense.category == category);
    return sortInDescendingOrder(filtered);
  }
}

export async function filterExpensesByDateInAscendingOrder(
  email: string = "",
  account_id: string = "",
  day: Date
) {
  const expenses = await getExpenses(email, account_id);
  if (expenses != null) {
    const filtered = expenses.filter((expense) =>
      dateInDay(day, expense.timestamp)
    );
    return sortInDescendingOrder(filtered);
  }
}
export async function filterExpensesByDateInDescendingOrder(
  email: string = "",
  account_id: string = "",
  day: Date
) {
  const expenses = await getExpenses(email, account_id);
  if (expenses != null) {
    const filtered = expenses.filter((expense) =>
      dateInDay(day, expense.timestamp)
    );
    return sortInDescendingOrder(filtered);
  }
}

export async function filterExpensesByWeekInAscendingOrder(
  email: string = "",
  account_id: string = "",
  week: Date
) {
  const expenses = await getExpenses(email, account_id);
  if (expenses != null) {
    const filtered = expenses.filter((expense) =>
      dateInWeek(week, expense.timestamp)
    );
    return sortInDescendingOrder(filtered);
  }
}
export async function filterExpensesByWeekInDescendingOrder(
  email: string = "",
  account_id: string = "",
  week: Date
) {
  const expenses = await getExpenses(email, account_id);
  if (expenses != null) {
    const filtered = expenses.filter((expense) =>
      dateInWeek(week, expense.timestamp)
    );
    return sortInDescendingOrder(filtered);
  }
}

export async function filterExpensesByMonthInAscendingOrder(
  email: string = "",
  account_id: string = "",
  month: Date
) {
  const expenses = await getExpenses(email, account_id);
  if (expenses != null) {
    const filtered = expenses.filter((expense) =>
      dateInMonth(month, expense.timestamp)
    );
    return sortInDescendingOrder(filtered);
  }
}
export async function filterExpensesByMonthInDescendingOrder(
  email: string = "",
  account_id: string = "",
  month: Date
) {
  const expenses = await getExpenses(email, account_id);
  if (expenses != null) {
    const filtered = expenses.filter((expense) =>
      dateInMonth(month, expense.timestamp)
    );
    return sortInDescendingOrder(filtered);
  }
}

export async function filterExpensesByYearInAscendingOrder(
  email: string = "",
  account_id: string = "",
  year: Date
) {
  const expenses = await getExpenses(email, account_id);
  if (expenses != null) {
    const filtered = expenses.filter((expense) =>
      dateInYear(year, expense.timestamp)
    );
    return sortInDescendingOrder(filtered);
  }
}
export async function filterExpensesByYearInDescendingOrder(
  email: string = "",
  account_id: string = "",
  year: Date
) {
  const expenses = await getExpenses(email, account_id);
  if (expenses != null) {
    const filtered = expenses.filter((expense) =>
      dateInYear(year, expense.timestamp)
    );
    return sortInDescendingOrder(filtered);
  }
}
