import {
  dateInDay,
  dateInMonth,
  dateInWeek,
  dateInYear,
} from "../utils/date_compare";
import {
  getIncomes,
  sortInAscendingOrder,
  sortInDescendingOrder,
} from "./sort_incomes";

export async function filterIncomesByCategoryInAscendingOrder(
  email: string = "",
  account_id: string = "",
  category: string
) {
  const incomes = await getIncomes(email, account_id);
  if (incomes != null) {
    const filtered = incomes.filter((income) => income.category === category);
    return sortInAscendingOrder(filtered);
  }
}
export async function filterIncomesByCategoryInDescendingOrder(
  email: string = "",
  account_id: string = "",
  category: string
) {
  const incomes = await getIncomes(email, account_id);
  if (incomes != null) {
    const filtered = incomes.filter((income) => income.category == category);
    return sortInDescendingOrder(filtered);
  }
}

export async function filterIncomesByDateInAscendingOrder(
  email: string = "",
  account_id: string = "",
  day: Date
) {
  const incomes = await getIncomes(email, account_id);
  if (incomes != null) {
    const filtered = incomes.filter((income) =>
      dateInDay(day, income.timestamp)
    );
    return sortInDescendingOrder(filtered);
  }
}
export async function filterIncomesByDateInDescendingOrder(
  email: string = "",
  account_id: string = "",
  day: Date
) {
  const incomes = await getIncomes(email, account_id);
  if (incomes != null) {
    const filtered = incomes.filter((income) =>
      dateInDay(day, income.timestamp)
    );
    return sortInDescendingOrder(filtered);
  }
}

export async function filterIncomesByWeekInAscendingOrder(
  email: string = "",
  account_id: string = "",
  week: Date
) {
  const incomes = await getIncomes(email, account_id);
  if (incomes != null) {
    const filtered = incomes.filter((income) =>
      dateInWeek(week, income.timestamp)
    );
    return sortInDescendingOrder(filtered);
  }
}
export async function filterIncomesByWeekInDescendingOrder(
  email: string = "",
  account_id: string = "",
  week: Date
) {
  const incomes = await getIncomes(email, account_id);
  if (incomes != null) {
    const filtered = incomes.filter((income) =>
      dateInWeek(week, income.timestamp)
    );
    return sortInDescendingOrder(filtered);
  }
}

export async function filterIncomesByMonthInAscendingOrder(
  email: string = "",
  account_id: string = "",
  month: Date
) {
  const incomes = await getIncomes(email, account_id);
  if (incomes != null) {
    const filtered = incomes.filter((income) =>
      dateInMonth(month, income.timestamp)
    );
    return sortInDescendingOrder(filtered);
  }
}
export async function filterIncomesByMonthInDescendingOrder(
  email: string = "",
  account_id: string = "",
  month: Date
) {
  const incomes = await getIncomes(email, account_id);
  if (incomes != null) {
    const filtered = incomes.filter((income) =>
      dateInMonth(month, income.timestamp)
    );
    return sortInDescendingOrder(filtered);
  }
}

export async function filterIncomesByYearInAscendingOrder(
  email: string = "",
  account_id: string = "",
  year: Date
) {
  const incomes = await getIncomes(email, account_id);
  if (incomes != null) {
    const filtered = incomes.filter((income) =>
      dateInYear(year, income.timestamp)
    );
    return sortInDescendingOrder(filtered);
  }
}
export async function filterIncomesByYearInDescendingOrder(
  email: string = "",
  account_id: string = "",
  year: Date
) {
  const incomes = await getIncomes(email, account_id);
  if (incomes != null) {
    const filtered = incomes.filter((income) =>
      dateInYear(year, income.timestamp)
    );
    return sortInDescendingOrder(filtered);
  }
}
