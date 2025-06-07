export  function findUniq(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            if (arr[i + 1] !== arr[i+2]) {
                return arr[i + 1]
                break
            } else {
                return arr[i]
                break
            }
        }
    }
}
