/*

  It's photo day at the local school, and you're the photographer assigned to
  take class photos. The class that you'll be photographing has an even number
  of students, and all these students are wearing red or blue shirts. In fact,
  exactly half of the class is wearing red shirts, and the other half is wearing
  blue shirts. You're responsible for arranging the students in two rows before
  taking the photo. Each row should contain the same number of the students and
  should adhere to the following guidelines:

    -All students wearing red shirts must be in the same row.
    -All students wearing blue shirts must be in the same row.
    -Each student in the back row must be strictly taller than the student
    directly in front of them in the front row.
    
  You're given two input arrays: one containing the heights of all the students
  with red shirts and another one containing the heights of all the students
  with blue shirts. These arrays will always have the same length, and each
  height will be a positive integer. Write a function that returns whether or
  not a class photo that follows the stated guidelines can be taken.

*/

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
