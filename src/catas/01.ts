export function nbYear(p0: number, percent: number, aug: number, p: number) {
    let currentPopulation = p0;
    let year = 0;
    while (currentPopulation < p) {
        debugger
        currentPopulation = currentPopulation + currentPopulation * (percent / 100) + aug
        year++
    }

    return year

}