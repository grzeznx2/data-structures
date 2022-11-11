/*
Write a function that merges two arrays of sorted integers.
*/

export default function mergeArrays(first: number[], second: number[]): number[] {
  if (first.length === 0) {
    return second
  }

  if (second.length === 0) {
    return first
  }

  let firstIndex = 0
  let secondIndex = 0

  const mergeResult: number[] = []

  while (firstIndex < first.length && secondIndex < second.length) {
    const firstVal = first[firstIndex]
    const secondVal = second[secondIndex]

    if (firstVal < secondVal) {
      mergeResult.push(firstVal)
      firstIndex++
    } else {
      mergeResult.push(secondVal)
      secondIndex++
    }

    if (firstIndex === first.length) {
      mergeResult.push(...second.splice(secondIndex))
      break
    } else if (secondIndex === second.length) {
      mergeResult.push(...first.splice(firstIndex))
      break
    }
  }

  return mergeResult
}
