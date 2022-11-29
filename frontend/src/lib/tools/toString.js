export function toString(arr, delimiter = ',') {
    if(['string', 'number', 'boolean'].includes(typeof arr)) return arr
    return arr?.
    filter((i) => i ?.trim())?.join(delimiter)
}