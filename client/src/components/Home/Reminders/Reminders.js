import React, {useState, useEffect} from 'react'
import './reminders.css'
import AddReminder from './AddReminder'
import ReminderList from './ReminderList'


export default function Reminders({user, currentDay, setCurrentYear, setcurrentMonth}) {
    const [data, setData] = useState(null)

    useEffect(() => {
        if (!data) {
            fetch('/calender', {
                method: "POST", // or 'PUT'
                cors: "Access-Control-Allow-Origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({user: user})
            })
              .then(res => res.json())
              .then(res => {
                  setData(res)
              })
              .then(err => console.error(err));
        }
    })

    function addNew (reminder) {
        let uusData = Array.from(data);
        reminder.date = `${currentDay.getFullYear()}-${currentDay.getMonth() + 1}-${currentDay.getDate()}`;
        fetch(`/calender/new`, {
            method: "POST", // or 'PUT'
            cors: "Access-Control-Allow-Origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"user": user, "reminder": reminder}),
        }).then((response) => {
            console.log(response);
            if (response.status === 200 && response.ok) {
                uusData.push(reminder)
                setData(uusData);
            }
        }).then(res => console.log(res))
          .then(err => console.error(err))
        // Todo: write to file in server
    }
    return (
        <>
           <AddReminder addNew={addNew} currentDay={currentDay} setCurrentYear={setCurrentYear} setcurrentMonth={setcurrentMonth}></AddReminder>
           <ReminderList lista={data} currentDay={currentDay}></ReminderList> 
        </>
    )
}
