const MONTHS = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const MONTH_LENGTHS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

export function dateEquals(date1, date2) {
    return date1.getYear() === date2.getYear() &&  // vertaillaan onko sama vuosi
           date1.getMonth() === date2.getMonth() && // onko sama kuukausi
           date1.getDate() === date2.getDate(); // onko sama kuukauden paivia
}

export function generateStr() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 6);
}

export function getMonthText(monthIndex) {
    return MONTHS[monthIndex];
}

export function getMonthLength(monthIndex) {
    return MONTH_LENGTHS[monthIndex];
}