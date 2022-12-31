export function ageCalculator(date1, today) {
    let [day, month, year] = date1
    let [day2, month2, year2] = today

    if (!day || !month || !year) return ""
    day2 = day2 || new Date().getDate()
    month2 = month2 || new Date().getMonth() + 1
    year2 = year2 || new Date().getFullYear()

    let age = year2 - year

    if (month2 < month || (month2 == month && day2 < day)) age--
        return age
}