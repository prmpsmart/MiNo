import React, { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  setAccountId: (val: string) => void;
  name: string;
  email: string;
};

const Navbar: React.FC<Props> = ({ name, email, setAccountId }) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  return (
    <aside className="fixed left-0 top-0 h-full py-4 w-1/6 bg-white pr-6">
      <div className="px-4 border-b py-2">
        <h1 className="text-2xl font-bold mb-4">MiNo</h1>
        <div className="flex gap-2 items-center">
          <div className="rounded-full bg-gray-100 w-10 h-10"></div>
          <div>
            <span className="block text-sm font-semibold">{name}</span>
            <span className="opacity-60">{email}</span>
          </div>
        </div>
      </div>
      <Link to="/dashboard" onClick={() => setActiveTab("dashboard")}>
        <div
          className={
            "p-4 my-8 rounded-r-full " +
            (activeTab === "dashboard"
              ? "bg-green-100 text-green-500 font-semibold"
              : "bg-transparent")
          }
        >
          Dashboard
        </div>
      </Link>
      <Link to="/incomes" onClick={() => setActiveTab("incomes")}>
        <div
          className={
            "p-4 my-8 rounded-r-full " +
            (activeTab === "incomes"
              ? "bg-blue-100 text-blue-500 font-semibold"
              : "bg-transparent")
          }
        >
          Incomes
        </div>
      </Link>
      <Link to="/expenses" onClick={() => setActiveTab("expense")}>
        <div
          className={
            "p-4 my-8 rounded-r-full " +
            (activeTab === "expense"
              ? "bg-red-100 text-red-500  font-semibold"
              : "bg-transparent")
          }
        >
          Expenses
        </div>
      </Link>

      <Link
        onClick={() => {
          setAccountId("");
        }}
        to="/signin"
      >
        <div className="absolute bottom-0 left-0 w-full p-4 font-semibold">
          Log Out
          <p className="mt-3 text-sm text-gray-500">
            View Source on
            <a
              href="https://github.com/prmpsmart/MiNo"
              className="font-semibold leading-6 text-blue-600 hover:text-blue-500 px-2"
            >
              GitHub - MiNo
            </a>
          </p>
        </div>
      </Link>
    </aside>
  );
};

export default Navbar;
