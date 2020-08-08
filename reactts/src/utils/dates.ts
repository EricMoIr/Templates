export function getTime(timestamp) {
    return new Date(timestamp).toLocaleTimeString("en-US", { hour12: false, hour: "numeric", minute: "numeric" });
}

export function isSameDay(date1: Date, date2: Date) {
    return (
        date1.getDay() === date2.getDay() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
    );
}

export function getDate(timestamp) {
    return new Date(timestamp);
}

export function getFullDate(date: Date) {
    //const fullDate2 = date.toLocaleDateString("es-AR");
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day}/${month + 1}/${year}`;
    //return fullDate2;
}
