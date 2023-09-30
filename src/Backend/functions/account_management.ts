import { AccountModel } from "../schemas/account";
import { ExpensesCategoryModel } from "../schemas/expense_category";
import { IncomesCategoryModel } from "../schemas/income_category";
import {
  defaultExpensesCategories,
  defaultIncomesCategories,
} from "../utils/constants";

export async function getAccount(email: string) {
  const account = await AccountModel.findOne({ email: email });
  if (account != null) {
    return account;
  }
}
export async function createAccount(
  name: string,
  email: string,
  password: string
) {
  let account = await getAccount(email);
  if (account != null) {
    console.log(`Account with email: "${email}" already exist`);
  } else {
    account = await AccountModel.insertOne({
      name: name,
      email: email,
      password: password,
    });
    await IncomesCategoryModel.insertOne({
      account_id: account.id,
      categories: defaultIncomesCategories,
    });
    await ExpensesCategoryModel.insertOne({
      account_id: account.id,
      categories: defaultExpensesCategories,
    });
    console.log("Account created successfully");
  }
}

export async function passwordReset(email: string, password: string) {
  const account = await getAccount(email);
  if (account != null) {
    await AccountModel.updateOneById(account.id, { password: password });
    console.log("Account password changed successfully");
  } else {
    console.log(`Account with email: "${email}" doesn't exist`);
  }
}
export async function deleteAccount(email: string) {
  const account = await getAccount(email);
  if (account != null) {
    //   todo, delete account
    console.log("Account deleted successfully");
  } else {
    console.log(`Account with email: "${email}" doesn't exist`);
  }
}

export async function getAccountByIDorEmail(email: string, account_id: string) {
  return await AccountModel.findOne({ email: email, id: account_id });
}
