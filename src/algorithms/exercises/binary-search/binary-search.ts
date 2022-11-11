/*
Given a sorted 'array' of integers, write a function that returns the index of 'target' if 'target' is found in 'array' or -1 otherwise.
*/

export default function binarySearch(array: number[], target: number): number {
  let left = 0
  let right = array.length - 1

  while (left <= right) {
    const middle = Math.floor((right + left) / 2)
    const middleVal = array[middle]

    if (middleVal < target) {
      left = middle + 1
    } else if (middleVal > target) {
      right = middle - 1
    } else {
      return middle
    }
  }

  return -1
}

/*
Divide and Conquer
*/
