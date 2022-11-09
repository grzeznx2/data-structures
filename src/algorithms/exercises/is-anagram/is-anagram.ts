export default function isAnagram(first: string, second: string): boolean {
  if (first.length !== second.length) {
    return false
  }

  const counter: { [key: string]: number } = {}

  for (let i = 0; i < first.length; i++) {
    const char = first.charAt(i)

    counter[char] = ++counter[char] || 1
  }

  for (let i = 0; i < second.length; i++) {
    const char = second.charAt(i)

    if (counter[char] > 0) {
      counter[char]--
    } else {
      return false
    }
  }

  return true
}
