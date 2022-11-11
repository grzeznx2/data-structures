/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
*/

export default function sameFrequency(first: number, second: number): boolean {
  const firstString = first.toString()
  const secondString = second.toString()

  if (firstString.length !== secondString.length) {
    return false
  }

  const counter: { [key: string]: number } = {}

  for (let char of firstString) {
    counter[char] = ++counter[char] || 1
  }

  for (let char of secondString) {
    if (counter[char] > 0) {
      --counter[char]
    } else {
      return false
    }
  }

  return true
}
