import { getExpenses } from "./sort_expenses";
import { getIncomes } from "./sort_incomes";

export async function searchIncomes(
  email: string = "",
  account_id: string = "",
  searchString: string
) {
  const incomes = await getIncomes(email, account_id);
  if (incomes != null) {
    incomes.filter(
      (income) =>
        income.name.includes(searchString) ||
        income.category.includes(searchString) ||
        income.description.includes(searchString) ||
        income.amount.toString().includes(searchString)
        );
      }
}
export async function searchExpenses(
  email: string = "",
  account_id: string = "",
  searchString: string
  ) {
    const expenses = await getExpenses(email, account_id);
    if (expenses != null) {
      expenses.filter(
        (expense) =>
        expense.name.includes(searchString) ||
        expense.category.includes(searchString) ||
        expense.description.includes(searchString) ||
        expense.amount.toString().includes(searchString)
    );
  }
}
