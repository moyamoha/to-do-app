import React from 'react'
import './PaivaStyles.css'
import { dateEquals } from '../../../logic/logic'

export default function Paiva({date, setcurrentDay, currentDay}) {

    function handleDayClick(e) {
        if (dateEquals(date, currentDay)) {
            e.target.classList.add('current')
        }
        setcurrentDay(date)
    }

    let className;
    if (date) {
        if (dateEquals(date, new Date())) {
            className = dateEquals(date, currentDay) ? "paiva today current" : "paiva today";
        } else {
            className = dateEquals(date, currentDay) ? "paiva current" : "paiva";
        }
    } else {
        className = "tyhja"
    }
                                

    return (
        <div 
          className={className}
          onClick={e => date ? handleDayClick(e) : null}
        >
            {date ? date.getDate() : ""}
        </div>
    )
}
