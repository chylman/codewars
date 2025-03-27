export function XO(str) {
  const xo = str.split('').reduce((acc, item) => {
    if (item.toLowerCase() === 'x') {
      acc.X = acc.X + 1
    }

    if (item.toLowerCase() === 'o') {
      acc.O = acc.O + 1
    }

    return acc
  }, {X: 0, O: 0})
  return xo.X === xo.O
}