import { range } from 'rambdax'

export function generateThemeDataBee({ pallete, chrome, colors }){
  console.log(chrome, colors)

  // const keys = Object.keys(rules)
  // const len = rules[ keys[ 0 ] ].length

  // return range(0, len).map(i => {
  //   const newThemeColors = {}
  //   keys.forEach(path => {
  //     newThemeColors[ path ] = rules[ path ][ i ]
  //   })

  //   return {
  //     ...originTheme,
  //     colors : {
  //       ...originTheme.colors,
  //       ...newThemeColors,
  //     },
  //   }
  // })
}

// export function generateThemeDataBee(rules, originTheme){
//   const keys = Object.keys(rules)
//   const len = rules[ keys[ 0 ] ].length

//   return range(0, len).map(i => {
//     const newThemeColors = {}
//     keys.forEach(path => {
//       newThemeColors[ path ] = rules[ path ][ i ]
//     })

//     return {
//       ...originTheme,
//       colors : {
//         ...originTheme.colors,
//         ...newThemeColors,
//       },
//     }
//   })
// }