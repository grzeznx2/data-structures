function calcNextIndex(currentIndex: number, array: number[]) {
  const jump = array[currentIndex]
  const nextIndex = (currentIndex + jump) % array.length
  if (nextIndex >= 0) return nextIndex
  return nextIndex + array.length
}

function singleCycleCheck(array: number[]) {
  // Write your code here.
  // 	1. Create a hash map of indices visited
  const indicesVisited: { [key: number]: boolean } = {}
  // 	2. Create current index variable
  let currentIndex = 0
  let counter = 0
  // 	3. Jump with while loop, (current index not visited, counter < array.length)
  while (!indicesVisited[currentIndex] && counter < array.length) {
    // 	-increase counter
    counter++
    // 	-store visited index in hash map
    indicesVisited[currentIndex] = true
    // 	-assign next index to current index
    currentIndex = calcNextIndex(currentIndex, array)
  }
  // 	4. Create a counter for jumps count
  // 	5. Return true if counter === array.length && currentIndex === 0
  return counter === array.length && currentIndex === 0
}
