export function squareSum(numbers) {
  return numbers.reduce((acc, n) => acc + n * n, 0)
}