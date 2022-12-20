export function toString(arr, delimiter = ',') {
    if (['string', 'number', 'boolean'].includes(typeof arr)) return arr + ""
    return arr?.map(i=>i.toString().trim()) ?.filter((i) => i) ?.join(delimiter) || ""
    
}