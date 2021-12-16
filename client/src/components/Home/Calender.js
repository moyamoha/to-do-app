import React, {useState} from 'react';
import './cal.css'
import Paiva from './Paiva/Paiva';
import Reminders from './Reminders/Reminders'
import { generateStr, getMonthText, getMonthLength} from '../../logic/logic';
import Header from './Header';


function Calender({user, logout}) {
  const [currentDay, setcurrentDay] = useState(new Date())
  const [currentMonth, setcurrentMonth] = useState(currentDay.getMonth())
  const [currentYear, setCurrentYear] = useState(currentDay.getFullYear())
  const paivat = Array.from(Array(getMonthLength(currentMonth)).keys()).map(i => new Date(currentYear, currentMonth, i+1))

  let firstOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  let empties = firstOfMonth === 0 ? 6 : firstOfMonth - 1;
  for (let i = 1; i <= empties; i++) {
    paivat.unshift(null)
  }
  const daysOfWeek = ["ma", "ti", "ke", "to", "pe", "la", "su"]

  function gotoNextMonth() {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1)
      setcurrentMonth(0)
    } else {
      setcurrentMonth(currentMonth + 1)
    }
  }
  function gotoPrevMonth() {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1)
      setcurrentMonth(11)
    } else {
      setcurrentMonth(currentMonth - 1)
    }
  }
    return (
      <>
            <Header userName={user} logout={logout}></Header>
            <div className="cal-body">
            <div id="cal-container">
                <div id="month-chooser">
                  <div id="prev" onClick={gotoPrevMonth}></div>
                  <p>{getMonthText(currentMonth)}, {currentYear}</p>
                  <div id="next" onClick={gotoNextMonth}></div>
                </div>
                {daysOfWeek.map(day => <div key={day} className='week-day'>{day}</div>)}
                {paivat.map((x) => (
                    <Paiva 
                      key={x ? x : generateStr()}
                      date={x}
                      setcurrentDay={setcurrentDay}
                      currentDay={currentDay}
                    >
                    </Paiva>
                ))}
            </div>
            <Reminders currentDay={currentDay} user={user} setCurrentYear={setCurrentYear} setcurrentMonth={setcurrentMonth}></Reminders>
        </div>
      </>

    );
}

export default Calender;
