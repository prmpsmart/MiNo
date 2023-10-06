import { useState } from "react";

const Filter = ({ isIncome }) => {
  const [openComboBox, setOpenComboBox] = useState(false);
  const [error, setError] = useState(false);
  const incomeCategories = [
    "Job",
    "Investments",
    "Business",
    "Family",
    "Friends",
    "Family & Friends",
    "Games",
    "Others",
  ];

  const [newEntryCategory, setNewEntryCategory] = useState(null);
  const [newEntryAmount, setNewEntryAmount] = useState(null);
  const [newEntryDescription, setNewEntryDescription] = useState(null);
  const [newEntryTimestamp, setNewEntryTimestamp] = useState(null);

  const [entries, setEntries] = useState([]);
  const handleClick = () => {
    if (!newEntryCategory || !newEntryAmount || !newEntryDescription) {
      setError("Please fill all fields");
    } else {
      createNewEntry();
    }
  };
  const createNewEntry = () => {
    const date = new Date();
    setNewEntryTimestamp(date.getTime());

    const newEntry = {
      category: newEntryCategory,
      amount: newEntryAmount,
      description: newEntryDescription,
      timestamp: newEntryTimestamp,
    };

    setEntries([...entries, newEntry]);
    setError(false);
    setOpenComboBox(false);
  };

  var items;

  if (isIncome){

  }

  return (
    <div className="">
      <div className=" flex items-center gap-4">
        <div>
          <label htmlFor="name" className="block">
            Name
          </label>
          <input type="text" id="name" className="p-4" />
        </div>
        <div>
          <label htmlFor="category" className="block">
            Category
          </label>
          <select
            name="Categories"
            id="Categories"
            onChange={(e) => {
              setNewEntryCategory(e.target.value);
            }}
            className="p-4 rounded"
          >
            {incomeCategories.map((category) => (
              <option value={category}>{category}</option>
            ))}
            <option value={false} defaultValue={true}>
              Categories
            </option>
          </select>
        </div>
        <div className="w-[10%]">
          <label htmlFor="amount" className="block">
            Amount
          </label>

          <input
            type="number"
            className="p-4 outline-blue-100 w-full"
            onChange={(e) => {
              setNewEntryAmount(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="description" className="block">
            Description
          </label>
          <input
            type="text"
            className="p-4 outline-blue-100"
            onChange={(e) => {
              setNewEntryDescription(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="description" className="block">
            Date
          </label>
          <input type="date" name="date" id="date" className="p-4" />
        </div>

        <button
          onClick={handleClick}
          className="py-4 px-4 mt-6 rounded bg-black text-white"
        >
        Add
        </button>
      </div>
      {error && <p className="text-center text-red-400">{error}</p>}
      <div className="flex justify-center gap-4 my-4">
        
        
      </div>
    </div>
  );
};

export default Filter;
