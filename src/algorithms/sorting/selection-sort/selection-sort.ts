function swap(i: number, j: number, array: number[]) {
  ;[array[i], array[j]] = [array[j], array[i]]
}

export default function selectionSort(array: number[]) {
  for (let i = 0; i < array.length - 1; i++) {
    let currentMinIndex = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[currentMinIndex]) currentMinIndex = j
    }
    swap(currentMinIndex, i, array)
  }
  return array
}
