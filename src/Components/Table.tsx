import React from "react";
import { ReturnObject } from "nobox-client";
import { Transaction } from "../Backend/schemas/income";

type Props = {
  transactions: ReturnObject<Transaction>[];
  isIncome: boolean;
};

const Table: React.FC<Props> = ({ transactions, isIncome }) => {
  const color = isIncome ? "text-blue-500" : "text-red-500";

  return (
    <div className="bg-white rounded-lg shadow-lg py-4 w-[125%]">
      <table className="w-full text-center table-auto border-spacing-4">
        <thead>
          <tr className="">
            <th className="semibold opacity-60">Name</th>
            <th className="semibold opacity-60">Category</th>
            <th className="semibold opacity-60">Amount</th>
            <th className="semibold opacity-60">Description</th>
            <th className="semibold opacity-60">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr className="">
              <td>{transaction.name}</td>
              <td>{transaction.category}</td>
              <td className={color}>₦ {transaction.amount}</td>
              <td>{transaction.description}</td>
              <td>{new Date(Number(transaction.timestamp)).toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
