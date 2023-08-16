export const randomizeIndex = (minIndex: number, maxIndex: number) => {
    const index: number = Math.floor(Math.random()* (maxIndex - minIndex))
    return index
}

//алгоритм тасования Фишера — Йетса
export const shuffle = (array: string[]) => {
    let j: number = array.length, t: string, i: number
    while (j) {
      i = Math.floor(Math.random() * j--)
      t = array[j]
      array[j] = array[i]
      array[i] = t
    }
    return array
}

export default randomizeIndex; shuffle