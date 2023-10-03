import React from 'react'
import './Chart.css'
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import { Line } from 'react-chartjs-2'
import { useGlobalContext } from '../../Context/GlobalContext'
import { dateformat } from '../../Utilities/dateformat'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)


function Chart() {

    const {incomes, expenses} = useGlobalContext()

    const data = {
        labels: incomes.map((inc) => {
            const { date } = inc
            return dateformat(date)
        })
    }
  return (
      <div className='ChartStyle'>
          <Line/>
      </div>
      
  )
}

export default Chart