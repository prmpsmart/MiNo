import { ExpenseModel } from "../schemas/expense";
import { ExpensesCategoryModel } from "../schemas/expense_category";
import { IncomeModel } from "../schemas/income";
import { IncomesCategoryModel } from "../schemas/income_category";
import { splitter } from "../utils/constants";
import { getAccountByIDorEmail } from "./account_management";

export async function deleteIncome(id: string) {
  const income = await IncomeModel.findOne({
    id: id,
  });
  if (income != null) {
    // todo delete income
    console.log(`Income with id: "${id}" deleted successfully`);
  } else {
    console.log(`Income with id: "${id}" doesn't exist`);
  }
}

export async function deleteExpense(id: string) {
  const expense = await ExpenseModel.findOne({
    id: id,
  });
  if (expense != null) {
    // todo delete expense
    console.log(`Expense with id: "${id}" deleted successfully`);
  } else {
    console.log(`Expense with id: "${id}" doesn't exist`);
  }
}
function deleteFromCategory(categories: string, category: string): string {
  const categoriesList = categories.split(splitter);
  const categoriesSet = new Set<string>();
  categoriesList.forEach((cat) => categoriesSet.add(cat));
  categoriesSet.delete(category.toLowerCase());
  return Array.from(categoriesSet).join(splitter);
}

export async function deleteIncomeCategory(
  email: string = "",
  account_id: string = "",
  category: string
) {
  const account = await getAccountByIDorEmail(email, account_id);
  if (account != null) {
    const incomesCategory = await IncomesCategoryModel.findOne({
      account_id: account.id,
    });
    await IncomesCategoryModel.updateOneById(incomesCategory.id, {
      categories: deleteFromCategory(incomesCategory.categories, category),
    });
  } else {
    console.log(
      `Account with email: "${email}" or account_id: "${account_id}" doesn't exist`
    );
  }
}
export async function deleteEexpenseCategory(
  email: string = "",
  account_id: string = "",
  category: string
) {
  const account = await getAccountByIDorEmail(email, account_id);
  if (account != null) {
    const expensesCategory = await ExpensesCategoryModel.findOne({
      account_id: account.id,
    });
    await ExpensesCategoryModel.updateOneById(expensesCategory.id, {
      categories: deleteFromCategory(expensesCategory.categories, category),
    });
  } else {
    console.log(
      `Account with email: "${email}" or account_id: "${account_id}" doesn't exist`
    );
  }
}
