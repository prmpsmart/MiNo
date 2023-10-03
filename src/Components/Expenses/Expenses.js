import React from 'react'
import Form from '../Form/Form'
import { useGlobalContext } from '../../Context/GlobalContext'
import ExpenseItem from './ExpenseItem'
import ExpenseForm from './ExpenseForm'
import './Expenses.css'
const Expenses = () => {
  return (
    <div className='ExpensesStyle'>
        <div className='InnerLayout'>
        <h1>Expenses</h1>
        {/* <h2 className='total-income'>Total Expense:</h2> */}
        <div className='expense-content'>
            <div className='form-container'>
            <ExpenseForm/>
            </div>
            <div className='expenses'>
            {/* {expenses.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            console.log(income)
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteExpense}
                            />
                        })} */}
                        <ExpenseItem />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Expenses