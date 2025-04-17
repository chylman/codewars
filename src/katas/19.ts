export function persistence(num) {
    let count = 0;

    if (num < 10) {
        return count
    }

    function findSingle(number) {
        count++;
        const multiply = number.toString().split('').map(Number).reduce((acc, number) => acc * number);
        if (multiply < 10) {
            return multiply
        } else {
            return findSingle(multiply);
        }
    }

    findSingle(num);

    return count;
}
