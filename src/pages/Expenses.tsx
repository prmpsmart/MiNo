// import { useState } from "react";
import Table from "../Components/Table";
import Filter from "../Components/Filter";
import React, { useEffect, useState } from "react";
import { getExpenses } from "../Backend/functions/sort_expenses";
import { ReturnObject } from "nobox-client";
import { Transaction } from "../Backend/schemas/income";
import { useNavigate } from "react-router-dom";

type Props = {
  email: string;
  accountId: string;
};

const Expenses: React.FC<Props> = ({ email, accountId }) => {
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState<ReturnObject<Transaction>[]>([]);
  const [, updatePage] = useState(false);

  useEffect(() => {
    const fetchExpenses = async () => {
      const incomes_ = await getExpenses(email, accountId);
      if (incomes_ != null) setExpenses(incomes_);
    };

    if (email.length > 0 && accountId.length > 0) {
      fetchExpenses();
    } else {
      navigate("signin");
    }
  }, [email, accountId, navigate, updatePage]);

  return (
    <section>
      <div className="flex justify-between align-top items-center py-4 ml-[25%]">
        <div>
          <h2 className="text-2xl">Expenses</h2>
        </div>
        {/* <div className="flex gap-4">
          <input
            type="text"
            className="w-34 rounded-lg border-2 border-black"
          />
          <button className=" bg-gray-900 text-white px-4 py-1 rounded">
            Search
          </button>
        </div> */}
      </div>
      <div className="ml-[25%]">
        <Filter isIncome={false} email={email} accountId={accountId}updatePage={updatePage} />
        <Table transactions={expenses} isIncome={false} />
      </div>
    </section>
  );
};

export default Expenses;
