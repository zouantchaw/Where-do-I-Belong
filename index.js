// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
// The returned value should be a number.

// using sort()
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b)

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] >= num)

    // if item is greater than num, return index
    if (arr[i] >= num) return i
  }

  return arr.length
}

function getIndexToIns2(arr, num) {
  console.log(arr.filter(val => num > val))
  return arr.filter(val => num > val)
}

getIndexToIns2([5, 3, 20, 3], 5)