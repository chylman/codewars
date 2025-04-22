export function arrayDiff(a, b) {
  return (b.length === 0) ? a : a.filter(number => !b.includes(number))
}