import { writeJsonAnt } from '../writeJson'
import { translate } from '../mini/translate'
import { getGradientBee } from '../../bees/getGradient'
import {
  flatten,
  piped,
  uniq,
} from 'rambdax'
const base = 'src/ants/generateColors/colors'

function getOpacities(){
  return [
    'f1',
    'e9',
    'd6',
  ]
}

export function applyOpacities(hexColor){
  if (hexColor.length === 9){

    return [ hexColor ]
  }

  const opacities = getOpacities()

  const toReturn = opacities.map(
    singleOpacity => `${ hexColor }${ singleOpacity }`
  )

  return [ hexColor, toReturn ]
}

export function generateColorsAnt({
  input,
  levels = 20,
  label = '',
  opacityFlag,
}){
  const [ firstRaw, secondRaw ] = input
  const OUTPUT = `${ base }/${ label }_COLORS.json`

  const first = firstRaw.startsWith('#') ?
    firstRaw :
    translate(firstRaw)

  const second = secondRaw.startsWith('#') ?
    secondRaw :
    translate(secondRaw)

  const colors = piped(
    getGradientBee(first, second, levels),
    uniq,
  )

  if (!opacityFlag) return writeJsonAnt(OUTPUT, flatten(colors))

  const withOpacities = flatten(colors).map(applyOpacities)

  const toSave = flatten(withOpacities)

  writeJsonAnt(OUTPUT, toSave)
}