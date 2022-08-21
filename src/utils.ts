const toUpperFirst = (word: string) => word.at(0)?.toUpperCase() + word.slice(1)

const appendZero = (num: string) => (num.length < 2 ? `0${num}` : num)

const toMinutesAndSeconds = (seconds: number) => [
  Math.floor(seconds / 60).toString(),
  appendZero((seconds % 60).toString()),
]

export { toUpperFirst, toMinutesAndSeconds }
