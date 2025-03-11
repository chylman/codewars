export function addLength(str) {
    return str.split(' ').map(item => `${item} ${item.length}`)
}
