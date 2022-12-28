export function ofFifteen(v) {
    let b = Array(15).fill("");
    b.splice(0, v.length, ...v);
    return b;
}