export function findOdd(A) {
  return +(Object.entries(A.reduce((acc, n) => {
    acc[n.toString()] = acc[n] ? acc[n] + 1 : 1
    return acc;
  }, {})).find(i => i[1] % 2 !== 0).shift())
}