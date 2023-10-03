import { ExpenseModel } from "../schemas/expense";
import { getAccountByIDorEmail } from "./account_management";
import { sortInAscendingOrder, sortInDescendingOrder } from "./sort_incomes";

export async function getExpenses(email: string = "", account_id: string = "") {
  const account = await getAccountByIDorEmail(email, account_id);
  if (account != null) {
    const expenses = await ExpenseModel.find({ account_id: account.id });
    return expenses;
  } else {
    console.log(
      `Account with email: "${email}" or account_id: "${account_id}" doesn't exist`
    );
  }
}

export async function sortExpenseInAscendingOrder(
  email: string = "",
  account_id: string = ""
) {
  const expenses = await getExpenses(email, account_id);
  if (expenses != null) {
    return sortInAscendingOrder(expenses);
  }
}

export async function sortExpenseInDescendingOrder(
  email: string = "",
  account_id: string = ""
) {
  const expenses = await getExpenses(email, account_id);
  if (expenses != null) {
    return sortInDescendingOrder(expenses);
  }
}

export async function sortExpenseByCategoriesInAscendingOrder(
  email: string = "",
  account_id: string = ""
) {
  const expenses = await getExpenses(email, account_id);
  if (expenses != null) {
    return sortInAscendingOrder(
      expenses.slice().sort((a, b) => a.category.localeCompare(b.category))
    );
  }
}

export async function sortExpenseByCategoriesInDescendingOrder(
  email: string = "",
  account_id: string = ""
) {
  const expenses = await getExpenses(email, account_id);
  if (expenses != null) {
    return sortInDescendingOrder(
      expenses.slice().sort((a, b) => a.category.localeCompare(b.category))
    );
  }
}
