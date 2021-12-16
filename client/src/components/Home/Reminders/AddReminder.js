import React, {useState} from 'react'
import './reminders.css'
import {dateEquals, getMonthText} from '../../../logic/logic'

export default function AddReminder({currentDay, addNew, setCurrentYear, setcurrentMonth}) {
    const [editing, setEditing] = useState(false)
    const [reminder, setReminder] = useState ( {
        title: "",
        from: "",
        to: "",
        location: ""
    })
    
    function goBackToCurrent() {
        setCurrentYear(currentDay.getFullYear())
        setcurrentMonth(currentDay.getMonth())
    }

    function handleChange(e) {
        let nimi = e.target.name;
        let value = e.target.value;
        let uusReminder = {
            ...reminder
        }
        if (nimi === 'title' && !editing) {
            setEditing(true)
        }
        uusReminder[nimi] = value;
        setReminder(uusReminder)
    }

    function save(e) {
        e.preventDefault()
        addNew(reminder)
        setReminder({
            title: "",
            from: "",
            to: "",
            location: ""
        })
        setEditing(false)
    }

    return (
        <form onSubmit={save}>
            <div id="currday-txt" onClick={goBackToCurrent}>
                {dateEquals(currentDay, new Date())
                    ? "Today"
                    : `${currentDay.getDate()}, ${getMonthText(
                          currentDay.getMonth()
                      )}`}
            </div>
            <div>
                <input
                    type="text"
                    name="title"
                    onChange={(e) => handleChange(e)}
                    value={reminder.title}
                    placeholder="add reminder or event"
                    required={true}
                    className='reminder-input'
                ></input>
            </div>
            {editing ? (
                <>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-clock"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                        </svg>
                        <input
                            type="text"
                            name="from"
                            onChange={(e) => handleChange(e)}
                            value={reminder.from}
                            placeholder="starts at"
                            className='reminder-input'
                        ></input>
                        <span>-</span>
                        <input
                            type="text"
                            name="to"
                            onChange={(e) => handleChange(e)}
                            value={reminder.to}
                            placeholder="ends at"
                            className='reminder-input'
                        ></input>
                    </div>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-geo-alt"
                            viewBox="0 0 16 16"
                        >
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        <input
                            type={"text"}
                            name="location"
                            onChange={(e) => handleChange(e)}
                            value={reminder.location}
                            placeholder="add a location"
                            className='reminder-input'
                        ></input>
                    </div>
                    <button type="submit" className='rem-btn'>Save</button>
                    <button onClick={() => setEditing(false)} className='rem-btn'>Hide</button>
                </>
            ) : (
                <></>
            )}
        </form>
    );
}
