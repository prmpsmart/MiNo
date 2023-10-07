import React, { useEffect, useState } from "react";
import Table from "../Components/Table";
import Filter from "../Components/Filter";
import { Transaction } from "../Backend/schemas/income";
import { ReturnObject } from "nobox-client";
import { getIncomes } from "../Backend/functions/sort_incomes";
import { useNavigate } from "react-router-dom";

type Props = {
  email: string;
  accountId: string;
};

const Income: React.FC<Props> = ({ email, accountId }) => {
  const navigate = useNavigate();
  const [incomes, setIncomes] = useState<ReturnObject<Transaction>[]>([]);
  const [, updatePage] = useState(false);

  useEffect(() => {
    const fetchIncomes = async () => {
      const incomes_ = await getIncomes(email, accountId);
      console.log(incomes_);
      if (incomes_ != null) setIncomes(incomes_);
    };

    if (email.length > 0 && accountId.length > 0) {
      fetchIncomes();
    } else {
      navigate("signin");
    }
  }, [email, accountId, navigate]);

  return (
    <section>
      <div className="flex justify-between items-center py-4 ml-[25%]">
        <div>
          <h2 className="text-2xl">Income</h2>
        </div>
        {/* <div className="flex gap-4">
          <input
            type="text"
            className="w-34 rounded-lg border-black border-2"
          />
          <button className=" bg-gray-900 text-white px-4 py-1 rounded">
            Search
          </button>
        </div> */}
      </div>
      <div className="ml-[25%]">
        <Filter isIncome={true} email={email} accountId={accountId} updatePage={updatePage}/>
        <Table transactions={incomes} isIncome={true} />
      </div>
    </section>
  );
};

export default Income;
