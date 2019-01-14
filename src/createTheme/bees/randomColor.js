import { random, tail } from 'rambdax'
import { applyDistanceAnt } from '../ants/applyDistance'

export function randomColorBee({
  color,
  numberChanges,
  distance,
}){
  const newColor = [ ...tail(color) ]

  const randomIndexes = []
  while (numberChanges > 0){
    const randomInstance = random(0, 5)
    if (!randomIndexes.includes(randomInstance)){
      numberChanges--
      randomIndexes.push(randomInstance)
    }
  }

  randomIndexes.forEach(randomIndex => {
    newColor[ randomIndex ] = applyDistanceAnt(
      newColor[ randomIndex ],
      distance
    )
  })

  return newColor.join('')
}
