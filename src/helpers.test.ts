const { randomizeIndex } = require('./helpers')

it('should return a random index between minIndex and maxIndex', () => {
    const minIndex: number = 0
    const maxIndex: number = 4
    const resultIndex = randomizeIndex(minIndex, maxIndex)

    expect(resultIndex).toBeGreaterThanOrEqual(minIndex)
    expect(resultIndex).toBeLessThan(maxIndex)
})

const { shuffle } = require('./helpers')

it ('should return an array of the same length', () => {
    const array: string[] = ['1', '1', '2', '2']
    const resultArray: string[] = shuffle(array)

    expect(resultArray.length).toEqual(array.length)
})



