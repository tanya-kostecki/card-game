export const randomizeIndex = (minIndex: number, maxIndex: number) => {
    const index = Math.floor(Math.random()* (maxIndex - minIndex))
    return index
}

export const shuffle = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
}