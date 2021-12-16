import React, {useEffect, useState} from 'react'

export default function Time() {

    const [time, setTime] = useState(new Date().toLocaleString())

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleString())
        }, 999)
    })
    return (
        <div style={{marginRight:"10px"}}>
            {time}
        </div>
    )
}
