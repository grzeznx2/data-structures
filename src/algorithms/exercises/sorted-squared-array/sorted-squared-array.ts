/*
  Write a function that takes in a non-empty array of integers that are sorted
  in ascending order and returns a new array of the same length with the squares
  of the original integers also sorted in ascending order.
*/

export default function sortedSquaredArray(array: number[]): number[] {
  const sortedSquares = Array.from({ length: array.length }, () => 0)

  let leftIndex = 0
  let rightIndex = array.length - 1

  for (let i = array.length - 1; i >= 0; i--) {
    const leftValSquared = array[leftIndex] * array[leftIndex]
    const rightValSquared = array[rightIndex] * array[rightIndex]

    if (leftValSquared > rightValSquared) {
      sortedSquares[i] = leftValSquared
      leftIndex++
    } else {
      sortedSquares[i] = rightValSquared
      rightIndex--
    }
  }

  return sortedSquares
}
