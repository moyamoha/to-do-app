import React from 'react'

export default function Reminder({remind}) {
    function handleMouseDown(e) {
        // console.log()
    }
    return (
        <li className='single-reminder' onMouseDown={e => handleMouseDown(e)}>
            <span><span>&gt;</span>{remind.title}</span>
            <span>{remind.from} - {remind.to}</span>
            <select>
                <option>edit</option>
                <option>delete</option>
            </select>
        </li>
    )
}
