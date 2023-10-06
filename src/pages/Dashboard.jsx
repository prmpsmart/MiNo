import { getIncomes } from "../Backend/functions/sort_incomes";
import Table from "../components/Table";

const Dashboard = ({email, accountId}) => {
    const incomes = getIncomes(email, accountId)
    return ( 
        <section>
            <div className="py-8 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl">Dashboard</h2>
                </div>
                <div className="flex gap-4">
                    <input type="text" className="w-34 rounded-lg"/>
                    <button className=" bg-gray-900 text-white px-4 py-1 rounded">Search</button>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-lg">
                    <h4 className="opacity-90">Total Balance</h4>
                    <h3 className="mt-4 font-bold text-2xl">₦48,000.00</h3>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-lg">
                    <h4 className="opacity-90">Total Expense</h4>
                    <h3 className="mt-4 font-bold text-2xl">₦62,000.00</h3>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-lg">
                    <h4 className="opacity-90">Total Income</h4>
                    <h3 className="mt-4 font-bold text-2xl">₦110,000.00</h3>
                </div>
            </div>

            <div className="my-12">
                <h2 className="text-2xl bg-blue-100 text-blue-500 p-4 inline-block leading-none rounded-lg">Incomes</h2> 
                <Table />
            </div>
            <div className="my-12">
                <h2 className="text-2xl bg-red-100 text-red-500 p-4 inline-block leading-none rounded-lg">Expenses</h2> 
                <Table />
            </div>
            
        </section>
        
     );
}
 
export default Dashboard;