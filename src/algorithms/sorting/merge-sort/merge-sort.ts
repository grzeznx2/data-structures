/*
Merge Sort Algorithm
*/

import mergeArrays from '../../exercises/merge-arrays/merge-arrays'

export default function mergeSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array
  }

  const midIndex = Math.floor(array.length / 2)
  const leftSortedArray = mergeSort(array.slice(0, midIndex))
  const rightSortedArray = mergeSort(array.slice(midIndex))

  return mergeArrays(leftSortedArray, rightSortedArray)
}
