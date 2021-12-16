import React from 'react'
import { dateEquals, generateStr } from '../../../logic/logic'
import Reminder from './Reminder'

export default function ReminderList({lista, currentDay}) {
    let reminders = lista ? lista.filter(r => dateEquals(currentDay, new Date(r.date))) : [];
    return (
        <ul id="r-lista">
            {reminders.length > 0 ? reminders.map(r => <Reminder remind={r} key={generateStr()}></Reminder>) : "No events found"}
        </ul>
    )
}
