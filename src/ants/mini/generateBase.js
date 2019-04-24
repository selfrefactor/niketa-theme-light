import { resolve } from 'path'
import { outputFileSync } from 'fs-extra'

import { camelCase } from 'string-fn'
import { baseData, baseBase } from '../../../palettes/baseData'
import { switcher, random, remove, replace } from 'rambdax'

const UNDERLINE = '.UNDERLINE'
const extensions = [ '.jsx', '.ts', '.tsx' ]

function save(label, data){
  const output = resolve(
    __dirname,
    `../palettes/generated/${ camelCase(label) }.json`
  )
  outputFileSync(output, JSON.stringify(data, null, 2))
}

export function randomShade(color){
  const seed = random(3, 10)

  const shade = switcher(seed)
    .is(10, `${ color }_DARKER`)
    .is(9, `${ color }_DARK`)
    .is(8, `${ color }_LIGHTER`)
    .is(7, `${ color }_LIGHT`)
    .default(color)

  return shade
}

function pushToTokenColors({ syntaxInstance, underline, tokenColors, color }){
  const tokenColor = {
    name     : syntaxInstance,
    scope    : syntaxInstance,
    settings : {
      ...underline,
      foreground : randomShade(color),
    },
  }

  tokenColors.push(tokenColor)

  if (syntaxInstance.endsWith('.js')){
    const plainSyntaxInstance = remove('.js', syntaxInstance)

    extensions.forEach(extension => {
      const tokenColorExtension = {
        name     : `${ plainSyntaxInstance }${ extension }`,
        scope    : `${ plainSyntaxInstance }${ extension }`,
        settings : {
          ...underline,
          foreground : randomShade(color),
        },
      }
      tokenColors.push(tokenColorExtension)
    })
  }
  if (syntaxInstance.endsWith('.begin.js')){
    const endSyntaxInstance = replace(
      '.begin.js',
      '.end.js',
      syntaxInstance
    )
    pushToTokenColors({
      syntaxInstance : endSyntaxInstance,
      underline,
      tokenColors,
      color,
    })
  }
}

export function generateBase(label){
  const tokenColors = []

  Object.entries(baseData)
    .forEach(([ color, syntaxInstances ]) => {

      syntaxInstances
        .forEach(syntaxInstanceRaw => {
          const syntaxInstance = remove(UNDERLINE, syntaxInstanceRaw)

          const underline = syntaxInstanceRaw.endsWith(UNDERLINE) ?
            { fontStyle : 'underline' } :
            {}

          pushToTokenColors({
            syntaxInstance,
            underline,
            color,
            tokenColors,
          })
        })
    })

  const themeBase = {
    ...baseBase,
    tokenColors,
  }

  save(label, themeBase)
}

