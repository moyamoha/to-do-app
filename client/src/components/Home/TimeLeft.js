import React, { useState, useEffect } from "react";

function getDateFromMs(ms) {
    let paiva = Math.floor(ms / 86400000);
    let tunti = ((ms - paiva * 86400000) / 3600000) | 0;
    let minuutti = ((ms - paiva * 86400000 - tunti * 3600000) / 60000) | 0;
    let sekuntti =
        ((ms - paiva * 86400000 - tunti * 3600000 - minuutti * 60000) / 1000) |
        0;
    return [paiva, tunti, minuutti, sekuntti];
}

export default function TimeLeft({ start }) {
    const [timeLeft, setTimeLeft] = useState(start);

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(timeLeft - 1000);
        }, 1000);
    });

    let [p, t, m, s] = getDateFromMs(timeLeft);
    return (
        <div>
            {p} päiviä {t} tuntia {m} minuuttia {s} sekunttia
        </div>
    );
}
