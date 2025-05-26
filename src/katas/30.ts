
export function dirReduc(arr){
  const oppositeValues = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST"
  }

  const check = (array) => {
    let flag = false
    const result = array.reduce((acc, item, currentIndex, array) => {
      const opposite = oppositeValues[item]

      if (!flag) {
        if (opposite === array[currentIndex + 1]) {
          flag = true
          return acc
        } else {
          return [...acc, item]
        }
      } else {
        flag = false
        return acc
      }

    }, [])

    if (array.length > result.length) {
      return check(result)
    } else {
      return result
    }
  }

  return check(arr)
}