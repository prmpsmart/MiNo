import { getIncomes } from "../Backend/functions/sort_incomes";

const Table =  ({ email, accountId, isIncome }) => {
//   var items;

//   if (isIncome) {
//     items = await getIncomes(email, accountId);
//   } else {
//   }
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <table className="w-full text-center table-auto border-spacing-4">
        <thead>
          <tr className="">
            <th className="semibold opacity-60">Name</th>
            <th className="semibold opacity-60">Category</th>
            <th className="semibold opacity-60">Amount</th>
            <th className="semibold opacity-60">Description</th>
            <th className="semibold opacity-60">Date</th>
            <th className="semibold opacity-60">Type</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td>Electricity bills</td>
            <td className="text-red-500">-₦2,000</td>
            <td>24 Sep.</td>
            <td>Expense</td>
          </tr>
          <tr className="">
            <td>Foodstuff</td>
            <td className="text-red-500">-₦60,000</td>
            <td>22 Sep.</td>
            <td>Expense</td>
          </tr>
          <tr className="">
            <td>Urgent 2k</td>
            <td className="text-blue-500">-₦2,000</td>
            <td>18 Sep.</td>
            <td>Income</td>
          </tr>
          <tr className="">
            <td>Transport</td>
            <td className="text-red-500">-₦6,000</td>
            <td>22 Sep.</td>
            <td>Expense</td>
          </tr>
          <tr className="">
            <td>Salary</td>
            <td className="text-blue-500">-₦100,000</td>
            <td>15 Sep.</td>
            <td>Income</td>
          </tr>
          <tr className="">
            <td>Birthday Gift</td>
            <td className="text-blue-500">-₦10,000</td>
            <td>12 Sep.</td>
            <td>Income</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
