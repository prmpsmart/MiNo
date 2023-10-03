import { ExpenseModel } from "../schemas/expense";
import { ExpensesCategoryModel } from "../schemas/expense_category";
import { IncomeModel } from "../schemas/income";
import { IncomesCategoryModel } from "../schemas/income_category";
import { splitter } from "../utils/constants";
import { getAccountByIDorEmail } from "./account_management";

export async function addIncome(
  account_id: string = "",
  email: string = "",
  name: string,
  category: string,
  amount: number,
  description: string,
  timestamp: number,
  id: string = ""
) {
  const account = await getAccountByIDorEmail(email, account_id);
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
      await IncomeModel.updateOneById(id, obj);
    } else {
      await IncomeModel.insertOne(obj);
    }
  } else {
    console.log(
      `Account with email: "${email}" or account_id: "${account_id}" doesn't exist`
    );
  }
}
export async function addExpense(
  account_id: string = "",
  email: string = "",
  name: string,
  category: string,
  amount: string,
  description: string,
  timestamp: number,
  id: string = ""
) {
  const account = await getAccountByIDorEmail(email, account_id);
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
      await ExpenseModel.updateOneById(id, obj);
    } else {
      await ExpenseModel.insertOne(obj);
    }
  } else {
    console.log(
      `Account with email: "${email}" or account_id: "${account_id}" doesn't exist`
    );
  }
}

function addToCategory(categories: string, category: string): string {
  let categoriesList = categories.split(splitter);
  let categoriesSet = new Set<string>();
  categoriesList.forEach((cat) => categoriesSet.add(cat));
  categoriesSet.add(category.toLowerCase());
  return Array.from(categoriesSet).join(splitter);
}

export async function addIncomeCategory(
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
      categories: addToCategory(incomesCategory.categories, category),
    });
  } else {
    console.log(
      `Account with email: "${email}" or account_id: "${account_id}" doesn't exist`
    );
  }
}
export async function addEexpenseCategory(
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
      categories: addToCategory(expensesCategory.categories, category),
    });
  } else {
    console.log(
      `Account with email: "${email}" or account_id: "${account_id}" doesn't exist`
    );
  }
}
