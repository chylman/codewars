export function solution(number: number) {
    if (number < 0){
        return 0;
    }

    const multiples = []

    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            multiples.push(i);
        }
    }

    return multiples.reduce((acc, cur) => acc + cur, 0);

}
