import React, { useEffect, useState } from "react";
import { Transaction } from "../Backend/schemas/income";
import { getIncomes } from "../Backend/functions/sort_incomes";
import { ReturnObject } from "nobox-client";
import Table from "../Components/Table";
import { getExpenses } from "../Backend/functions/sort_expenses";
import { useNavigate } from "react-router-dom";

type Props = {
  email: string;
  accountId: string;
};

const Dashboard: React.FC<Props> = ({ email, accountId }) => {
  const [incomes, setIncomes] = useState<ReturnObject<Transaction>[]>([]);
  const [expenses, setExpenses] = useState<ReturnObject<Transaction>[]>([]);
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchIncomes = async () => {
  //     const incomes_ = await getIncomes(email, accountId);
  //     if (incomes_ != null) {
  //       let totalIncomes_ = 0;
  //       incomes_.map((income) => {
  //         totalIncomes_ += Number(income.amount);
  //       });
  //       setIncomes(incomes_);
  //       setTotalIncomes(totalIncomes_);
  //     }
  //   };
  //   const fetchExpenses = async () => {
  //     const expenses_ = await getExpenses(email, accountId);
  //     console.log(expenses_);
  //     if (expenses_ != null) {
  //       let totalExpenses = 0;
  //       expenses_.map((expense) => {
  //         totalExpenses += Number(expense.amount);
  //       });
  //       setExpenses(expenses);
  //       setTotalExpenses(totalExpenses);
  //     }
  //   };
  //   if (email.length > 0 && accountId.length > 0) {
  //     if (!loaded) {
  //       fetchIncomes();
  //       fetchExpenses();
  //       setLoaded(true);
  //     }
  //   } else {
  //     navigate("/signin");
  //   }
  // }, [
  //   email,
  //   accountId,
  //   navigate,
  //   totalIncomes,
  //   totalExpenses,
  //   incomes,
  //   expenses,
  //   loaded,
  // ]);

  useEffect(() => {
    if (email.length > 0 && accountId.length > 0) {
      //
    } else {
      navigate("/signin");
    }
  }, [navigate, accountId, email]);

  useEffect(() => {
    const fetchIncomes = async () => {
      const incomes_ = await getIncomes(email, accountId);
      if (incomes_ != null) {
        let totalIncomes_ = 0;
        incomes_.map((income) => {
          totalIncomes_ += Number(income.amount);
        });
        setIncomes(incomes_);
        setTotalIncomes(totalIncomes_);
      }
    };

    if (!loaded) {
      // if (!loaded && email.length > 0 && accountId.length > 0) {
      fetchIncomes();
      setLoaded(true);
    }
  }, [email, accountId, totalIncomes, incomes, loaded]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const expenses_ = await getExpenses(email, accountId);
      if (expenses_ != null) {
        let totalExpenses_ = 0;
        expenses_.map((income) => {
          totalExpenses_ += Number(income.amount);
        });
        setExpenses(expenses_);
        setTotalExpenses(totalExpenses_);
      }
    };

    if (!loaded2) {
      fetchExpenses();
      setLoaded2(true);
    }
  }, [email, accountId, totalExpenses, expenses, loaded2]);

  if (email.length > 0 && accountId.length > 0) {
    return (
      <section>
        <div className="content ml-[60%] grow w-full">
          <div className="py-8 flex justify-between items-center">
            <div>
              <h2 className="text-2xl">Dashboard</h2>
            </div>
            {/* <div className="flex gap-4">
              <input type="text" className="w-34 rounded-lg border-black" />
              <button className=" bg-gray-900 text-white px-4 py-1 rounded">
                Search
              </button>
            </div> */}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <h4 className="opacity-90">Total Balance</h4>
              <h3 className="mt-4 font-bold text-2xl">
                ₦{totalIncomes - totalExpenses}
              </h3>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <h4 className="opacity-90">Total Expense</h4>
              <h3 className="mt-4 font-bold text-2xl">₦{totalExpenses}</h3>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <h4 className="opacity-90">Total Income</h4>
              <h3 className="mt-4 font-bold text-2xl">₦{totalIncomes}</h3>
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-2xl bg-blue-100 text-blue-500 p-4 inline-block leading-none rounded-lg">
              Incomes
            </h2>
            <Table transactions={incomes} isIncome={true} />
          </div>
          <div className="my-12">
            <h2 className="text-2xl bg-red-100 text-red-500 p-4 inline-block leading-none rounded-lg">
              Expenses
            </h2>
            <Table transactions={expenses} isIncome={false} />
          </div>
        </div>
      </section>
    );
  }
};

export default Dashboard;
