function pigIt(str) {
  return  str.split(' ').map(w => {
    if (!/[.,\/#!$%\^&\*;:{}=\-_`~()?]/.test(w)) {
      const wArray = w.split('')
      const firstSymbol = wArray.shift()
      return [...wArray, firstSymbol, 'ay'].join('')
    } else {
      return w
    }
  }).join(' ')
}