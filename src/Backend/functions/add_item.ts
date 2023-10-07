import { ExpenseModel } from "../schemas/expense";
import { ExpensesCategoryModel } from "../schemas/expense_category";
import { IncomeModel } from "../schemas/income";
import { IncomesCategoryModel } from "../schemas/income_category";
import { splitter } from "../utils/constants";
import { Status, getAccountByIDorEmail } from "./account_management";

export async function addIncome(
  account_id: string = "",
  email: string = "",
  name: string,
  category: string,
  amount: string,
  description: string,
  timestamp: string,
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
    let trans;
    if (id.length > 0) {
      trans = await IncomeModel.updateOneById(id, obj);
    } else {
      trans = await IncomeModel.insertOne(obj);
    }
    console.log(trans);
    if (trans != null) {
      return new Status("Income added successfully", false);
    } else {
      return new Status("Network Error", true);
    }
  } else {
    return new Status(
      `Account with email: "${email}" or account_id: "${account_id}" doesn't exist`,
      true
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
  timestamp: string,
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
    return new Status("Expense add successfully", false);
  } else {
    return new Status(
      `Account with email: "${email}" or account_id: "${account_id}" doesn't exist`,
      true
    );
  }
}

function addToCategory(categories: string, category: string): string {
  const categoriesList = categories.split(splitter);
  const categoriesSet = new Set<string>();
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
