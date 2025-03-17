export function squareDigits(num){

    return +(`${num}`.split('').map(s => (+s) * (+s)).join(''));
}