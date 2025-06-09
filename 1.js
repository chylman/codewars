function generateArray(size = 100000000, commonValue = 7, uniqueValue = 42, uniqueIndex = null) {
  const arr = new Array(size).fill(commonValue);
  if (uniqueIndex === null) {
    uniqueIndex = Math.floor(Math.random() * size);
  }
  arr[uniqueIndex] = uniqueValue;
  return arr;
}

function algorithm1(arr) {
  const [a, b, c] = arr;
  const common = a === b ? a : a === c ? a : b;
  return arr.find(num => num !== common);
}

function algorithm2(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] !== arr[i + 1]) {
      if (arr[i + 1] !== arr[i + 2]) {
        return arr[i + 1];
      } else {
        return arr[i];
      }
    }
  }
}

// Бенчмарк
const arr = generateArray();

console.time("Algorithm 1");
const res1 = algorithm1(arr);
console.timeEnd("Algorithm 1");

console.time("Algorithm 2");
const res2 = algorithm2(arr);
console.timeEnd("Algorithm 2");

console.log("Result 1:", res1);
console.log("Result 2:", res2);
