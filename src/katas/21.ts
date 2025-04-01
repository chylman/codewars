export function maxPossibleScore(obj, arr) {
  arr.forEach(item => {
    if (obj[item]) {
      obj[item] = obj[item] * 2
    }
  })


  return Object.values(obj).reduce((acc, item) => acc + item, 0)
}