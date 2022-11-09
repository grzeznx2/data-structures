export default function zeroSumPair(array: number[]): number[] | undefined {
  let leftPointer = 0
  let rightPointer = array.length

  while (leftPointer < rightPointer) {
    const left = array[leftPointer]
    const right = array[rightPointer]
    const sum = left + right

    if (sum === 0) return [left, right]

    if (sum < 0) {
      leftPointer++
    } else {
      rightPointer--
    }
  }

  return undefined
}
