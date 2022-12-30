export function splitter(value, delimiter) {
    value = value + ""

    if (!value.includes(delimiter)) {
        if (/\d*/.test(value)) {
            value = value.split("").reverse().join("")
            return value.match(/.{1,3}/g)
                .reverse()
                .map(i => i.split("").reverse().join(""))
                .join(delimiter)
        }
    }


}