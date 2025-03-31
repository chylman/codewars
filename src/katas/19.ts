// return masked string
export function maskify(cc) {
  return [...cc.split('').splice(0, cc.length-4).map(s => '#'), ...cc.split('').splice(-4, 4)].join('')
}
