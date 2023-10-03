import React, { useState } from 'react';
import './Form.css'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useGlobalContext } from '../../Context/GlobalContext'
import Button from '../Button/Button';
import ".././Button/Button.css"
import{plus} from '../../Utilities/icons'

const Form = () =>{
   
    const { addIncome, getIncomes, incomes} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date:  '',
        category: '',
        description: '',
    })


    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
       const rs =  addIncome(inputState)
        if( rs) setInputState({
            title: '',
            amount: '',
            date: new Date.now(),
            category: '',
            description: '',
        })
    }

    return (
        <div className='FormStyle' onSubmit={handleSubmit}>

            <div className='input-control'>
                <input type='text'
                    value={inputState?.title}
                    name={"title"}
                    placeholder='Income Title'
                    onChange={handleInput('title')}
                />
            </div>

            <div className='input-control'>
                <input type='text'
                    value={inputState.amount}
                    name={"amount"}
                    placeholder='Income Amount'
                    onChange={handleInput('amount')}
                />
            </div>

            <div className='input-control'>
                <DatePicker
                    id='date'
                    placeholderText='Enter A Date'
                    selected={inputState?.date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({ ...inputState, date: date })
                    }}
                     />
            </div>

            <div className=' selects input-control' id='select'>
                <select required value={inputState.category} name='category'  onChange={handleInput('category')}>
                    <option value='' disabled>Select Option</option>
                    <option value='salary'>Salary</option>
                    <option value='investments'>Investments</option>
                    <option value='stocks'>Stocks</option>
                    <option value='forex'>Forex</option>
                    <option value='cryptocurrency'>Cryptocurrency</option>
                    <option value='freelancing'>Freelancing</option>
                    <option value='social media'>Social Media</option>
                    <option value='other'>Other..</option>
                </select>
            </div>



            <div className='input-control'>
                <textarea name={'description'} value={inputState.description} placeholder='Add A Reference' id='description' cols='30' rows='4' onChange={handleInput('description')}></textarea>
                
            </div>

            <div className='submit-button' >
        
                <Button 
                    name={'Add Income'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'pink'}
                    color={'#fff'}
                    hColor={'red'}
                />
                
            </div>
        </div>
    )
}

export default Form
