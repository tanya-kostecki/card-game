export const randomizeIndex = (minIndex: number, maxIndex: number) => {
    const index = Math.floor(Math.random()* (maxIndex - minIndex))
    return index
}

export const shuffle = (array: string[]) => {
    array.sort(() => Math.random() - 0.5)
}