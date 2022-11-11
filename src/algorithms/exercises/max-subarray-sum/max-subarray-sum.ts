export default function maxSubArraySum(array: number[], subarrayLength: number): number {
  if (array.length < subarrayLength) {
    return array.reduce((prev, cur) => prev + cur, 0)
  }

  let maxSum = 0
  let tempSum = 0

  for (let i = 0; i < subarrayLength; i++) {
    maxSum += array[i]
  }

  tempSum = maxSum

  for (let i = subarrayLength; i < array.length; i++) {
    const newSum = tempSum - array[i - subarrayLength] + array[i]
    tempSum = newSum

    if (tempSum > maxSum) {
      maxSum = tempSum
    }
  }

  return maxSum
}
