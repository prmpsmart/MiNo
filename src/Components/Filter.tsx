import React, { useState } from "react";
import { addExpense, addIncome } from "../Backend/functions/add_item";

type Props = {
  isIncome: boolean;
  email: string;
  accountId: string;
  updatePage: (val: boolean) => void;
};

const Filter: React.FC<Props> = ({
  isIncome,
  email,
  accountId,
  updatePage,
}) => {
  const [error, setError] = useState("");

  const categories = [
    "Job",
    "Investments",
    "Business",
    "Family",
    "Friends",
    "Family & Friends",
    "Games",
    "Others",
  ];

  const showError = (message: string) => {
    setError(message);
    alert(message);
  };

  const handleClick = async () => {
    const name = (
      document.getElementById("name") as HTMLInputElement
    ).value.trimStart();
    const category = (document.getElementById("category") as HTMLSelectElement)
      .selectedIndex;
    let amountI = (
      document.getElementById("amount") as HTMLInputElement
    ).value.trimStart();
    if (amountI.length < 1) amountI = "0";
    const amount = Number(amountI);
    const description = (
      document.getElementById("description") as HTMLInputElement
    ).value.trimStart();
    const date = (document.getElementById("date") as HTMLInputElement).value;
    const datett = Date.parse(date);

    if (
      amount > 0 &&
      description.length > 0 &&
      name.length > 0 &&
      Number.isInteger(datett)
    ) {
      let status;
      if (isIncome) {
        status = await addIncome(
          accountId,
          email,
          name,
          categories[category],
          amount.toString(),
          description,
          datett.toString()
        );
      } else {
        status = await addExpense(
          accountId,
          email,
          name,
          categories[category],
          amount.toString(),
          description,
          datett.toString()
        );
      }
      updatePage(true);
      showError(status.message);
    } else {
      showError("Please fill all fields");
    }
  };

  return (
    <div className="">
      <div className=" flex items-center gap-4 p-2">
        <div>
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="p-4 h-[30px] w-[180px] rounded-lg border-black border-2"
          />
        </div>
        <div>
          <label htmlFor="category" className="block">
            Category
          </label>
          <select
            name="Category"
            id="category"
            className=" rounded border-black border-2 h-[30px]"
          >
            {categories.map((category) => (
              <option value={category} selected>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/2">
          <label htmlFor="amount" className="block">
            Amount
          </label>

          <input
            type="number"
            id="amount"
            className="px-2 w-[100px] rounded-lg border-black border-2 h-[30px]"
          />
        </div>
        <div>
          <label htmlFor="description" className="block">
            Description
          </label>
          <input
            type="text"
            id="description"
            className="p-4 outline-blue-100  border-black border-2 h-[30px]"
          />
        </div>
        <div>
          <label htmlFor="date" className="block">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="p-4  border-black border-2 h-[30px]"
          />
        </div>

        <button
          onClick={handleClick}
          className="py-2 px-4 mt-6 rounded bg-black text-white"
        >
          Add
        </button>
      </div>
      {error.length > 0 && <p className="text-center text-red-400">{error}</p>}
      <div className="flex justify-center gap-4 my-4"></div>
    </div>
  );
};

export default Filter;
