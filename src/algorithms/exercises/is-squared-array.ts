/*
Write the function, that takes two number[] as arguments and checks if every value from first array has its square in second array.
*/

export default function isSquaredArray(first: number[], second: number[]): boolean {
  const counter: { [key: number]: number } = {}

  for (let number of first) {
    counter[number ** 2] = ++counter[number ** 2] || 1
  }

  for (let number of second) {
    if (counter[number] > 0) {
      --counter[number]
    } else {
      return false
    }
  }

  return true
}
