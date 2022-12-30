export function splitter(value, delimiter) {
    if (!value) return value
    let v = value + ""

    if (!v.includes(delimiter)) {
        if (/\d*/.test(v)) {
            v = v.split("").reverse().join("")
            return v.match(/.{1,3}/g)
                .reverse()
                .map(i => i.split("").reverse().join(""))
                .join(delimiter)
        }
        return value
    }



}