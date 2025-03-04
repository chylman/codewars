function findAverage(array) {
    if (array.length === 0) return 0
    return  array.reduce((sum, item) => sum + item) / array.length
    // your code here
}