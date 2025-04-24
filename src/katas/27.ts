function moveZeros(arr) {
  const arrWithoutZero = arr.filter(item => item !== 0)
  const arrZero = []
  arrZero.length = arr.length - arrWithoutZero.length
  return [...arrWithoutZero, ...arrZero.fill(0, 0, arrZero.length)]
}