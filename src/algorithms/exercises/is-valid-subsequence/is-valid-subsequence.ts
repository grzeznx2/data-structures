/*
Given two non-empty arrays of integer, write a function that determines whether the second array is a subsequence of the first one.
*/

export default function isValidSubsequence(array: number[], sequence: number[]) {
  let seqIndex = 0

  if (sequence.length === 0) {
    return true
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[seqIndex]) {
      seqIndex++
    }
    if (seqIndex === sequence.length) return true
  }

  return false
}
