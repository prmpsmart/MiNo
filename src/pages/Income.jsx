import { useState } from "react";
import Table from "../components/Table";
import Filter from "../components/Filter";

const Income = ({ email, accountId }) => {
  return (
    <section>
      <div className="flex justify-between items-center py-4">
        <div>
          <h2 className="text-2xl">Income</h2>
        </div>
        <div className="flex gap-4">
          <input type="text" className="w-34 rounded-lg" />
          <button className=" bg-gray-900 text-white px-4 py-1 rounded">
            Search
          </button>
        </div>
      </div>

      <Filter isIncome />
      <Table  email={email} accountId={accountId} income={true}/>
    </section>
  );
};

export default Income;
