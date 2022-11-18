function swap(i: number, j: number, array: number[]) {
  ;[array[i], array[j]] = [array[j], array[i]]
}

export default function insertionSort(array: number[]) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      const current = array[j]
      const prev = array[j - 1]
      if (prev > current) {
        swap(j, j - 1, array)
      } else break
    }
  }
  return array
}
