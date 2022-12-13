export function dateString(year, month, day, printable = false) {
    if (!year || !month || !day) return null;
    if (printable) {
        // dd/mm/yyyy
        return (new Date(year, month - 1, day).toLocaleDateString("en-GB"))
    }
    return (new Date(
        year,
        month - 1,
        day
    ).toLocaleDateString("en-CA"))
}