export function accum(s) {
    return s.toLowerCase().split('').reduce((acc, currentItem, index) => {
        if (index === 0) {
            return currentItem.toUpperCase()
        } else {
            return `${acc}-${currentItem.toUpperCase()}${currentItem.repeat(index)}`
        }
    }, '')
}