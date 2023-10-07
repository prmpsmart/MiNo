import { AccountModel } from "../schemas/account";
import { ExpensesCategoryModel } from "../schemas/expense_category";
import { IncomesCategoryModel } from "../schemas/income_category";
import {
  defaultExpensesCategories,
  defaultIncomesCategories,
} from "../utils/constants";

export class Status {
  message: string = "";
  isError: boolean = false;

  constructor(msg: string, err: boolean) {
    this.message = msg;
    this.isError = err;
  }
}

export async function getAccount(email: string) {
  return await AccountModel.findOne({ email: email });
}
export async function createAccount(
  name: string,
  email: string,
  password: string
) {
  let account = await getAccount(email);
  if (account != null) {
    return new Status(`Account with email: "${email}" already exist`, true);
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
    return new Status("Account created successfully", false);
  }
}

export async function passwordReset(email: string, password: string) {
  const account = await getAccount(email);
  if (account != null) {
    await AccountModel.updateOneById(account.id, { password: password });
    return new Status("Account password changed successfully", false);
  } else {
    return new Status(`Account with email: "${email}" doesn't exist`, true);
  }
}
// export async function deleteAccount(email: string) {
//   const account = await getAccount(email);
//   if (account != null) {
//     //   todo, delete account
//     return new Status("Account deleted successfully");
//   } else {
//     return new Status(`Account with email: "${email}" doesn't exist`);
//   }
// }

export async function getAccountByIDorEmail(email: string, account_id: string) {
  return await AccountModel.findOne({ email: email, id: account_id });
}
