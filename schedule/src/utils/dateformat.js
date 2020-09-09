export default function dateFormat (year, month, day) {
    const m = (month < 10) ? `0${month}` : month;
    const d = (day < 10) ? `0${day}` : day;
    return `${year}-${m}-${d}`;
};