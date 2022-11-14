export default function classPhotos(redShirts: number[], blueShirts: number[]): boolean {
  const sortedRedShirts = redShirts.sort((a, b) => a - b)
  const sortedBlueShirts = blueShirts.sort((a, b) => a - b)

  const firstRed = sortedRedShirts[0]
  const firstBlue = sortedBlueShirts[0]

  if (firstRed === firstBlue) {
    return false
  } else if (firstRed < firstBlue) {
    for (let i = 1; i < sortedRedShirts.length; i++) {
      if (sortedRedShirts[i] >= sortedBlueShirts[i]) {
        return false
      }
    }
  } else {
    for (let i = 1; i < sortedRedShirts.length; i++) {
      if (sortedBlueShirts[i] >= sortedRedShirts[i]) {
        return false
      }
    }
  }

  return true
}
