import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Navbar = ({setAccountId}) => {
    const [activeTab, setActiveTab] = useState('dashboard')
    return ( 
        <aside className="fixed left-0 top-0 h-full py-4 w-1/4 bg-white pr-6">
            <div className="px-4 border-b py-2">
                <h1 className="text-2xl font-bold mb-4">MiNo</h1>
                <div className="flex gap-2 items-center">
                    <div className="rounded-full bg-gray-100 w-10 h-10"></div>
                    <div>
                        <span className="block text-sm font-semibold">Emmanuel</span>
                        <span className="opacity-60">emmanuel@mino.com</span>
                    </div>
                </div>
            </div>
            <Link to='/dashboard' onClick={() => setActiveTab('dashboard')}>
                <div className={"p-4 my-8 rounded-r-full " + (activeTab === 'dashboard' ? 'bg-green-100 text-green-500 font-semibold' : 'bg-transparent')}>
                Dashboard
                </div>
            </Link>
            <Link to='/income' onClick={() => setActiveTab('income')}>
                <div className={"p-4 my-8 rounded-r-full " + (activeTab === 'income' ? 'bg-blue-100 text-blue-500 font-semibold' : 'bg-transparent')}>
                    Income
                </div>
            </Link>
            <Link to='/expenses' onClick={() => setActiveTab('expense')}>
                <div className={"p-4 my-8 rounded-r-full " + (activeTab === 'expense' ? 'bg-red-100 text-red-500  font-semibold' : 'bg-transparent')}>
                    Expenses
                </div>
            </Link>
            
            <Link
                onClick={() => {setAccountId('')}} 
                to='/signin'>
                <div className="absolute bottom-0 left-0 w-full p-4 font-semibold">
                    Log Out
                </div>
            </Link>
            
        </aside>
     );
}
 
export default Navbar;