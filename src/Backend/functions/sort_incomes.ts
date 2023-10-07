import { ReturnObject } from "nobox-client";
import { Transaction, IncomeModel } from "../schemas/income";
import { getAccountByIDorEmail } from "./account_management";

export async function getIncomes(email: string = "", account_id: string = "") {
  const account = await getAccountByIDorEmail(email, account_id);
  if (account != null) {
    const incomes = await IncomeModel.find({ account_id: account.id });
    return incomes;
  } else {
    console.log(
      `Account with email: "${email}" or account_id: "${account_id}" doesn't exist`
    );
  }
}

export function sortInAscendingOrder(
  objs: ReturnObject<Transaction>[]
) {
  return objs.slice().sort((a, b) => a.timestamp - b.timestamp);
}

export function sortInDescendingOrder(
  objs: ReturnObject<Transaction>[]
) {
  return objs.slice().sort((a, b) => b.timestamp - a.timestamp);
}

export async function sortIncomeInAscendingOrder(
  email: string = "",
  account_id: string = ""
) {
  const incomes = await getIncomes(email, account_id);
  if (incomes != null) {
    return sortInAscendingOrder(incomes);
  }
}

export async function sortIncomeInDescendingOrder(
  email: string = "",
  account_id: string = ""
) {
  const incomes = await getIncomes(email, account_id);
  if (incomes != null) {
    return sortInDescendingOrder(incomes);
  }
}

export async function sortIncomeByCategoriesInAscendingOrder(
  email: string = "",
  account_id: string = ""
) {
  const incomes = await getIncomes(email, account_id);
  if (incomes != null) {
    return sortInAscendingOrder(
      incomes.slice().sort((a, b) => a.category.localeCompare(b.category))
    );
  }
}

export async function sortIncomeByCategoriesInDescendingOrder(
  email: string = "",
  account_id: string = ""
) {
  const incomes = await getIncomes(email, account_id);
  if (incomes != null) {
    return sortInDescendingOrder(
      incomes.slice().sort((a, b) => a.category.localeCompare(b.category))
    );
  }
}
