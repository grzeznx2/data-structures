/*

  Write a function that takes in a string of lowercase English-alphabet letters
  and returns the index of the string's first non-repeating character.

*/

export default function firstNonRepeatingCharacter(string: string): number {
  const counter: { [key: string]: number } = {}

  for (let char of string) {
    counter[char] = ++counter[char] || 1
  }

  for (let i = 0; i < string.length; i++) {
    if (counter[string[i]] === 1) {
      return i
    }
  }

  return -1
}
