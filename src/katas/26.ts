export function digitalRoot(n: number) {
    n = n.toString().split('').reduce((acc, n) => acc + parseInt(n), 0)

    return n < 10 ? n : digitalRoot(n)
}
