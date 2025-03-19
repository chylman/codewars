export function openOrSenior(data: Array<[number, number]>){
    return data.map(m => {
        if (m[0] < 55 || m[1] <= 7) {
            return 'Open'
        } else {
            return 'Senior'
        }
    })
}