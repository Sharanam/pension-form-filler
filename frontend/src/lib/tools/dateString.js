export function dateString(year, month, day) {
    if (!year || !month || !day) return null;
    return (new Date(
        year,
        month - 1,
        day
    ).toLocaleDateString("en-CA"))
}